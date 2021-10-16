import "./App.css";
import React, { useState, useEffect } from "react";
import initialDatabase from "./basicsources/database.js"


function App() {
  

  /* useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:4000");
      setDatabase(result.data);
    };
    fetchData();
  }, []);




  if (!database) {
    return <p>varjabazdmeg</p>;
  }

  */


  const [database, setDatabase] = useState(initialDatabase);


  const initialNumber = 0;
  const [number, setNumber] = useState(initialNumber);


  const [
    name,
    headline,
    headline2,
    vidSource,
    picOne,
    picTwo,
    picThree,
    like,
   ] = database[number];

   console.log(database, " DATABASEEEEE")



  return (
    <div className="App">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source
          src={vidSource}
          type="video/mp4"
        />
      </video>

      <h1 style={{ color: "white" }}>{headline}</h1>
      <h2 style={{ color: "white" }}>{headline2}</h2>
      <img
        class="picOne"
        style={{ width: "200px", height: "auto" }}
        src={picOne}
      ></img>

      <img
        class="picTwo"
        style={{ width: "200px", height: "auto" }}
        src={picTwo}
      ></img>

      <img
        class="picThree"
        style={{ width: "200px", height: "auto" }}
        src={picThree}
      ></img>

      <button
        onClick={() => {
          if (0 !== number) setNumber(number - 1);
        }}
      >
        Previous
      </button>

      <button
        onClick={() => {
          if (database.length - 1 !== number) {
            setNumber(number + 1);
          }
        }}
      >
        Next
      </button>

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
        {like ? "UnLike" : "Like"}
      </button>
    </div>
  );
}

export default App;
