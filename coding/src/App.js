import "./App.css";
import Home from "./components/Home.js";
import About from "./components/About.js";
import axios from "axios";
import Users from "./components/Users.js";
import SpinningIcons from "./components/Champions/SpinningIcons/SpinningIcons";
import ChampionButton from "./components/Champions/ChampionButton/ChampionButton";
import ChampionVideo from "./components/Champions/ChampionVideo/ChampionVideo.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
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

  const previousButton = () => {
    if (0 !== number) setNumber(number - 1);
  };
  const nextButton = () => {
    if (database.length - 1 !== number) {
      setNumber(number + 1);
    }
  };

  const likeButton = () => {
    setDatabase(
      database.map((profile) => {
        if (profile.name === name) {
          profile.like = !like;
        }
        return profile;
      })
    );
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
            <ChampionVideo videoLink={vidSource} />

            <h1 style={{ color: "white" }}>{headline}</h1>
            <h2 style={{ color: "white" }}>{headline2}</h2>

            <SpinningIcons image={picOne} imageClass={"picOne"} />
            <SpinningIcons image={picTwo} imageClass={"picTwo"} />
            <SpinningIcons image={picThree} imageClass={"picThree"} />

            <ChampionButton buttonOnclick={previousButton} name={"Previous"} />
            <ChampionButton buttonOnclick={nextButton} name={"Next"} />
            <ChampionButton
              buttonOnclick={likeButton}
              name={like ? "Unlike" : "Like"}
            />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
