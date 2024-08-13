import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUser } from '../../contexts/auth';
import { toast } from 'react-toastify';

function Premium() {
  const { user } = useUser();
  console.log(user?.role, "is the user in premium");

// \end{code}
  // const handleSubscribeClick = () => {
  //   if (user?.role!== 'admin') {
  //     // Redirect to the checkout page or perform the subscription action
  //     window.location.href = '/checkout?id=5&duration=monthly'; // Example navigation
  //   } else {
  //     // Show a toast notification for admins
  //     toast.error("Admins cannot subscribe to offers.");
  //   }
  // };

  return (
    <div className="bg-gray-900 w-full py-24">
      <h1 className="text-3xl flex justify-center font-KeplerStd font-semibold mt-16 text-white">
        Grave Maintainance - Premium
      </h1>

      {/* Cards go here */}
      <div className="flex px-10 flex-wrap justify-evenly h-3/4">
        {/* 1st one */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
          <NavLink to='/stnmonth'>
            <img className="rounded-t-lg" src="/static/img/img53.jpg" alt="" />
          </NavLink>
          <div className="p-5">
            <NavLink to="/stnmonth">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white w-full hover:text-[#D5A021] duration-500">
                Grave Maintainance - Premium (Monthly)
              </h5>
            </NavLink>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Monthly invoice for:
            </p>
            <div className="flex justify-between">
              <p className="text-[#D5A021] font-bold mt-4">4000 Rs per month</p>
              {!user?.role || user?.role!== 'admin'? (
                <NavLink
                  to='/checkout?id=5&duration=monthly'
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
                <button style={{color:"white" ,border:"none",padding:"0.5rem 0.73rem", backgroundColor:"#111827",borderRadius:"10px",textDecoration:"line-through",textDecorationColor:"red",fontSize:"1rem",opacity:0.8, width:"135px"}} disabled >Admin can't subscribe.</button> 
              )}
            </div>
          </div>
        </div>

        {/* 2nd one */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-10">
          <NavLink to='/stnyear'>
            <img className="rounded-t-lg" src="/static/img/img53.jpg" alt="" />
          </NavLink>
          <div className="p-5">
            <NavLink to='/stnyear'>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white w-full hover:text-[#D5A021] duration-500 ">
                Grave Maintainance - Premium (Annually)
              </h5>
            </NavLink>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              1 year of Grave Maintainance
            </p>
            <div className="flex justify-between">
              <p className="text-[#D5A021] font-bold mt-4">36K Rs (25% discount)</p>
              {!user?.role || user?.role!== 'admin'? (
                <NavLink
                  to='/checkout?id=5&duration=yearly'
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
                <button style={{color:"white" ,border:"none",padding:"0.5rem 0.73rem", backgroundColor:"#111827",borderRadius:"10px",textDecoration:"line-through",textDecorationColor:"red",fontSize:"1rem",opacity:0.8, width:"135px"}} disabled >Admin can't subscribe.</button> 
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premium;
