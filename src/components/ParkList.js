import React, { useEffect, useState } from "react";
import * as contentful from "contentful";
import ParkRating from "./ParkRating";
import RichTextToReact from "rich-text-to-react";

const ParkList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const client = contentful.createClient({
      space: "ybdzwdfm9wam",
      accessToken: "xUK7DNhIkRFNcaOZDzkJGZdmOmQOjG3s9Fi7TSH8CYQ"
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

  return (
    <div>
      {posts.map(item => (
        <div>
          <h3>{item.title}</h3>
          <ParkRating />
          <img src={item.parkImages[0].fields.file.url} alt={item.title} />
          <RichTextToReact document={item.description} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ParkList;
