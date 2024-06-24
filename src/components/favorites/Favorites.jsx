import React from "react";
import { useSelector } from "react-redux";
import Recipe from "../recipe/Recipe";

function Favorites() {
  const favorites = useSelector((state) => state.recipes.favorites);

  return (
    <div>
      {favorites.forEach((value, index) => {
        <Recipe
          key={index}
          title={value.title}
          ingredients={value.ingredients}
          instructions={value.instructions}
        />;
      })}
    </div>
  );
}

export default Favorites;
