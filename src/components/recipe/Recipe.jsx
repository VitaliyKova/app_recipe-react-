import React from "react";
import "./recipe.css";
import ButtonFavorite from "../buttonFavorite/ButtonFavorite";

function Recipe({ ...props }) {
  return (
    <div className={props.size ? 'recipe' : 'recipe recipe__shot'}>
      <h2 className="recipe__title">{props.title}</h2>
      <h3 className="recipe__subtitle">Ingredients:</h3>
      <p className="recipe__ingredients">{props.ingredients}</p>
      {props.size && (
        <div>
          <h3 className="recipe__subtitle">Instruction:</h3>
          <p className="recipe__instruction">{props.instructions}</p>
        </div>
      )}
      <div className="recipe__favorites">
        <ButtonFavorite title={props.title} cl />
      </div>
    </div>
  );
}

export default Recipe;
