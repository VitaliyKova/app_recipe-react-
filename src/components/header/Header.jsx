import React from "react";
import "./Header.css";
import IconFavorites from "../iconFavorites/IconFavorites";

function Header() {
  return (
    <>
      <div className="header">
        <h1 className="header__title">my recipes</h1>
        <IconFavorites />
      </div>
    </>
  );
}

export default Header;
