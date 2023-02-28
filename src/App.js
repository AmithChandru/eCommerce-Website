import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Modal from './components/Modal';
import ProductList from './components/ProductList';
import CartProvider from './components/store/CartProvider';

function App() {

  const [showCart, setShowCart] = useState(false);
  
  const handleClick = () => {
    setShowCart((state) => !state);
  }

  return (
    <CartProvider>
      <div className="App">
        <Header handleClick={handleClick}/>
        {showCart && <Modal handleClick={handleClick}/>}
        <div className='title'>
          The Generics
        </div>
        <ProductList />
        <button className='viewCartButton' onClick={handleClick}>See the cart</button>
        <div className='footer'>
          <span style={{fontWeight: 'bold', fontSize: '30px', marginLeft: '60px'}}>The Generics</span>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
