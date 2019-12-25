import React, { Component } from "react";
import "./App.css";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import OneZero from "./OneZero";
import Bookmark from "./pages/Bookmark";
import Profile from "./pages/Profil";
import Story from "./pages/Story";
import Status from "./pages/Status";
import newStory from "./pages/NewStory";
import Article from "./Article";
import Comment from "./Comment";
import Header from "./component/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/onezero" exact component={OneZero} />
          <Route path="/article" component={Article} />
          <Route path="/newstory" exact component={newStory} />
          <Route path="/bookmark" exact component={Bookmark} />
          <Route path="/story" exact component={Story} />
          <Route path="/stats" exact component={Status} />
          <Route path="/profil" exact component={Profile} />
          <Route path="/comment" exact component={Comment} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/header" component={Header} />
        </Switch>
      </Router>
    );
  }
}

export default App;
