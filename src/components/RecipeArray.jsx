import { RecipeCard } from "./ui/RecipeCard";

export const RecipeArray = ({ recipes, clickFn }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.recipe.label}
          selectedRecipe={recipe}
          onClick={clickFn}
        />
      ))}
    </>
  );
};
