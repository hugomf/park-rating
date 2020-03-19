import * as contentful from "contentful";
// import ParkRating from "../components/ParkRating";

const CmsContent = () => {
  const client = contentful.createClient({
    space: "ybdzwdfm9wam",
    accessToken: "xUK7DNhIkRFNcaOZDzkJGZdmOmQOjG3s9Fi7TSH8CYQ"
  });
  client.getEntries().then(entries => {
    entries.items.forEach(entry => {
      if (entry.fields) {
        console.log(entry.fields);
      }
    });
  });
};

export default CmsContent;
