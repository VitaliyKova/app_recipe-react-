import { configureStore } from "@reduxjs/toolkit";
import RecipeReduser from "./sliceRecipes";


const store = configureStore({
    reducer: {
        recipes: RecipeReduser,
    },
})

export default store