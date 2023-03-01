import { useContext } from 'react';
import './Modal.css';
import CartContext from './store/CartContext';

const Modal = (props) => {

  const cartCtx = useContext(CartContext);
  const cartElements = cartCtx.items;

  return (
    <div className="ModalContainer">
      <span className='CartTitle'>Cart</span>
      <button className='CancelButton' onClick={props.handleClick}>X</button>
      <div className='NameGroup'>
        <span className='CartItem CartColumn'>ITEM</span>
        <span className='CartPrice CartColumn'>PRICE</span>
        <span className='CartQuantity CartColumn'>QUANTITY</span>
      </div>
      {cartElements.map((item) => {
        return (
          <div className='Items'>
            <span className='CartItem CartColumn'>
              <img className='CartImage' alt='Product' src={`${item.imageUrl}`} />
              <span>{item.title}</span>
            </span>
            <span className='CartPrice CartColumn'>{item.price}</span>
            <span className='CartQuantity CartColumn'>
              <input type='text' value={`${item.amount}`} />
              <button onClick={() => cartCtx.removeItem(item.title)}>REMOVE</button>
            </span>
          </div>
        )
      })}
      <div className='CartTotal'>
        <span style={{marginRight: '10px', fontSize: '20px', fontWeight: '500'}}>Total</span>
        <span style={{fontSize: '20px'}}>{cartCtx.total}</span>
      </div>
      <button className='PurchaseButton'>PURCHASE</button>
    </div>
  )
}

export default Modal;