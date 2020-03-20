import React, { useEffect, useState } from "react";

const TableList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Require and initialize outside of your main handler
    const mysql = require("serverless-mysql")({
      config: {
        host: "dbpark.cluster-cz9969zbnjpk.us-east-2.rds.amazonaws.com",
        database: "dbpark",
        user: "admin",
        password: "admintmp"
      }
    });

    // Main handler function
    exports.handler = async (event, context) => {
      // Run your query
      let results = await mysql.query("SELECT * FROM User_Rating");
      setPosts(results);

      // Run clean up function
      await mysql.end();

      // Return the results
      return results;
    };
  }, [setPosts]);

  return (
    <div>
      {posts.map(item => (
        <div>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default TableList;
