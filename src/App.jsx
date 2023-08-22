import { useState } from "react";
import { SingleRecipePage } from "./pages/SingleRecipePage";
import { RecipeSearch } from "./components/ui/RecipeSearch";
import { Center, Heading } from "@chakra-ui/react";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <Center h="100vh" flexDir="column">
      {selectedItem ? (
        <SingleRecipePage item={selectedItem} clickFn={setSelectedItem} />
      ) : (
        <>
          <Heading mb={8} size="2xl" color="blue.600">
            Recipe Checker
          </Heading>
          <RecipeSearch clickFn={setSelectedItem} />
        </>
      )}
    </Center>
  );
};
