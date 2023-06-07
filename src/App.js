import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeList from "./components/RecipeList/RecipeList";
import RecipeEdit from "./components/RecipeEdit/RecipeEdit";
import "./components/styling/styled.css";

// const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingwithReact.recipes";

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  // const recipeContextValue = {
  //   handleRecipeAdd: handleRecipeAdd,
  //   handleRecipeDelete: handleRecipeDelete,
  // };

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instruc.",
      ingredients: [{ id: uuidv4(), name: "Name", amount: "1tbs" }],
    };
    setRecipes([...recipes, newRecipe]);
  };

  const handleRecipeDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    // <RecipeContext.Provider value={recipeContextValue}>
    <>
      <RecipeList
        recipes={recipes}
        handleRecipeAdd={handleRecipeAdd}
        handleRecipeDelete={handleRecipeDelete}
      />
      <RecipeEdit />
      {/* </RecipeContext.Provider> */}
    </>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions:
      "1.Put salt on the chicken\n2. Put the chicken in the oven\n3. Eat the chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1tbs",
      },
    ],
  },

  {
    id: 2,
    name: "Plain Pork",
    servings: 5,
    cookTime: "0:45",
    instructions:
      "1.Put paprika on pork\n2. Put the pork in the oven\n3. Eat the pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 pounds",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2tbs",
      },
    ],
  },
];
export default App;
