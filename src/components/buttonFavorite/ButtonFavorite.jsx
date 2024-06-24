import React, { useState } from "react";
import clases from "./ButtonFavorite.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { togleFavorites } from "../../store/sliceRecipes";
import { useDispatch } from "react-redux";


function ButtonFavorite(title) {
  const [active, setactive] = useState(false);
  const dispatch = useDispatch();

  const togleBtn = () => {
    dispatch(togleFavorites(title));
    setactive(!active)
  };

  return (
    <div onClick={togleBtn}>
      {active ? (
        <FaStar className={clases.icon} />
      ) : (
        <FaRegStar className={clases.icon} />
      )}
    </div>
  );
}

export default ButtonFavorite;
