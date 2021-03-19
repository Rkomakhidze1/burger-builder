import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    Meat: 2,
    Salad: 1,
    Cheese: 2,
    Bacon: 1,
  });

  return <Burger ingredients={ingredients} />;
};

export default BurgerBuilder;
