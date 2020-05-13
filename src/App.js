import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [jokes, setJokes] = useState([{ punchline: " ", setup: " " }]);

  const getJoke = async (type) => {
    setLoading(true);
    await axios
      .get(`https://official-joke-api.appspot.com/jokes/${type}/random`)
      .then((res) => {
        setJokes(res.data);
        setLoading(false);
      });
  };

  const getJokes = async (type, amount) => {
    setLoading(true);
    var temp = [];
    await axios
      .get(`https://official-joke-api.appspot.com/jokes/${type}/ten`)
      .then((res) => {
        if (type === "knock-knock") {
          for (var i = 0; i < 4; i++) {
            temp.push(res.data[i]);
          }
        } else {
          for (var i = 0; i < amount; i++) {
            temp.push(res.data[i]);
          }
        }

        setJokes(temp);
        setLoading(false);
      })
      .catch((err) => console.err);
  };
  return (
    <Home
      loading={loading}
      jokes={jokes}
      getJoke={getJoke}
      getJokes={getJokes}
    />
  );
}

export default App;
