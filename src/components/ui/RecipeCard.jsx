import { Card, Image, CardBody, Stack, Heading, Text } from "@chakra-ui/react";

export const RecipeCard = ({ item, clickFn }) => {
  return (
    <Card
      borderRadius="xl"
      borderStyle={"solid"}
      borderWidth={3}
      w="sm"
      h="30rem"
      onClick={() => clickFn(item)}
      cursor="pointer"
      _hover={{ transform: "scale(1.01)" }}
    >
      <CardBody>
        <Image
          h={64}
          w="sm"
          src={item.hits.recipe.image}
          borderRadius="md"
          borderStyle={"solid"}
          borderWidth={2}
          borderColor={"black"}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.hits.recipe.label}</Heading>
          <Text color="blue.600">
            {item.hits.recipe.dietLabels},{item.hits.recipe.cautions},
            {item.hits.recipe.mealType},{item.hits.recipe.dishType},
            {item.recipe.healthLabels}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
