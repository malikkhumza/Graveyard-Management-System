import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Foodcatering() {
  const navigate = useNavigate();
  const [toastDisplayed, setToastDisplayed] = useState(false); // State to track toast display

  const handleCateringAddition = async (e) => {
    e.preventDefault();

    // const data = {
    //   name: e.target.name.value,
    //   mobileNumber: e.target.mobile.value,
    //   email: e.target.email.value,
    //   address: e.target.address.value,
    //   numberOfPersons: e.target.number_of_persons.value,
    //   order: e.target.order.value,
      
    // }

    if (!toastDisplayed) {
      toast.success('Thanks for sharing details. We will call you soon.', {
        autoClose: 2000,
        onClose: () => setToastDisplayed(false)
      })          
      setToastDisplayed(true); // Update state to indicate toast displayed
    }

    navigate("/");


    // let response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/payment/service", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": "Bearer " + localStorage.getItem("jwt"),
    //   },
    //   body: JSON.stringify({...data, serviceId: "3"}),
    // });
    // let res = await response.json();
    // console.log(res);

  }

  return (
    <div class="bg-gray-900 py-24 pt-44 w-full px-8 ">
      <div class="w-full md:w-96 md:max-w-full mx-auto">
        <div class="p-6 border border-gray-300 sm:rounded-md">
          <form
            onSubmit={handleCateringAddition}
          >
            <label class="block mb-6">
              <span class="text-gray-700">Your name</span>
              <input
                name="name"
                type="text"
                required
                class="
            block
            w-full
            mt-1
            p-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Enter your name here"
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Mobile Number</span>
              <input
                name="mobile"
                type="text"
                required

                class="
            block
            w-full
            mt-1
            p-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="03xx-xxxxxxx"
              />
            </label>

            <label class="block mb-6">
              <span class="text-gray-700">Email Address</span>
              <input
                name="email"
                type="email"
                required

                class="
            block
            w-full
            mt-1
            p-2
            mb-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="abc@example.com"
              />

            </label>

            <label class="block mb-6">
              <span class="text-gray-700">Address</span>
              <input
                name="address"
                type="text"
                required

                class="
            block
            w-full
            mt-1
            p-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Enter your complete address"
              />

            </label>



            <label class="block mb-6">
              <span class="text-gray-700">Gender of deceased : </span>
              <select name="" id="">
                <option value="male">Male</option>
                <option value="male">Female</option>
              </select>
            </label>

            <label class="block mb-6">
              <span class="text-gray-700">Age : </span>
              <select name="" id="">
                <option value="male"> less than 12</option>
                <option value="male">12 +</option>
              </select>
            </label>

            <label class="block mb-6">
              <span class="text-gray-700">Any other information</span>
              <textarea
                name="order"
                class="
            block
            w-full
            mt-1
            p-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="3"
                placeholder="Any other information you want to add"
              ></textarea>
            </label>

            <div class="mb-6">

              <button
                type="submit"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#D5A021] rounded-lg hover:bg-[#050d15] focus:ring-4 focus:outline-none dark:focus:ring-white dark:bg-bg-[#050d15] dark:hover:bg-[#050d15] duration-500 ease-in-out ml-64"
                
              >
                Save
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
            <div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Foodcatering;
