import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/Cart-Context";

const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);

  const CartNumber = CartCtx.items.reduce((currentItem, Item) => {
    return currentItem + Item.amount;
  }, 0);

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>

      <span className={classes.badge}> {CartNumber} </span>
    </button>
  );
};

export default HeaderCartButton;
