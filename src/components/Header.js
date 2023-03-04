import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "./store/CartContext";

const Header = (props) => {

  const cartCtx = useContext(CartContext);
  const items = cartCtx.items.length;

  return (
    <header className="App-header">
      <NavLink to='/Home'>
        <span className="navigationHeaders">HOME</span>
      </NavLink>
      <NavLink to='/'>
        <span className="navigationHeaders" style={{ margin: '0px 20px 0px 20px' }}>STORE</span>
      </NavLink>
      <NavLink to='/About'>
        <span className="navigationHeaders" style={{ margin: '0px 20px 0px 0px' }}>ABOUT</span>
      </NavLink>
      <NavLink to='/Contact-us'>
        <span className="navigationHeaders">CONTACT US</span>
      </NavLink>
      <button className='cartButton' onClick={props.handleClick}>Cart</button>
      <span className='cartCount'>{items}</span>
    </header>
  )
}

export default Header;