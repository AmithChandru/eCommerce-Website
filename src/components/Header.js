import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "./store/CartContext";

const Header = (props) => {

  const cartCtx = useContext(CartContext);
  const items = cartCtx.items.length;

  return (
    <header className="App-header">
      <NavLink to='/Home'>
        <span>HOME</span>
      </NavLink>
      <NavLink to='/'>
        <span style={{ margin: '0px 40px' }}>STORE</span>
      </NavLink>
      <NavLink to='/About'>
        <span>ABOUT</span>
      </NavLink>
      <button className='cartButton' onClick={props.handleClick}>Cart</button>
      <span className='cartCount'>{items}</span>
    </header>
  )
}

export default Header;