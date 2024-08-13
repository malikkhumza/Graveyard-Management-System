import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
function OneTervices() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 py-24   w-full  ">
      <div class="p-10 text-center text-white">
        <h1 class=" text-5xl font-bold">One Time Services</h1>
        <h1 class="text-xl pt-2">Here are the services we provide</h1>
      </div>

      {/* <!-- ✅ Grid Section - Starts Here 👇 --> */}

      {/* <p className="text-white text-2xl font-bold flex justify-center mt-10">Monthly Services</p> */}
      <section
        id="Projects"
        class="mx-auto mb-5 mt-10 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3"
      >

        
        
        {/* <!--   ✅ Product card 4 - Starts Here 👇 --> */}
        <div class="w-72 rounded-xl bg-white shadow-md hover:shadow-xl hover:scale-105 duration-300">
          <div>
            <img
            src="/static/img/img9.jpg"
            alt="Product"
              class="h-80 w-72 rounded-t-xl object-cover"
            />
            <div class="w-72 px-4 py-3">
            <span class="text-black font-bold mr-3 uppercase text-sm">$70-$100</span> 

              <p class="block truncate  font-KeplerStd text-lg font-bold capitalize text-black">
                Grave Digging
              </p>
              <div class="flex items-center">
                <p class="my-3 cursor-auto text-md font-semibold text-black">
                  Digging the grave and making is ready for burial ritual
                </p>
              </div>
            </div>
            <div className="flex pb-4 ml-44">
            <button
            onClick={() => navigate('/diggingform')}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#D5A021] rounded-lg hover:bg-[#050d15] focus:ring-4 focus:outline-none dark:focus:ring-white dark:bg-bg-[#050d15] dark:hover:bg-[#050d15] duration-500 ease-in-out "
            >
              Continue
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>

            </button>
            </div>
          </div>
        </div>
        {/* <!--   🛑 Product card 4 - Ends Here  --> */}

        {/* <!--   ✅ Product card 5 - Starts Here 👇 --> */}
        <div class="w-72 rounded-xl bg-white shadow-md  hover:shadow-xl hover:scale-105 duration-300">
          <div>
            <img
            src="/static/img/img62.jpg"
            alt="Product"
              class="h-80 w-72 rounded-t-xl object-cover"
            />
            <div class="w-72 px-4 py-3">
            <span class="text-black font-bold mr-3 uppercase text-sm">$40-$60</span> 

              <p class="block truncate  font-KeplerStd text-lg font-bold capitalize text-black">
                Kafn/Dafn
              </p>
              <div class="flex items-center">
                <p class="my-3 cursor-auto text-md font-semibold text-black">
                  Kafn/Dafn includes all the burial rituals when a person dies
                </p>
              </div>
            </div>
            <div className="flex pb-4 ml-44">
            <button
            onClick={()=> navigate("/kafn")}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#D5A021] rounded-lg hover:bg-[#050d15] focus:ring-4 focus:outline-none dark:focus:ring-white dark:bg-bg-[#050d15] dark:hover:bg-[#050d15] duration-500 ease-in-out "
            >
              Continue
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>

            </button>
            </div>
          </div>
        </div>
        {/* <!--   🛑 Product card 5 - Ends Here  --> */}

        {/* <!--   ✅ Product card 6 - Starts Here 👇 --> */}
        <div class="w-72 rounded-xl bg-white shadow-md hover:scale-105 duration-300  hover:shadow-xl">
          <div>
            <img
            src="/static/img/img72.jpg"
            alt="Product"
              class="h-80 w-72 rounded-t-xl object-cover"
            />
            <div class="w-72 px-4 py-3">
            <span class="text-black font-bold mr-3 uppercase text-sm">$200 - Client Req.</span> 

              <p class="block truncate  font-KeplerStd text-lg font-bold capitalize text-black">
                Food And Catering
              </p>
              <div class="flex items-center">
                <p class="my-3 cursor-auto text-md font-semibold text-black">
                  Food/Catering and seating services at your doorstep
                </p>
              </div>
            </div>
            <div className="flex pb-4 ml-44">
            <button
            onClick={() => navigate("/foodcatering")}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#D5A021] rounded-lg hover:bg-[#050d15] focus:ring-4 focus:outline-none dark:focus:ring-white dark:bg-bg-[#050d15] dark:hover:bg-[#050d15] duration-500 ease-in-out "
            >
              Continue
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>

            </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OneTervices;