import { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let temp = 0;
    items.forEach((ele) => {
      temp = temp + ele.amount * parseInt(ele.price);
    })
    setTotal(temp);
  }, [items])

  const addItemHandler = (item) => {
    let newItems = [...items];
    let temp = item, flag = true;
    temp.amount = 1;
    newItems.forEach((ele) => {
      if (ele.title === item.title) {
        ele.amount++;
        flag = false;
      }
    })
    flag && newItems.push(temp);
    setItems(newItems);
  }

  const removeItemHandler = (id) => {
    let temp = [...items];
    console.log(temp, id);
    temp = temp.filter((ele) => {
      return ele.title !== id
    })
    setItems([...temp]);
  }

  const cartctx = {
    items: items,
    total: total,
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