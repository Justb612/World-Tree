import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Champions() {
  const [database, setDatabase] = useState();
  const initialNumber = 0;
  const [number, setNumber] = useState(initialNumber);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000");
      setDatabase(result.data);
    };
    fetchData();
  }, []);

  if (!database) {
    return <p>varjabazdmeg</p>;
  }

  console.log(database, "dsad");

  return (
    <div>
      {database.map((champion) => {
        return <img src={champion.picOne}></img>;
      })}
    </div>
  );
}
