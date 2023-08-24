import { RecipeSearch } from "../components/ui/RecipeSearch";
import { useState } from "react";
import { SingleRecipePage } from "./SingleRecipePage";

export function RecipeListPage() {
  let [recipe, setRecipe] = useState();

  return (
    <>
      <div>
        {recipe ? (
          <SingleRecipePage selectedRecipe={recipe} clickFn={setRecipe} />
        ) : (
          <RecipeSearch clickFn={setRecipe} />
        )}
      </div>
    </>
  );
}
