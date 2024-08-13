import React from 'react'
import { NavLink } from 'react-router-dom'

function Stnmonth() {
  return (
    <div className='bg-gray-900 py-24 pt-36 w-full px-8'>
        <div className='flex px-4 '>
        <NavLink to='/standard'
        className='text-xl flex  font-KeplerStd font-thin mt-6 text-gray-300 hover:text-white hover:underline duration-300'>
            <h1 className='pl-8 '>Standard</h1>
        </NavLink>
        <span className='text-xl flex  font-KeplerStd font-semibold mt-6 text-white px-4'>/ </span>
        <h2 className=' text-xl flex  font-KeplerStd font-semibold mt-6 text-white'>Grave Maintainance - Standard (Monthly)</h2>
        </div>

        <div className='md:flex bg-[#050d15] mt-5'>
            <div className='md:marker:w-max px-10 py-10'>
                <img src="/static/img/img521.jpg" alt="" />
            </div>
            <div>
                <h1
                className='text-3xl flex  items-start  font-KeplerStd font-semibold md:mt-8 text-white px-6'
                >Grave Maintainance - Standard (Monthly)</h1>

                <p className='text-white text-lg px-6 '>Monthly Invoice for :</p>
                <p
                className='text-[#D5A021] font-bold mt-4 px-6 text-2xl'
                >12.00 $ per month</p>
            </div>
        </div>
    </div>
  )
}

export default Stnmonth