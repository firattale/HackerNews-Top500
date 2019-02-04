import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div>
        <p>Hacker News Top 500 Stories</p>
        <img src={require("./logo.jpg")} alt="Logo" height="50" width="50" />
      </div>
    </header>
  );
};

export default Header;
