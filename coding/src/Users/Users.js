import React from "react";
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

  const NavButtons = (args) => {
    return (
      <div>
        {" "}
        <button
          onClick={() => {
            if (0 !== number) setNumber(number - 1);
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            if (database.length - 1 !== number) setNumber(number + 1);
          }}
        >
          Next
        </button>
      </div>
    );
  };

  const LikeButton = () => {
    return (
      <button
        onClick={() => {
          setDatabase(
            database.map((profile) => {
              if (profile.name === name) {
                profile.like = !like;
              }
              return profile;
            })
          );
        }}
      >
        {like ? "Unlike" : "Like"}
      </button>
    );
  };

  return (
    <div>
      <ChampionVideo videoLink={vidSource} />
      <h1 style={{ color: "white" }}>{headline}</h1>
      <h2 style={{ color: "white" }}>{headline2}</h2>
      <SpinningIcons image={picOne} imageClass={"picOne"} />
      <SpinningIcons image={picTwo} imageClass={"picTwo"} />
      <SpinningIcons image={picThree} imageClass={"picThree"} />
      <NavButtons />
      <LikeButton />
    </div>
  );
}
