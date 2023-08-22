import {
  Card,
  Center,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

import { Tag } from "../Tag";

export const RecipeCard = ({ item, clickFn }) => {
  const info = item.recipe;

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
          Cautions:
          <ul>{cautionList}</ul>
        </>
      );
    }
  };
  return (
    <Center>
      <Card
        borderRadius="xl"
        borderStyle={"solid"}
        borderWidth={3}
        w="sm"
        h="30rem"
        onClick={() => clickFn(info)}
        cursor="pointer"
        _hover={{ transform: "scale(1.01)" }}
      >
        <CardBody>
          <Image
            h={64}
            w="sm"
            src={item.recipe.image}
            borderRadius="md"
            borderStyle={"solid"}
            borderWidth={2}
            borderColor={"black"}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.recipe.label}</Heading>
            <Text color="blue.600">
              <Flex>
                <Tag>{dietLabels()},</Tag>
              </Flex>
              {cautions()},{item.recipe.mealType},{item.recipe.dishType},
              {veganVegetarian()},
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};
