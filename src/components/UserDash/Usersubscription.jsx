import React, { useEffect } from "react";
import { useUser } from "../../contexts/auth.jsx";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import jsonData from "../../assets/payments.json";

function Usersubscription() {
  let user = useUser();
  let navigate = useNavigate();

  useEffect(() => {
    if (!user.user && !user.loading) {
      navigate("/login");
    }
  });

  if (user.loading)
    return (
      <div className="bg-gray-900 py-24 pt-36 w-full">
        <div className="flex justify-center text-3xl font-KeplerStd font-semibold text-[#D5A021]">
          Loading...
        </div>
      </div>
    );

  if (!user.user && !user.loading) {
    return (
      <div className="bg-gray-900 py-24 pt-36 w-full">
        <div className="flex justify-center text-3xl font-KeplerStd font-semibold text-[#D5A021]">
          Login Please
        </div>
      </div>
    );
  }

  const handleRemoveSubscription = async (id) => {
    let response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/api/payment/subscription",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({ planId: id }),
      }
    );
    if (response.ok) {
      user.user.subscriptions = user.user.subscriptions.filter(
        (sub) => sub.id !== id
      );
      user.refresh();
    }
  };

  return (
    <div className="bg-gray-900 py-24 pt-36 w-full">
      <div className="flex  text-xl font-KeplerStd  text-white px-14">

       <NavLink to='/myaccount'> <span className="px-2 text-gray-500 ease-in-out duration-300 cursor-pointer  hover:text-white" >My Account </span></NavLink>
       <span>/</span>
        <span className="px-2 cursor-pointer mb-6">Subscriptions</span> 
      </div>
      

      
      {/* <h2 className="flex px-4 mt-8 text-2xl text-thin text-white">
        Your Subscriptions :
      </h2> */}
      {user.user.subscriptions && user.user.subscriptions.length === 0 ? (
        <div className="flex items-center justify-center text-3xl font-KeplerStd  text-[#D5A021]   ml-16 h-16  ">
        There are currently no subscriptions for your account.
        </div>
      ) : null}
      <div className="flex justify-center text-xl font-KeplerStd font-semibold text-[#D5A021]">
        {user.user.subscriptions.map((sub) => {
          const subscriptionDetails = jsonData[sub.id];
          console.log(sub);
          return (
            <div key={sub.id} className="flex justify-center">
              <div className="bg-white rounded-lg shadow-md p-6 m-4">
                <h3 className="text-4xl font-semibold">
                  {subscriptionDetails.name}
                </h3>
                <p className="text-gray-600 text-lg">
                  Expiry: {sub.expiryDate.toDateString()}
                </p>
                <button
                  onClick={() => handleRemoveSubscription(sub.id)}
                  className="bg-[#D5A021] text-white rounded-lg p-2 mt-4"
                >
                  Cancel Subscription
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Usersubscription;
