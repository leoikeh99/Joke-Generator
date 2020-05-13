import React, { Fragment } from "react";

const SingleJoke = ({ jokes }) => (
  <Fragment>
    <div className="card2">
      <strong>{jokes.setup} </strong>
      <p>- {jokes.punchline}</p>
    </div>
  </Fragment>
);

export default SingleJoke;
