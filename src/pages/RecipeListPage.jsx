import { Center, Heading } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/ui/RecipeCard";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <Center gap={2} h="100vh" bgColor="blue.200">
      {data.hits.map((item, index) => (
        <RecipeCard clickFn={clickFn} item={item} key={index} />
      ))}
    </Center>
  );
};

<Heading>Recipe Checker</Heading>;
