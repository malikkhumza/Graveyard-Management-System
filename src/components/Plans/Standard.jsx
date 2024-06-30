import React from "react";
import { NavLink } from "react-router-dom";
import { useUser } from "../../contexts/auth";

function Standard() {
  const { user } = useUser();
  return (
    <div className="bg-gray-900 w-full py-24">
      <h1 className="px-14 text-3xl flex justify-center font-KeplerStd font-semibold mt-14 text-white">
        Grave Maintainance - Standard
      </h1>

      {/* cards goes Here */}
      <div 
      className="flex px-10  flex-wrap justify-evenly h-3/4"
      >
        {/* 1st one  */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10   ">
          <
          >
            <img
              className="rounded-t-lg"
              src="/public/img/img521.jpg"
              alt=""
            />
          </>
          <div className="p-5">
            <>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white w-full hover:text-[#D5A021] duration-500">
              Grave Maintainance - Standard (Monthly)</h5>
            </>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Monthly invoice for:
            </p>
            <div 
            className="flex justify-between"
            >
              <p 
              className="text-[#D5A021] font-bold mt-4"
              >2500 Rs per month</p>
            {!user?.role || user?.role!== 'admin'? (
                <NavLink
                  to='/checkout?id=4&duration=monthly'
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#D5A021] rounded-lg hover:bg-[#050d15] focus:ring-4 focus:outline-none dark:focus:ring-purple-900 dark:bg-bg-[#050d15] dark:hover:bg-[#050d15] duration-500 ease-in-out"
                >
                  Buy Now
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </NavLink>
              ) : (
                <button style={{color:"white" ,border:"none",padding:"0.5rem 0.73rem", backgroundColor:"#111827",borderRadius:"10px",textDecoration:"line-through",textDecorationColor:"red",fontSize:"1rem",opacity:0.8,width:"135px"}} disabled >Admin can't subscribe.</button> 
              )}
            </div>
          </div>
        </div>

        {/* 2nd one  */}

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10   ">
          <       
          >
            <img
              className="rounded-t-lg"
              src="/public/img/img521.jpg"
              alt=""
            />
          </>
          <div className="p-5">
            <>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white w-full hover:text-[#D5A021] duration-500 ">
              Grave Maintainance - Standard (Annualy)</h5>
            </>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              1 year of Grave Maintainance
            </p>
            <div 
            className="flex justify-between"
            >
              <p 
              className="text-[#D5A021] font-bold mt-4"
              >22.5k Rs (25 % discount)</p>
              {!user?.role || user?.role!== 'admin'? (
                <NavLink
                  to='/checkout?id=4&duration=yearly'
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#D5A021] rounded-lg hover:bg-[#050d15] focus:ring-4 focus:outline-none dark:focus:ring-purple-900 dark:bg-bg-[#050d15] dark:hover:bg-[#050d15] duration-500 ease-in-out"
                >
                  Buy Now
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </NavLink>
              ) : (
                <button style={{color:"white" ,border:"none",padding:"0.5rem 0.73rem", backgroundColor:"#111827",borderRadius:"10px",textDecoration:"line-through",textDecorationColor:"red",fontSize:"1rem",opacity:0.8,width:"135px"}} disabled >Admin can't subscribe.</button> 
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Standard;
