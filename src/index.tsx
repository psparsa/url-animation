import React from "react";
import ReactDOM from "react-dom";
import "./res/index.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Oops";

function UrlAnimation() {
  return (
    <div id="UrlAnimation">
      <Router>
        <Header />
        <div id="Pages">
          <Route path="/" exact />
          <Route path="/info:animation">Welcome to Info Page!</Route>
          <Route path="/blog:animation">Welcome to Blog!</Route>
        </div>
      </Router>
    </div>
  );
}

ReactDOM.render(<UrlAnimation />, document.querySelector("#root"));
