import React from "react";
import LikeButton from "./components/Champions/ChampionButton/LikeButton";
import NavButtons from "./components/Champions/ChampionButton/NavButton";
import SpinningIcons from "./components/Champions/SpinningIcons/SpinningIcons";
import ChampionVideo from "./components/Champions/ChampionVideo/ChampionVideo.js";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Users() {
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

  console.log(database);

  const {
    name,
    headline,
    headline2,
    vidSource,
    picOne,
    picTwo,
    picThree,
    like,
  } = database[number];

  return (
    <div>
      <ChampionVideo videoLink={vidSource} />
      <h1 style={{ color: "white" }}>{headline}</h1>
      <h2 style={{ color: "white" }}>{headline2}</h2>
      <SpinningIcons image={picOne} imageClass={"picOne"} />
      <SpinningIcons image={picTwo} imageClass={"picTwo"} />
      <SpinningIcons image={picThree} imageClass={"picThree"} />
      <NavButtons number={number} setNumber={setNumber} database={database} />
      <LikeButton
        name={name}
        setDatabase={setDatabase}
        database={database}
        like={like}
      />
    </div>
  );
}
