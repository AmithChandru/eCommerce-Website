import { useContext } from "react";
import CartContext from "./store/CartContext";

const Header = (props) => {

  const cartCtx = useContext(CartContext);
  const items = cartCtx.items.length;

  return (
    <header className="App-header">
      <span>HOME</span>
      <span style={{ margin: '0px 40px' }}>STORE</span>
      <span>ABOUT</span>
      <button className='cartButton' onClick={props.handleClick}>Cart</button>
      <span className='cartCount'>{items}</span>
    </header>
  )
}

export default Header;