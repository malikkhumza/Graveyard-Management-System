import React, { useState } from 'react'
import {  useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import {  useUser } from '../contexts/auth';

import GoogleLoginBtn from '../utils/googleauth.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {

  const navigate = useNavigate();

  let user = useUser();

  const handleEmailLogin = (e) => {
    e.preventDefault();

    let email = document.getElementById('email-input').value;
    let password = document.getElementById('password-input').value;

    fetch(import.meta.env.VITE_BACKEND_URL + '/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Login Failed');
    })
    .then(data => {
      
      if (data.token) {
        user.login({ email: data.user.email, name: data.user.name, role: data.user.role }, data.token);
        
        user.refresh();
        
        // alert("Login Successful");
        toast.success('Logged in successfully!', {
          autoClose: 2000,
        }); // Correct placement of options object
        navigate('/');
      }
      
    }).catch(error => {
      console.log(error);
    });

  }

  return (
    <div className=' w-full '>
      <section className="bg-gray-800 py-24">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-[#050d15]">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Sign in to your account</h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>f
                  <label htmlFor="email-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input type="email" name="email-input" id="email-input" className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="password-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password-input" id="password-input" placeholder="••••••••" className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" required />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"  required />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <NavLink to='/forgotpass' className="text-white dark:text-primary-500 text-sm font-medium hover:underline">Forgot password?</NavLink>
                </div>

                {/* {showPopup && <Popup message="Logged in successfully!" />} */}

                <button
                  type="submit"
                  
                  onClick={handleEmailLogin}
                  className="  w-full rounded-lg px-5 py-2.5 text-center text-md font-medium text-white bg-[#D5A021] hover:bg-gray-700 duration-300 ease-in-out">
                  Sign in
                </button>

                <GoogleLoginBtn/>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">Don’t have an account yet? <p className="text-primary-600 dark:text-primary-500 font-medium hover:underline cursor-pointer"
                  onClick={() => navigate('/signup')}
                >Sign up</p></p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Login