import React from 'react'
import { useNavigate } from 'react-router'

import {  useUser } from '../contexts/auth';

import GoogleLoginBtn from '../utils/googleauth.jsx';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {

  let navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    let name = document.getElementById('name-input').value;
    let email = document.getElementById('email-input').value;
    let password = document.getElementById('password-input').value;
    let confirmPassword = document.getElementById('confirm-password-input').value;

    if (password !== confirmPassword) {
      toast.error('Passwords do not match', {
        autoClose: 2000,
      })
      return;
    }

    fetch(import.meta.env.VITE_BACKEND_URL + '/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    }).then(response => {
      if (response.ok) {
        // alert('Registration Successful. You can now login');
        toast.success('Account created Successfully. Login to continue', {
          autoClose: 3000,
        });
       
        
        navigate('/login');

        return response.json();
      }
      console.log(response.body);
      throw new Error('Registration Failed');
    }).then(data => {
      navigate('/login');
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <div className=' w-full'>
      <section className="bg-gray-800 py-40">
        <div className=" mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <div className=" w-full rounded-lg  shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-[#050d15] ">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">Create and account</h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white dark:text-white">Your Name</label>
                  <input type="text" name="name" id="name-input" className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Enter Your Name"  required />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white dark:text-white">Your email</label>
                  <input type="email" name="email" id="email-input" className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="name@company.com"  required />
                </div>

                <div>
                  <label htmlFor="password" className="mb-2 block text-sm font-medium text-white dark:text-white">Password</label>
                  <input type="password" name="password" id="password-input" placeholder="••••••••" className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"  required />
                </div>
                <div>
                  <label htmlFor="confirm-password" className="mb-2 block text-sm font-medium text-white dark:text-white">Confirm password</label>
                  <input type="password" name="confirm-password" id="confirm-password-input" placeholder="••••••••" className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"  required />
                </div>
                <div className="flex items-start">
                  {/* <div className="flex h-5 items-center">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"  required />
                  </div> */}
                  {/* <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="text-primary-600 dark:text-primary-500 font-medium hover:underline" href="#">Terms and Conditions</a></label>
                  </div> */}
                </div>
                <button onClick={handleRegister} type="submit" className="w-full rounded-lg px-5 py-2.5 text-center text-md font-medium text-white bg-[#D5A021] hover:bg-gray-700 duration-300 ease-in-ou">Create an account</button>
                <GoogleLoginBtn />
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <button className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                  onClick={() => navigate('/login')}>Login here</button></p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Signup