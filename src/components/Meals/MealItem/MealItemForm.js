import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountValid, setAmountValid] = useState(true);
  const submitForm = event => {
    event.preventDefault();
     
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitForm}>
      <Input 
        label="ämount" 
        ref={amountInputRef} 
        input={{
          id: "amount", 
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue : '1'
      }}/>

      <button> + Add </button>
      {!amountValid && <p> Please enter a valid amount! </p>}
    </form>
  );
};

export default MealItemForm;
