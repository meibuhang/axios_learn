import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Button from '@material-ui/core/Button';
import NavBar from "./NavBar";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import OneZero from "./OneZero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollMenu from "react-horizontal-scrolling-menu";

// list of items
const list = [
  { name: "Home", target: "/home" },
  { name: "OneZero", target: "/onezero" },
  { name: "Login", target: "/login" },
  { name: "Register", target: "/register" }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, target, selected }) => {
  return (
    <div className={`menu-item  ${selected ? "active" : ""}`}>
      <Link to={target}><Button>{text}</Button></Link>
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const name = el.name;
    const target = el.target;

    return (
      <MenuItem text={name} target={target} key={name} selected={selected} />
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

const selected = "item1";

class App extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }

  state = {
    selected
  };

  onSelect = key => {
    this.setState({ selected: key });
  };

  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
    return (
      <Router>
       
          <NavBar />

          <div className="App">
            <ScrollMenu
              data={menu}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              selected={selected}
              onSelect={this.onSelect}
            />
          </div>

          {/* <Nav /> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Home" exact component={Home} />
            <Route path="/OneZero" exact component={OneZero} />
            <Route path="/Register" component={Register} />
            <Route path="/Login" component={Login} />
          </Switch>
     
      </Router>
    );
  }
}

export default App;
