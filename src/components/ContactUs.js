import { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async () => {
    let details = {
      name: name,
      email: email,
      number: number
    }
    await fetch('https://react-movies-8029a-default-rtdb.asia-southeast1.firebasedatabase.app/contacts.json', {
      method: 'POST',
      body: JSON.stringify(details),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <div className='contactUsContainer'>
      <span className='Labels'>Name</span>
      <input type='text' onChange={(e) => setName(e.target.value)}/>
      <span className='Labels'>Email Id</span>
      <input type='text' onChange={(e) => setEmail(e.target.value)}/>
      <span className='Labels'>Phone Number</span>
      <input type='text' onChange={(e) => setNumber(e.target.value)}/>
      <button className='SubmitButton' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default ContactUs;