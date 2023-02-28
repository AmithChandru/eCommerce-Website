import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {

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
  const [showCart, setShowCart] = useState(false);
  
  const handleClick = () => {
    setShowCart((state) => !state);
  }

  return (
    <div className="App">
      <header className="App-header">
        <span>HOME</span>
        <span style={{ margin: '0px 40px' }}>STORE</span>
        <span>ABOUT</span>
        <button className='cartButton' onClick={handleClick}>Cart</button>
        <span className='cartCount'>0</span>
      </header>
      {showCart && <Modal handleClick={handleClick}/>}
      <div className='title'>
        The Generics
      </div>
      <section className='products'>
        <span style={{fontWeight: 'bold'}}>Colors</span>
        <div className='content'>
          {productsArr.map((item) => {
            return (
              <div>
                <span style={{fontSize: '20px', fontWeight: 'bold'}}>{item.title}</span>
                <div className='imageContainer'>
                  <img className='image' src={`${item.imageUrl}`} alt='Color' />
                </div>
                <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'space-between'}}>
                  <span style={{fontSize: '20px', fontStyle: 'italic'}}>{item.price}</span>
                  <button className='addButton'>ADD TO CART</button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <button className='viewCartButton'>See the cart</button>
      <div className='footer'>
        <span style={{fontWeight: 'bold', fontSize: '30px', marginLeft: '60px'}}>The Generics</span>
      </div>
    </div>
  );
}

export default App;
