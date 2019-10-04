import React from "react";
import "./styles.scss";
import Logo from "../../assets/Logo.png";

const Header = props => {
  return (
    <header>
      <div className="container">
        <div className="logo"></div>
        <img src={Logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
