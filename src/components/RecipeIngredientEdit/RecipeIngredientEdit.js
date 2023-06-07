import React from "react";

const RecipeIngredientEdit = () => {
  return (
    <>
      <input className="recipe-edit__input" type="text" />
      <input className="recipe-edit__input" type="text" />
      <button className="btn btn--danger">&times;</button>
    </>
  );
};

export default RecipeIngredientEdit;
