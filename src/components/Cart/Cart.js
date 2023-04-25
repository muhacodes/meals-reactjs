import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/Cart-Context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const CartCtx = useContext(CartContext);
  const totalAmount = CartCtx.totalAmount.toFixed(2);

  const hasItems = CartCtx.items.length > 0;

  const remoteItem = (id) => {
    CartCtx.removeItem(id);
  };

  const addItem = (item) => {
    CartCtx.addItem({...item, amount : 1});
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {CartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addItem.bind(null, item)}
          onRemove={remoteItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span> Total Amount </span>
        <span> {totalAmount} </span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button-alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}> Order </button>}
      </div>
    </Modal>
  );
};

export default Cart;
