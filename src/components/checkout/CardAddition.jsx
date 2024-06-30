import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CardAddition(props) {

  const [toastDisplayed, setToastDisplayed] = useState(false); // State to track toast display


  const handleCardAddition = (e) => {
    e.preventDefault();
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let cardNumber = document.getElementById("card-number-input").value.trim().replace(" ", "");
    let expirationMonth = document.getElementById("expiration-date-input").value.split("/")[0];
    let expirationYear = document.getElementById("expiration-date-input").value.split("/")[1];
    let cvv = document.getElementById("cvv-input").value;


    if (!name || !email || !cardNumber || !expirationMonth || !expirationYear || !cvv) {
      // alert("Please fill out all fields.");
      if (!toastDisplayed) {
        toast.warning('Please fill out all fields.', {
          autoclose: 1000,
          onClose: () => setToastDisplayed(false)
        })          
        setToastDisplayed(true); // Update state to indicate toast displayed
      }
      
      return;
    }

    if (cardNumber.length !== 16) {
      // alert("Please enter a valid card number.");
      if (!toastDisplayed) {
        toast.warning('Please enter a valid card number', {
          autoclose: 2000,
          onClose: () => setToastDisplayed(false)
        })          
        setToastDisplayed(true); // Update state to indicate toast displayed})
      return;
    }
  }

    if (expirationMonth < 1 || expirationMonth > 12) {
      // alert("Please enter a valid expiration date.");
      toast.warning('Please enter a valid expiration date', {
        autoclose: 2000
      })
      return;
    }

    if (expirationYear < 21 || expirationYear > 30) {
      // alert("Please enter a valid expiration date.");
      toast.warning('Please enter a valid expiration date', {
        autoclose: 2000
      })
      return;
    }
    if (expirationMonth.length !== 2 || expirationYear.length !== 2) {
      // alert("Please enter a valid expiration date.");
      toast.warning('Please enter a valid expiration date', {
        autoclose: 2000
      })
      return;
    }

    if (cvv.length !== 3) {
      // alert("Please enter a valid CVV.");
      toast.warning('Please enter a valid CVV', {
        autoclose: 2000
      })
      return;
    }

    console.log(name, email, cardNumber, expirationMonth, expirationYear, cvv)

    fetch(import.meta.env.VITE_BACKEND_URL + '/api/payment/add-card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        name,
        email,
        cardNumber,
        expirationMonth,
        expirationYear,
        cvv
      })
    }).then(response => {
      return response.json();
    }).then(data => {
      if (data.errors) {
        // alert(data.errors);
        toast.error(data.errors, {
          autoclose: 2000
        })
        return;
      }
      props.onSuccess();
      // alert("Card Added Successfully");
      toast.success('Card Added Successfully', {
        autoclose: 2000
      })
      user.refresh();
    }).catch(error => {
      console.log(error);
    })

  }

  return (
    <div className="bg-gray-900 py-24 pt-36 w-full px-8">
      <div className="container mx-auto p4-10">
        <div className="max-w-md mx-auto  rounded-lg overflow-hidden md:max-w-xl">
          <div className="md:flex">
            <div className="w-full px-6 py-8 md:p-8">
              <h2 className="text-4xl font-KeplerStd font-bold text-white">Checkout</h2>
              <p className="mt-4 text-gray-600">
                Please fill out the form below to complete your purchase.
              </p>
              <form className="mt-6">
                <div className="mb-6">
                  <label className="block text-white font-bold mb-2" htmlFor="name-input" required>
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name-input"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-white font-bold mb-2" htmlFor="email-input">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email-input"
                    type="email"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-white font-bold mb-2"
                    htmlFor="card-number-input"
                  >
                    Card Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="card-number-input"
                    type="text"
                    placeholder="**** **** **** 1234"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-white font-bold mb-2"
                    htmlFor="expiration-date-input"
                  >
                    Expiration Date
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="expiration-date-input"
                    type="text"
                    placeholder="MM / YY"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-white font-bold mb-2" htmlFor="cvv-input">
                    CVV
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="cvv-input"
                    type="text"
                    placeholder="***"
                  />
                </div>
                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#D5A021] rounded-lg hover:bg-[#050d15]   dark:bg-bg-[#050d15] dark:hover:bg-[#050d15] duration-500 ease-in-out"
                  type="button"
                  onClick={handleCardAddition}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardAddition;
