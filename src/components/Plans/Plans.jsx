import React from 'react'
import { NavLink } from 'react-router-dom'

function Plans() {
  return (
    <div className='w-full'>
        <section className="bg-gray-900 dark:bg-gray-900 pt-6">
  <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-24">
    <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white font-KeplerStd  dark:text-white mt-10">Subscription Plans</h2>
      <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here you can choose plan according to your needs.</p>
    </div>
    <div className="space-y-8 sm:gap-6 lg:grid lg:grid-cols-2 lg:space-y-0 xl:gap-10">
      <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow xl:p-8 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
        <h3 className="mb-4 text-2xl font-semibold">Standard</h3>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option if you live near &amp; can visit ocassionally.</p>
        <div className="my-8 flex items-baseline justify-center">
          <span className="mr-2 text-5xl font-extrabold">2500 Rs</span>
          <span className="text-gray-500 dark:text-gray-400">/month</span>
        </div>

        <ul role="list" className="mb-8 space-y-4 text-left">
          <li className="flex items-center space-x-3">
            <svg className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Grave Maintainance</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>No setup, or hidden fees</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Cleaning once a month </span>
          </li>
          
          
          <li className="flex items-center space-x-3">
            <svg className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Free updates </span>
          </li>
          <li className="flex items-center space-x-3">
          <svg className="h-5 w-5 flex-shrink-0 text-red-500 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14.243 5.757a1 1 0 010 1.414L6.414 14.243a1 1 0 01-1.414-1.414L12.829 5.757a1 1 0 011.414 0zM5.757 5.757a1 1 0 011.414 0L14.243 12.829a1 1 0 01-1.414 1.414L4.343 7.171a1 1 0 010-1.414zM5.757 14.243a1 1 0 010-1.414L14.243 5.757a1 1 0 011.414 1.414L7.171 15.657a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
</svg>

            <span>Disaster Management </span>
          </li>
          <li className="flex items-center space-x-3">
          <svg className="h-5 w-5 flex-shrink-0 text-red-500 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14.243 5.757a1 1 0 010 1.414L6.414 14.243a1 1 0 01-1.414-1.414L12.829 5.757a1 1 0 011.414 0zM5.757 5.757a1 1 0 011.414 0L14.243 12.829a1 1 0 01-1.414 1.414L4.343 7.171a1 1 0 010-1.414zM5.757 14.243a1 1 0 010-1.414L14.243 5.757a1 1 0 011.414 1.414L7.171 15.657a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
</svg>

            <span>Flowering & Scenting </span>
          </li>
        </ul>
        
        <NavLink to='/standard' className="rounded-lg bg-[#D5A021] px-5 py-2.5  text-center text-sm font-medium text-white hover:bg-[#050d15] focus:ring-4  dark:text-white dark:focus:ring-[#D5A021] ease-in-out duration-500">Get started</NavLink>
      </div>

      <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white p-6 text-center text-gray-900 shadow xl:p-8 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
        <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">For people who aren't able to visit regularly.</p>
        <div className="my-8 flex items-baseline justify-center">
          <span className="mr-2 text-5xl font-extrabold">4000 Rs</span>
          <span className="text-gray-500 dark:text-gray-400" dark:text-gray-400="">/month</span>
        </div>

        <ul role="list" className="mb-8 space-y-4 text-left">
          <li className="flex items-center space-x-3">
            <svg className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Grave Maintainance</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>No setup, or hidden fees</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Cleaning twice a month </span>
          </li>
          <li className="flex items-center space-x-3">
            <svg className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Free updates</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Disaster Management</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span>Flowering & Scenting </span>
          </li>
          
        </ul>
        <NavLink 
         to='/premium' 
         className="rounded-lg bg-[#D5A021] px-5 py-2.5  text-center text-sm font-medium text-white hover:bg-[#050d15] focus:ring-4 focus:ring-purple-200 dark:text-white dark:focus:ring-[#D5A021] ease-in-out duration-500">Get started</NavLink>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Plans