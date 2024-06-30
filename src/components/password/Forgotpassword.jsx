import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
function Forgotpassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage(toast.error('An error occurred. Please try again.', {
        autoClose: 1500,
      }));
    }
  };

  return (
    <div 
    className='bg-gray-800 py-24 h-screen'
    >
      <h2 
      className='flex items-center justify-center text-3xl font-KeplerStd font-semibold text-white mt-10 p-8'>Forgot Password</h2>
      <h3 className='flex items-center justify-center text-xl font-KeplerStd text-white  p-3 mb-4'>Enter your email and you will recieve a link to reset your password</h3>
      <form onSubmit={handleSubmit}>
        <div className='flex justify-center mb-4'>
          <label className='text-white text-2xl px-5 font-semibold' >Email :</label>
          <input
          className='rounded-md p-1 px-1'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='justify-center flex'>
        <button
        className='text-white  p-1 ml-52 px-1 text-md  bg-[#D5A021] rounded-md hover:bg-[#050d15] ease-in-out duration-500'
         type="submit">Submit</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Forgotpassword