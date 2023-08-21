import {
  Center,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

export const SingleRecipePage = ({ item, clickFn }) => {
  const calories = Math.trunc(item.totalNutrients.ENERC_KCAL.quantity);
  const carbs = Math.trunc(item.totalNutrients.CHOCDF.quantity);
  const protein = Math.trunc(item.totalNutrients.PROCNT.quantity);
  const fat = Math.trunc(item.totalNutrients.FAT.quantity);
  const cholesterol = Math.trunc(item.totalNutrients.CHOLE.quantity);
  const sodium = Math.trunc(item.totalNutrients.NA.quantity);

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
            <Text color="blue.600">
              {item.hits.recipe.mealType}
              {item.hits.recipe.dishType}
              {item.hits.recipe.totalTime}
              {item.hits.recipe.dietLabels}
              {item.hits.recipe.healthLabels}
              {item.hits.recipe.cautions}
              {item.hits.recipe.ingredientLines}
              {item.hits.recipe.dishType}
              <Text>total nutrients:</Text>
              <li>{calories} CALORIES</li>
              <li>{carbs} g CARBS</li>
              <li>{protein} g PROTEIN</li>
              <li>{fat} g FAT</li>
              <li>{cholesterol} mg CHOLESTEROL</li>
              <li>{sodium} mg SODIUM</li>
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
