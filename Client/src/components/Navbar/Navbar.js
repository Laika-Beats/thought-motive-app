import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "./Button";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbar-Logo">
          Thought Motive<i className="fab fa-react"></i>
        </h1>
        <div className="Menu-Icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "Nav-Menu active" : "Nav-Menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li className="Nav-Links" key={index}>
                <a href={item.url}>{item.title}</a>
              </li>
            );
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    );
  }
}

export default Navbar;
