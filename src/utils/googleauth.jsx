import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { GoogleLogin } from '@react-oauth/google';
import { useUser } from '../contexts/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function GoogleLoginBtn() {
  const navigate = useNavigate();
  const user = useUser();


  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google login successful"); // Debugging log
    fetch(import.meta.env.VITE_BACKEND_URL + '/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        credential: credentialResponse.credential
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Login Failed');
    })
    .then(data => {
      if (data.token) {
        user.login({ email: data.user.email, name: data.user.name, subscriptions: data.user.subscriptions, role: data.user.role }, data.token);
        user.refresh();
        toast.success('Logged in successfully!', {
          autoClose: 2000,
        })
      // showPopupForDuration(2000);
      //   togglePopup();        
        navigate('/');
      }
    })
    .catch(error => {
      console.log(error);
    });
  };

  const handleGoogleError = () => {
    console.log('Login Failed');
  };

  return (
    
      
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
      />
  );
}

export default GoogleLoginBtn;
