import { useContext } from 'react';
import CartContext from './store/CartContext';

const ProductList = () => {

  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ]
  
  const cartCtx = useContext(CartContext);

  return (
    <section className='products'>
      <span style={{ fontWeight: 'bold' }}>Colors</span>
      <div className='content'>
        {productsArr.map((item) => {
          return (
            <div>
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{item.title}</span>
              <div className='imageContainer'>
                <img className='image' src={`${item.imageUrl}`} alt='Color' />
              </div>
              <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '20px', fontStyle: 'italic' }}>{item.price}</span>
                <button className='addButton' onClick={() => cartCtx.addItem(item)}>ADD TO CART</button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProductList;