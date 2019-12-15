import React, { Component } from "react";
import "./App.css";
// import Button from "@material-ui/core/Button";
// import NavBar from "./NavBar";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import OneZero from "./OneZero";
import Bookmark from "./pages/Bookmark";
import Profile from "./pages/Profil";
import Story from "./pages/Story";
import newStory from "./pages/NewStory";
import Article from "./Article";
import Comment from "./Comment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import ScrollMenu from "react-horizontal-scrolling-menu";

// // list of items
// const list = [
//   { name: "Home", target: "/home" },
//   { name: "OneZero", target: "/onezero" },
//   { name: "Login", target: "/login" },
//   { name: "Register", target: "/register" },
//   { name: "Article", target: "/article" }
// ];

// // One item component
// // selected prop will be passed
// const MenuItem = ({ text, target, selected }) => {
//   return (
//     <div className={`menu-item  ${selected ? "active" : ""}`}>
//       <Link to={target}>
//         <Button>{text}</Button>
//       </Link>
//     </div>
//   );
// };

// // All items component
// // Important! add unique key
// export const Menu = (list, selected) =>
//   list.map(el => {
//     const name = el.name;
//     const target = el.target;

//     return (
//       <MenuItem text={name} target={target} key={name} selected={selected} />
//     );
//   });

// const Arrow = ({ text, className }) => {
//   return <div className={className}>{text}</div>;
// };

// const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
// const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

// const selected = "item1";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // call it again if items count changes
  //   this.menuItems = Menu(list, selected);
  // }
  // state = {
  //   selected
  // };

  // onSelect = key => {
  //   this.setState({ selected: key });
  // };

  render() {
    // const { selected } = this.state;
    // // Create menu from items
    // const menu = this.menuItems;
    return (
      <Router>
        {/* <NavBar />

          <div className="App">
            <ScrollMenu
              data={menu}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              selected={selected}
              onSelect={this.onSelect}
            />
          </div> */}

        {/* <Nav /> */}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/onezero" exact component={OneZero} />
          <Route path="/article" component={Article} />
          <Route path="/newstory" exact component={newStory} />
          <Route path="/bookmark" exact component={Bookmark} />
          <Route path="/story" exact component={Story} />
          <Route path="/profil" exact component={Profile} />
          <Route path="/comment" exact component={Comment} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
