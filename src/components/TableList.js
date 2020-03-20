import React, { useEffect, useState } from "react";

const TableList = () => {
  const [table, setTable] = useState([]);
  // Require and initialize outside of your main handler

  const fetchTable = async () => {
    const mysql = require("serverless-mysql")({
      config: {
        host: "dbpark.cluster-cz9969zbnjpk.us-east-2.rds.amazonaws.com",
        database: "dbpark",
        user: "admin",
        password: "admintmp"
      }
    });

    let results = await mysql.query("SELECT * FROM User_Rating");
    setTable(results);
    await mysql.end();
    return results;
  };

  useEffect(() => fetchTable(), [setTable]);

  return (
    <div>
      {table.map(item => (
        <div>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default TableList;
