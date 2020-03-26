import React, { useEffect, useState } from "react";
import * as contentful from "contentful";
import ParkRating from "./ParkRating";
import RichTextToReact from "rich-text-to-react";
import { useAuth0 } from "../react-auth0-spa";
import Loading from "../components/Loading";
import config from "../app_config.json";

const ParkList = () => {
  const [posts, setPosts] = useState([]);
  const { loading, user } = useAuth0();

  useEffect(() => {
    const client = contentful.createClient({
      space: config.contentful_space,
      accessToken: config.contentful_accessToken
    });

    client.getEntries().then(entries => {
      let data = [];
      entries.items.forEach(entry => {
        if (entry.fields) {
          data.push(entry.fields);
          console.log(entry.fields);
        }
      });
      setPosts(data);
    });
  }, [setPosts]);

  if (loading || !user) {
    return <Loading />;
  }

  return (
    <div>
      {posts.map(item => (
        <div key={item.title}>
          <h3>{item.title}</h3>
          <ParkRating user={user.email} title={item.title} />
          <img src={item.parkImages[0].fields.file.url} alt={item.title} />
          <RichTextToReact document={item.description} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ParkList;
