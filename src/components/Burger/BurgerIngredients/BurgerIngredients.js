import React from "react";
import classes from "./BurgerIngredients.module.css";

const BurgerIngredients = ({ type }) => {
  let ingredient;

  ingredient = <div className={classes[type]}></div>;

  if (type === "BreadTop") {
    ingredient = (
      <div className={classes[type]}>
        <div className={classes.Seeds1}></div>
        <div className={classes.Seeds2}></div>
      </div>
    );
  }

  return ingredient;
};

export default BurgerIngredients;
