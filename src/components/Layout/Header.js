import React from "react";
import { Fragment } from "react/cjs/react.production.min";

import mealImage from "../../assets/meals.jpg";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> Muhacodes's meals </h1>
        <HeaderCartButton onClick={props.onShowCart} /> 
      </header>
      <div className={classes['main-image']}>
        <img src={mealImage} alt="A table full of appetizing dishes" />
      </div>
    </Fragment>
  );
};

export default Header;
