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
  const calories = Math.trunc(item.recipe.totalNutrients.ENERC_KCAL.quantity);
  const carbs = Math.trunc(item.recipe.totalNutrients.CHOCDF.quantity);
  const protein = Math.trunc(item.recipe.totalNutrients.PROCNT.quantity);
  const fat = Math.trunc(item.recipe.totalNutrients.FAT.quantity);
  const cholesterol = Math.trunc(item.recipe.totalNutrients.CHOLE.quantity);
  const sodium = Math.trunc(item.recipe.totalNutrients.NA.quantity);

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
            src={item.recipe.image}
            borderRadius="md"
            borderStyle={"solid"}
            borderWidth={2}
            borderColor={"black"}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.recipe.label}</Heading>
            <Text color="blue.600">
              {item.recipe.mealType}
              {item.recipe.dishType}
              {item.recipe.totalTime}
              {item.recipe.dietLabels}
              {item.recipe.healthLabels}
              {item.recipe.cautions}
              {item.recipe.ingredientLines}
              {item.recipe.dishType}
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
