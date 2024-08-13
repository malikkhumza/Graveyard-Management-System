import React from "react";
import { useNavigate } from "react-router-dom";

function MonthlyServices() {

  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 py-24  w-full ">
      <div className="p-10 text-center text-white">
        <h1 className="mb-4 text-5xl font-KeplerStd font-bold">Monthly Services</h1>
        <h1 className="text-xl pb-2">Here are the complete packages of services we provide</h1>
      </div>

      {/* <!-- ✅ Grid Section - Starts Here 👇 --> */}

      {/* <p className="text-white text-2xl font-bold flex justify-center mt-10">Monthly Services</p> */}
      <section
        id="Projects"
        className="mx-auto mb-5 mt-10 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
        <div className="w-72 rounded-xl bg-white shadow-md   duration-300    hover:shadow-xl">
          <p>
            <img
              src="/static/img/img52.jpg"
              alt="Product"
              className="h-80 w-72 rounded-t-xl object-cover"
            />
            <div className="w-72 px-4 py-3">
              {/* <span className="text-black font-bold mr-3 uppercase text-sm">
                0$
              </span> */}
              <p className="block truncate font-KeplerStd  text-lg font-bold capitalize text-black">
                Grave Maintainance
              </p>
              <div className="flex items-center">
                <p className="my-3 cursor-auto text-md font-semibold text-black">
                  Cleaning the grave and removing unnecessary things
                </p>
              </div>
            </div>
          </p>
        </div>
        {/* <!--   🛑 Product card 1 - Ends Here  --> */}

        {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
        <div className="w-72 rounded-xl bg-white shadow-md   duration-300  hover:shadow-xl">
          <p>
            <img
              src="/static/img/img10.jpg"
              alt="Product"
              className="h-80 w-72 rounded-t-xl object-cover"
            />
            <div className="w-72 px-4 py-3">
              {/* <span className="text-black font-bold mr-3 uppercase text-sm">
                0$
              </span> */}

              <p className="block truncate  font-KeplerStd text-lg font-bold capitalize text-black">
                Flowering & Scenting
              </p>
              <div className="flex items-center">
                <p className="my-3 cursor-auto text-md font-semibold text-black">
                  Putting fresh flowers and scent on the grave
                </p>
              </div>
            </div>
          </p>
        </div>
        {/* <!--   🛑 Product card 2- Ends Here  --> */}

        {/* <!--   ✅ Product card 3 - Starts Here 👇 --> */}
        <div className="w-72 rounded-xl bg-white shadow-md   duration-300  hover:shadow-xl">
          <p>
            <img
              src="/static/img/img11.jpg"
              alt="Product"
              className="h-80 w-72 rounded-t-xl object-cover"
            />
            <div className="w-72 px-4 py-3">
              {/* <span className="text-black font-bold mr-3 uppercase text-sm">
                0$
              </span> */}

              <p className="block truncate font-KeplerStd  text-lg font-bold capitalize text-black">
                Disaster Management
              </p>
              <div className="flex items-center">
                <p className="my-3 cursor-auto text-md font-semibold text-black">
                  Maintaining Graves in case of natural disaster. Floods,
                  earthquake etc
                </p>
              </div>
            </div>
          </p>
        </div>
        {/* <!--   🛑 Product card 3 - Ends Here  --> */}

        {/* <!--   ✅ Product card 4 - Starts Here 👇 --> */}
        {/* <div className="w-72 rounded-xl bg-white shadow-md duration-500  hover:shadow-xl">
          <a href="#">
            <img
              src="/static/img/img9.jpg"
              alt="Product"
              className="h-80 w-72 rounded-t-xl object-cover"
            />
            <div className="w-72 px-4 py-3">
              <span className="text-black font-bold mr-3 uppercase text-sm">
                0$
              </span>

              <p className="block truncate  font-KeplerStd text-lg font-bold capitalize text-black">
                Grave Digging
              </p>
              <div className="flex items-center">
                <p className="my-3 cursor-auto text-md font-semibold text-black">
                  Digging the grave and making is ready for burial ritual
                </p>
              </div>
            </div>
          </a>
        </div> */}
        {/* <!--   🛑 Product card 4 - Ends Here  --> */}

        {/* <!--   ✅ Product card 5 - Starts Here 👇 --> */}
      </section>
      
      <button
      onClick={() => navigate("/plans")}
      className="text-white absolute right-32  px-4 py-2 flex justify-center items-center mt-8 bg-[#D5A021] rounded-md hover:bg-[#050d15] ease-in-out duration-500"
      >Get Now</button>
    </div>
  );
}

export default MonthlyServices;
