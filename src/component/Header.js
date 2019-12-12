import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Button from "@material-ui/core/Button";
import ScrollMenu from "react-horizontal-scrolling-menu";

const Header = ({ onlyNavbar = false }) => {
  const [selected, setSelected] = useState("");

  // list of items
  const list = [
    { name: "Home", target: "/home" },
    { name: "OneZero", target: "/onezero" },
    { name: "Login", target: "/login" },
    { name: "Register", target: "/register" },
    { name: "Article", target: "/article" }
  ];

  // One item component
  // selected prop will be passed
  const MenuItem = ({ btnName, target, selected }) => {
    return (
      <div className={`menu-item  ${selected ? "active" : ""}`}>
        <Link to={target}>
          <Button>{btnName}</Button>
        </Link>
      </div>
    );
  };

  // All items component
  // Important! add unique key
  const Menu = (list, selected) =>
    list.map(item => {
      const name = item.name;
      const target = item.target;

      return (
        <MenuItem
          btnName={name}
          target={target}
          key={name}
          selected={selected}
        />
      );
    });

  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };

  const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
  const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

  // const selected = "item1";

  // call it again if items count changes
  const menuItems = Menu(list, selected);

  const onSelect = key => {
    setSelected(key);
  };

  return (
    <div>
      {onlyNavbar && <NavBar />}
      {!onlyNavbar && (
        <div>
          <NavBar />
          <div className="App">
            <ScrollMenu
              data={menuItems}
              arrowLeft={ArrowLeft}
              arrowRight={ArrowRight}
              selected={selected}
              onSelect={onSelect}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
