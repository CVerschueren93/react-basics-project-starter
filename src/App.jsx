import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { SingleRecipePage } from "./pages/SingleRecipePage";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <div>
      {selectedItem ? (
        <SingleRecipePage item={selectedItem} clickFn={setSelectedItem} />
      ) : (
        <RecipeListPage clickFn={setSelectedItem} />
      )}
    </div>
  );
};
