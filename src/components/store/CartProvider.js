import { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {

  const [items, setItems] = useState([]);
  const [token, setToken] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let temp = 0;
    items.forEach((ele) => {
      temp = temp + ele.amount * parseInt(ele.price);
    })
    setTotal(temp);
  }, [items])

  const addItemHandler = async (item) => {
    let email = token.email.split('@').join('').split('.').join('');
    await fetch(`https://crudcrud.com/api/9127cfc0ca3d49e5b284be5f2d445ee1/${email}`, {
      method: 'POST',
      body: item,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
      }
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data)
        })
      } else {
        console.log(res);
      }
    })
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

  const addToken = (item) => {
    setToken(item);
    localStorage.setItem('userDetails', item);
  }

  const removeToken = () => {
    setToken(null);
    localStorage.removeItem('userDetails');
  }

  const cartctx = {
    items: items,
    total: total,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    token: token,
    addToken: addToken,
    removeToken: removeToken
  }

  return (
    <CartContext.Provider value={cartctx}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;