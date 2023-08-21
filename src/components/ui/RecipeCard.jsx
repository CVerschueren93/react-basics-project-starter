import { Card, Image, CardBody, Stack, Heading, Text } from "@chakra-ui/react";

export const RecipeCard = ({ chosenRecipe, clickFn }) => {
  const info = chosenRecipe.recipe;

  const veganVegetarian = () => {
    if (info.healthLabels.includes("Vegan")) {
      return "Vegan";
    } else if (info.healthLabels.includes("Vegetarian")) {
      return "Vegetarian";
    }
  };

  const dietLabels = () => {
    if (info.dietLabels.length !== 0) {
      let labelList = info.dietLabels.map((labels) => {
        return <li key={labels}>{labels}</li>;
      });

      return <ul>{labelList}</ul>;
    }
  };

  const cautions = () => {
    if (info.cautions.length !== 0) {
      let cautionList = info.cautions.map((cautions) => {
        return <li key={cautions}>{cautions}</li>;
      });

      return (
        <>
          <p>Cautions:</p>
          <ul>{cautionList}</ul>
        </>
      );
    }
  };
  return (
    <Card
      borderRadius="xl"
      borderStyle={"solid"}
      borderWidth={3}
      w="sm"
      h="30rem"
      onClick={() => clickFn(chosenRecipe)}
      cursor="pointer"
      _hover={{ transform: "scale(1.01)" }}
    >
      <CardBody>
        <Image
          h={64}
          w="sm"
          src={chosenRecipe.image}
          borderRadius="md"
          borderStyle={"solid"}
          borderWidth={2}
          borderColor={"black"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{chosenRecipe.label}</Heading>
          <Text color="blue.600">
            {dietLabels},{cautions},{chosenRecipe.mealType},
            {chosenRecipe.dishType}, {veganVegetarian},
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
