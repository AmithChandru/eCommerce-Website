import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {

  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    setItems((state) => [
      ...state,
      item
    ])
  }

  const removeItemHandler = (id) => {
    let temp = [...items];
    console.log(temp, id);
    temp = temp.filter((ele) => {
      return ele.title !== id
    })
    console.log(temp);
    setItems([...temp]);
  }

  const cartctx = {
    items: items,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }

  return (
    <CartContext.Provider value={cartctx}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;