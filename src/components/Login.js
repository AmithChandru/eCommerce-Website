import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import CartContext from './store/CartContext';

const Login = () => {

  const cartCtx = useContext(CartContext);
  const [emailInput, setEmailInput] = useState(null);
  const [passwordInput, setPasswordInput] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCszasJf5BQUdZzWYKXbjjvKo5BlnvW79Q', {
      method: 'POST',
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          cartCtx.addToken(data);
          console.log(data);
          navigate('/');
        })
      } else {
        res.json().then((data) => {
          alert(data.error.message);
        })
      }
    })
  }

  return (
      <form className='loginContainer' onSubmit={handleLogin}>
        <label>Email Id</label>
        <input type='email' onChange={(e) => {setEmailInput(e.target.value)}} />
        <label>Password</label>
        <input type='password' onChange={(e) => {setPasswordInput(e.target.value)}} />
        <button className='loginButton' type='submit'>Login</button>
      </form>
  )
}

export default Login;