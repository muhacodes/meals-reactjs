import { Fragment, useState } from "react/cjs/react.development";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {

  const [cart, setCart] = useState(false);

  const showCart = () => {
    setCart(true);
  }

  const hideCart = () => {
    setCart(false);
  }

  return (
    <CartProvider>
      { cart  &&  <Cart  onClose={hideCart}/>}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
