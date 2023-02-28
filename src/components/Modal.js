import './Modal.css';

const Modal = (props) => {

  const cartElements = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    }
  ]

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
              <input type='text' value={`${item.quantity}`} />
              <button>REMOVE</button>
            </span>
          </div>
        )
      })}
      <div className='CartTotal'>
        <span style={{marginRight: '10px', fontSize: '20px', fontWeight: '500'}}>Total</span>
        <span style={{fontSize: '20px'}}>50</span>
      </div>
      <button className='PurchaseButton'>PURCHASE</button>
    </div>
  )
}

export default Modal;