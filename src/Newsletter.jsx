import React, { useState } from 'react';
import axios from 'axios';
import './Newsletter.css';


function Newsletter () {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register', { email });
      alert('Thank you for signing up!');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };
    return (
    <div className='newsletterspace'> 
     <form onSubmit={handleSubmit}>
       <input
         type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         placeholder="Enter your email"
         required
         />
       <button type="submit">Sign Up</button>
     </form>
    </div> 
   );
 }

export default Newsletter;
