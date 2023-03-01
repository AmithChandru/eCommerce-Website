import { useState } from 'react';
import About from './components/About';
import './App.css';
import Header from './components/Header';
import Modal from './components/Modal';
import ProductList from './components/ProductList';
import CartProvider from './components/store/CartProvider';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';

function App() {

  const [showCart, setShowCart] = useState(false);
  
  const handleClick = () => {
    setShowCart((state) => !state);
  }

  return (
    <CartProvider>
    <BrowserRouter>
      <div className="App">
        <Header handleClick={handleClick} />
        {showCart && <Modal handleClick={handleClick}/>}
        <div className='title'>
          The Generics
        </div>
          <Routes>
            <Route path='/' element={<ProductList handleClick={handleClick} />} />
            <Route path='*' element={<ProductList handleClick={handleClick} />} />
            <Route path='/About' element={<About />} />
            <Route path='/Home' element={<Home />} />
          </Routes>
        <div className='footer'>
          <span style={{fontWeight: 'bold', fontSize: '30px', marginLeft: '60px'}}>The Generics</span>
        </div>
      </div>
        </BrowserRouter>
    </CartProvider>
  );
}

export default App;
