import React, { Fragment, useEffect } from "react";
import $ from "jquery";
import SingleJoke from "./SingleJoke";
import Spinner from "./Spinner";

export const Home = ({ loading, jokes, getJoke, getJokes }) => {
  useEffect(() => {
    getJoke("general");
  }, []);

  const generate = () => {
    var value = $(".first option:selected").val();
    var amount = $(".amount option:selected").val();
    if (amount == "1") {
      getJoke(value);
    } else {
      getJokes(value, parseInt(amount));
    }
  };
  return (
    <Fragment>
      <div className="container">
        <div className="mt"></div>
        <div className="card">
          <h1>Joke Generator</h1>
          <ul className="main">
            <li className="first ">
              <select name="" id="">
                <option value="general">General</option>
                <option value="knock-knock">Knock-Knock</option>
                <option value="programming">Progamming</option>
              </select>
            </li>
            <li className="amount">
              <select name="" id="">
                <option value="1">1</option>
                <option value="2-knock">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </li>
            <li className="second">
              <a href="#" onClick={generate}>
                Generate{" "}
              </a>
            </li>
          </ul>
          <div className="result">
            {loading && <Spinner />}
            {!loading && jokes.length === 1 && <SingleJoke jokes={jokes[0]} />}
            {!loading &&
              jokes.length !== 1 &&
              jokes.map((joke) => <SingleJoke key={joke.id} jokes={joke} />)}
          </div>
          <div className="contact">
            <a href="https://twitter.com/wazza_dev" target="_blank">
              <i className="fab fa-twitter"></i>{" "}
            </a>{" "}
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
