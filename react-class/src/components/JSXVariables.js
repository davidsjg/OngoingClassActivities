import React from "react";

const name = 'Joey'
const numLetters = 4
const thoughtsReRe = 'is fucking sweet broski!'

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {numLetters} letters</h2>
          <h2>I think React {thoughtsReRe}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
