import { React, useState } from "react";
import { useSelector } from "react-redux";
import Recipe from "../recipe/Recipe";
import "./recipeList.css";
import { visibleRecipesOnPage } from "../../constants";
import ShowMoreBtn from "../showMoreButton/ShowMoreBtn.jsx";

function RecipeList() {
  const recipe = useSelector((state) => state.recipes.recipesList);
  const [visibleRecipes, setVisibleRecipes] = useState(
    recipe.length > visibleRecipesOnPage ? visibleRecipesOnPage : recipe.length
  );

  const handleClick = () => {
    setVisibleRecipes((prev) =>
      recipe.length - visibleRecipesOnPage >= visibleRecipesOnPage
        ? (prev + visibleRecipesOnPage)
        : (prev + recipe.length - visibleRecipesOnPage)
    );
  };

  return (
    <>
      <div className="recipeList">
        {recipe.slice(0, visibleRecipes).map((recipe, index) => (
          <div key={index} className="recipeList__item">
            <Recipe
              title={recipe.title}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
              size={false}
            />
          </div>
        ))}
      </div>
      <div className="show-more">
        {recipe.length != visibleRecipes && <ShowMoreBtn onClick={handleClick}/>}
      </div>
    </>
  );
}

export default RecipeList;
