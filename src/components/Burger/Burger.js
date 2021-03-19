import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import classes from "./Burger.module.css";

const Burger = ({ ingredients }) => {
  const arrOfIngredients = Object.entries(ingredients);
  console.log(arrOfIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type={"BreadTop"} />
      <BurgerIngredients type={"Cheese"} />
      <BurgerIngredients type={"Meat"} />
      <BurgerIngredients type={"Salad"} />
      <BurgerIngredients type={"BreadBottom"} />
    </div>
  );
};

export default Burger;
