import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../store/sliceRecipes";
import RecipeList from "../recipeList/RecipeList";
import Header from "../header/Header";
import Loader from "../loader/Loader";
import FormSearch from "../formSearch/FormSearch";

function App() {
  const dispatch = useDispatch();
  const status = useSelector((action) => action.recipes.status);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRecipes(search));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="form-search">
          <FormSearch />
        </div>
        {status === "loading" ? <Loader /> : <RecipeList />}
      </div>
    </div>
  );
}

export default App;

//ЗАкончить передачу от поля ввода до useEffect