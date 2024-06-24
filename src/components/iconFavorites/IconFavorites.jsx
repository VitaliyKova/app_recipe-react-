import React from "react";
import { useSelector } from "react-redux";
import { FaBookBookmark } from "react-icons/fa6";
import clases from "./IconFavorite.module.css";

function IconFavorites() {
  const recipeFavorite = useSelector((state) => state.recipes.favorites);

  return (
    <div className={clases.box}>
      <FaBookBookmark className={clases.icon} />
      {recipeFavorite.length != 0 && (
        <p className={clases.counter}>{recipeFavorite.length}</p>
      )}
    </div>
  );
}

export default IconFavorites;
