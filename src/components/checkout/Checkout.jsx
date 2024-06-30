import React, { useEffect, useState } from "react";
import dataJson from "../../assets/payments.json";
import { useUser } from "../../contexts/auth";
import { useNavigate } from "react-router";
import CardAddition from "./CardAddition";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Checkout() {

  const [toastDisplayed, setToastDisplayed] = useState(false); // State to track toast display

  const navigate = useNavigate();
  const user = useUser();

  const [show,setshow] = useState(false);

  const [paymentVerified, setPaymentVerified] = useState(false);
  const [paymentPending, setPaymentPending] = useState(true);

  useEffect(() => {
    async function verifyPayment() {
      try {
        const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/payment/verify', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
          }
        });
        if (response.ok) {
          setPaymentVerified(true);
        } else if (response.status === 400) {
        }
      } catch (error) {
        console.error('Error verifying payment:', error);
      }
      setPaymentPending(false);
    }
    verifyPayment();
  }, [paymentPending]);

  useEffect(() => {
    if (!user.user && !user.loading) {
      navigate("/login");
    }
  }, [user, navigate]);

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const duration = params.get('duration');

  if (!id || !duration || !dataJson[id]) {
    navigate("/");
    return null;
  }

  const price = duration === "monthly" ? dataJson[id]['monthly-price'] : dataJson[id]['yearly-price'];
  const name = dataJson[id].name;


  const handleCheckout = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/payment/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({
          planId: id,
          duration
        })
      });
      if (response.ok) {
        setshow(true)
        // alert("Successfully Added")
        
        if (!toastDisplayed) {
          toast.success('Paid Succesfully', {
            autoClose: 2000,
            onClose: () => setToastDisplayed(false)
          })          
          setToastDisplayed(true); // Update state to indicate toast displayed
        }
        user.refresh();
      } else {
        // alert('Addition Failed');
        if (!toastDisplayed) {
          toast.error('You are already Subscribed.', {
            autoClose: 2000,
            onClose: () => setToastDisplayed(false)
          })          
          setToastDisplayed(true); // Update state to indicate toast displayed
        }
      }
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error checking out:', error);
    }
  }

  if (paymentPending) {
    return (
      <div className="bg-gray-900 py-24 pt-36 w-full px-8">
        <div className="container mx-auto p4-10">
          <div className="max-w-md mx-auto  rounded-lg overflow-hidden md:max-w-xl">
            <div className="md:flex">
              <div className="w-full px-6 py-8 md:p-8">
                <h2 className="text-4xl font-KeplerStd font-bold text-white">Loading...</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!paymentPending && !paymentVerified) {
    return (
    <CardAddition onSuccess={() => (setPaymentPending(true))} />
    );
  }

  if (paymentVerified) {
    return (
      <div className="bg-gray-900 py-24 pt-36 w-full px-8">
        <div className="container mx-auto p4-10">
          <div className="max-w-md mx-auto  rounded-lg overflow-hidden md:max-w-xl">
            <div className="md:flex">
              <div className="w-full px-6 py-8 md:p-8">
                <h2 className="text-4xl font-KeplerStd font-bold text-white">Checkout</h2>
                <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800">{name} Package</h3>
                    <p className="text-gray-600">Price: ${price}</p>
                    <button onClick={handleCheckout} className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white bg-[#D5A021] rounded-lg hover:bg-[#050d15]   dark:bg-bg-[#050d15] dark:hover:bg-[#050d15] duration-500 ease-in-out ml-64">Pay Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
