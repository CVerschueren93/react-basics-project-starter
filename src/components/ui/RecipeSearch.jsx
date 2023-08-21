import { useState } from "react";
import { availableRecipes } from "../../utils/data";
import { TextInput } from "./TextInput";
import { RecipeListPage } from "../../pages/RecipeListPage";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState(" ");

  const matchedRecipes = availableRecipes.filter((recipe) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label>Search for recipes:</label>
      <TextInput changeFn={handleChange} w={200} mb={8} />
      <RecipeListPage clickFn={clickFn} drinks={matchedRecipes} />
    </>
  );
};
