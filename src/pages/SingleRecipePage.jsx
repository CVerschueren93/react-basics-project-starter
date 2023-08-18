import {
  Center,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";

export const SingleRecipePage = ({ item, clickFn }) => {
  return (
    <Center bgColor="blue.200" h="100vh" flexDirection="column">
      <Card
        borderStyle={"solid"}
        borderWidth={3}
        borderRadius="xl"
        w="3xl"
        h="3xl"
      >
        <CardBody>
          <Image
            h="md"
            w="100%"
            src={item.hits.recipe.image}
            borderRadius="md"
            borderStyle={"solid"}
            borderWidth={2}
            borderColor={"black"}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.hits.recipe.label}</Heading>
            <Text color="blue.600">{item.hits.recipe.mealType}
            {item.hits.recipe.dishType}
            {item.hits.recipe.totalTime}
            {item.hits.recipe.dietLabels}
            {item.hits.recipe.healthLabels}
            {item.hits.recipe.cautions}
            {item.hits.recipe.ingredientLines}
            {item.hits.recipe.totalNutrients->kcal proteine fat carbs cholesterol sodium}
            servings?
            </Text>
            

            <Button color="blue.600" w="fit-content" onClick={() => clickFn()}>
              Back to overview
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};
