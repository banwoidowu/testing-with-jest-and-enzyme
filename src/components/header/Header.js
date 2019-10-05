import React from "react";
import "./styles.scss";
import Logo from "../../assets/Logo.png";

const Header = props => {
  return (
    <header data-test="headerComponent">
      <div className="container">
        <div className="logo"></div>
        <img data-test="logoIMG" src={Logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
