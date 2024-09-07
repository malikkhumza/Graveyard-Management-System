import React from "react";
import { NavLink } from "react-router-dom";

function Servicesland() {


  return (
    <div className="h-max  w-full    bg-gray-900 py-12 ">
      <div className="pt-20">
        <p className="text-[#D5A021] font-semibold flex justify-center py-6">
          WHAT WE OFFER
        </p>
        <p className="text-5xl flex  font-KeplerStd justify-center font-bold text-white pb-4">
          Explore Services
        </p>
      </div>

      <div className=" flex md:justify-evenly md:mt-6  flex-wrap justify-center">
      {/* <div className="max-w-sm mb-6 border border-gray-200  shadow bg-white">
        <a href="#">
          <img className="" src="/static/img/img5.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Grave Maintainance
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, nam.
          </p>
        </div> */}
      {/* </div> */}
      <div className=" max-w-sm mb-6 border border-gray-200   shadow bg-white hover:scale-105 duration-300 rounded-xl">
        <NavLink to="/onetime">
          <img className="w-full rounded-xl" src="/static/img/img6.jpg" alt="" />
        </NavLink>
        <div className="p-5 ">
          <NavLink to="/onetime">
            <h5 className="mb-2 text-2xl font-KeplerStd  font-bold tracking-tight text-gray-900 ">
              One Time Services
            </h5>
          </NavLink>
          <p className="mb-3 font-normal text-gray-700">
           All the services related to funeral. i.e. Funeral arrangements, Catering etc
          </p>
        </div>
      </div>
      <div className=" max-w-sm mb-6  border border-gray-200  shadow bg-white hover:scale-105 duration-300 rounded-xl">
        <NavLink to="/monthly">
          <img className="rounded-xl" src="/static/img/img5.jpg" alt="" />
        </NavLink>
        <div className="p-5">
          <NavLink to="/monthly">
            <h5 className="mb-2 text-2xl font-KeplerStd  font-bold tracking-tight text-gray-900">
              Monthly Services
            </h5>
          </NavLink>
          <p className="mb-3 font-normal text-gray-700">
            Services related to grave maintenance. Regular cleaning and maintenance of grave.
          </p>
        </div>
      </div>
      </div>

      
    </div>
    
  );
}

export default Servicesland;
