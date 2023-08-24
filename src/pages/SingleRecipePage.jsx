export const SingleRecipePage = ({ selectedRecipe, clickFn }) => {
  const info = selectedRecipe.recipe;

  const ingredients = () => {
    let ingredientList = info.ingredientLines.map((ingredient) => {
      return <li key={ingredient}>{ingredient}</li>;
    });

    return (
      <>
        <h2>Ingredients</h2>
        <ul>{ingredientList}</ul>
      </>
    );
  };

  const dietLabels = () => {
    if (info.dietLabels.length !== 0) {
      let labelList = info.dietLabels.map((labels) => {
        return <li key={labels}>{labels}</li>;
      });

      return (
        <>
          <div>
            <p>Diet</p>
            <ul>{labelList}</ul>
          </div>
        </>
      );
    }
  };

  const healthLabels = () => {
    let healthLabelList = info.healthLabels.map((label) => {
      return <li key={label}>{label}</li>;
    });

    return (
      <>
        <div>
          <p>Health labels</p>
          <ul>{healthLabelList}</ul>
        </div>
      </>
    );
  };

  const cautions = () => {
    if (info.cautions.length !== 0) {
      let cautionList = info.cautions.map((cautions) => {
        return <li key={cautions}>{cautions}</li>;
      });

      return (
        <>
          <div>
            <p>Cautions</p>
            <ul>{cautionList}</ul>
          </div>
        </>
      );
    }
  };

  const totalNutrients = () => {
    const calories = Math.round(info.totalNutrients.ENERC_KCAL.quantity);
    const protein = Math.round(info.totalNutrients.PROCNT.quantity);
    const fat = Math.round(info.totalNutrients.FAT.quantity);
    const carbs = Math.round(info.totalNutrients.CHOCDF.quantity);
    const cholesterol = Math.round(info.totalNutrients.CHOLE.quantity);
    const sodium = Math.round(info.totalNutrients.NA.quantity);

    return (
      <>
        <div>
          <p>Total nutrients</p>
          <ul>
            <li>{calories} calories</li>
            <li>{protein} g protein</li>
            <li>{fat} g fat</li>
            <li>{carbs} g carbs</li>
            <li>{cholesterol} mg cholesterol</li>
            <li>{sodium} mg sodium</li>
          </ul>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <button onClick={() => clickFn()}>Back to overview</button>
      </div>
      <h2>{info.label}</h2>
      <img src={info.image}></img>
      <div>
        <p>Meal type: {info.mealType}</p>
        <p>Dish type: {info.dishType}</p>
        <p>Total cooking time: {info.totalTime} minutes</p>
        <p>Servings: {info.yield}</p>
        {ingredients()}
      </div>
      <div>
        {dietLabels()}
        {healthLabels()}
        {cautions()}
        {totalNutrients()}
      </div>
    </>
  );
};

/// <Center bgColor="blue.200" h="100vh" flexDirection="column">
//<Card
//borderStyle={"solid"}
//borderWidth={3}
//borderRadius="xl"
//w="3xl"
//h="3xl"
//>
//<CardBody>
//<Image
//h="md"
//w="100%"
//src={item.recipe.image}
//borderRadius="md"
//borderStyle={"solid"}
//borderWidth={2}
//borderColor={"black"}
///>
//<Stack mt="6" spacing="3">
//<Heading size="md">{item.recipe.label}</Heading>

//<Flex gap={2}>
//<Text color="blue.600">
//{item.recipe.mealType}
//{item.recipe.dishType}
//{item.recipe.totalTime}
//{item.recipe.dietLabels}
//{item.recipe.healthLabels}
//{item.recipe.cautions}
//{item.recipe.ingredientLines}
//{item.recipe.dishType}
//Total nutrients:
//<li>{calories} CALORIES</li>
//<li>{carbs} g CARBS</li>
//<li>{protein} g PROTEIN</li>
//<li>{fat} g FAT</li>
//<li>{cholesterol} mg CHOLESTEROL</li>
//<li>{sodium} mg SODIUM</li>
//</Text>
//</Flex>

//<Button color="blue.600" w="fit-content" onClick={() => clickFn()}>
//Back to overview
//</Button>
//</Stack>
//</CardBody>
//</Card>
//</Center>
//);
//};
