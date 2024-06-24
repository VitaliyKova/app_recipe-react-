import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (query) => {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/recipe?query=${query}`,
      {
        headers: { "X-Api-Key": "H5XiQSi7TqLk1XoUbpLMkQ==2ot91tTIAsdu98wV" },
      }
    );
    const data = await response.json();
    return data;
  }
);

const sliceRecipe = createSlice({
  name: "recipes",
  initialState: {
    recipesList: [],
    favorites: [],
    status: "idle",
    error: null,
  },
  reducers: {
    togleFavorites: (state, action) => {
      const some = state.favorites.some((recipe) => recipe.title === action.payload.title);
      some
        ? (state.favorites = state.favorites.filter(
            (value) => value.title !== action.payload.title
          ))
        : state.favorites.push(action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipesList = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      }),
});

export const { togleFavorites } = sliceRecipe.actions;
export default sliceRecipe.reducer;
