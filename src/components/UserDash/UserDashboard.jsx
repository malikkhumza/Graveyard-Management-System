import React, { useEffect } from "react";
import { useUser } from "../../contexts/auth.jsx";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import jsonData from "../../assets/payments.json";

function UserDashboard() {
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

 

  return (
    <div className="bg-gray-900 py-24 pt-36 w-full">
      <div className="flex justify-center text-3xl font-KeplerStd font-semibold text-[#D5A021]">
        Welcome {user.user.name}!
      </div>
      <h2 className="flex px-4 mt-8 text-4xl text-thin text-white ml-10">
        My Account
      </h2>

    <div className="flex">
      <NavLink to='/usersubscription'>
      <div className=" bg-[#e0dcdc] rounded-md flex  border-2 w-max  ml-16 mt-11">
        <img
          src="/public/img/icons8-bag-50.png"
          alt=""
          className="h-16 w-16 p-2"
        />
        <div className="p-2">
          <span className="flex  text-xl font-semibold">
            Your Subscriptions
          </span>
          <span className="flex items-center justify-center text-gray-600">
            Follow, view or pay your orders
          </span>
        </div>{" "}
      </div>
      </NavLink>

      <NavLink to="/chat">
      <div className=" bg-[#e0dcdc] rounded-md flex  border-2 w-max  ml-16 mt-11">
        <img
          src="/public/img/f88adbb5-327d-4afa-969b-952f878302c0.svg"
          alt=""
          className="h-16 w-16 p-2"
        />
        <div className="p-2">
          <span className="flex  text-xl font-semibold">
            Stay Updated
          </span>
          <span className="flex items-center justify-center text-gray-600">
            Chat with us to stay up to date
          </span>
        </div>
        
        </div>
        </NavLink>
        </div>
        
      {/* <h2 className="flex px-4 mt-8 text-2xl text-thin text-white">
        Your Subscriptions :
      </h2> */}
      
      
    </div>
  );
}

export default UserDashboard;
