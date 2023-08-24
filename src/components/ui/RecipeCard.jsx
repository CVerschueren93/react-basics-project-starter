import "./RecipeCard.css";

export const RecipeCard = ({ selectedRecipe, onClick }) => {
  const info = selectedRecipe.recipe;

  const veganOrVegetarian = () => {
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

      return <ul className="DietLabels">{labelList}</ul>;
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
          <ul className="Cautions">{cautionList}</ul>
        </>
      );
    }
  };
  return (
    <>
      <button className="RecipeCard" onClick={() => onClick(selectedRecipe)}>
        <img src={info.image} className="Image"></img>
        <div className="RecipeInfo">
          <div className="Meal">
            <p className="MealType">{info.mealType}</p>
            <h2 className="HeaderTwo">{info.label}</h2>
          </div>
          <div className="otherInformation">
            <p className="VeganOrVegetarian">{veganOrVegetarian()}</p>
            {dietLabels()}
            <p>Dish Type: {info.dishType}</p>
            {cautions()}
          </div>
        </div>
      </button>
    </>
  );
};
// <Center>
// <Card
// borderRadius="xl"
//borderStyle={"solid"}
//borderWidth={3}
//w="sm"
//h="30rem"
//onClick={() => clickFn(info)}
//cursor="pointer"
//_hover={{ transform: "scale(1.01)" }}
//>
//<CardBody>
//<Image
//h={64}
//w="sm"
//src={item.recipe.image}
//borderRadius="md"
//borderStyle={"solid"}
//borderWidth={2}
//borderColor={"black"}
///>
//<Stack mt="6" spacing="3">
//<Heading size="md">{item.recipe.label}</Heading>
//<Text color="blue.600">
//<Flex>
//<Tag>{dietLabels()},</Tag>
//</Flex>
//{cautions()},{item.recipe.mealType},{item.recipe.dishType},
//{veganVegetarian()},
//</Text>
//</Stack>
//</CardBody>
//</Card>
//</Center>
//);
//};
