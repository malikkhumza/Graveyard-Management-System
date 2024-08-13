import React from "react";
import { NavLink } from "react-router-dom";

function Areas() {
  return (
    <div className="grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 justify-center justify-items-center bg-gray-900 py-40 font-KeplerStd ">
      <div className="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-zinc-800 text-gray-50 p-5 mt-16">
        <NavLink
        to='/lahore'
        className="">
          <div className="group-hover:scale-110 w-full h-80   bg-[url('/static/img/7.jpg')] bg-cover bg-center duration-500"></div>
          <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
            <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
            <span className="text-xl font-bold">LAHORE</span>
            <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
              Providing services in 10+ biggest graveyards of the city. ALmost covering 70% of the city.
            </p>
          </div>
        </NavLink>
      </div>

      <div className="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-zinc-800 text-gray-50 p-5 mt-16">
        <NavLink
        to='/islamabad'
        className="">
          <div className="group-hover:scale-110 w-full h-80   bg-[url('/static/img/5.jpg')] bg-cover bg-center duration-500"></div>
          <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
            <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
            <span className="text-xl font-bold">ISLAMABAD</span>
            <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
Providing services in the major graveyards. ALmost covering the entire city.            </p>
          </div>
        </NavLink>
      </div>

      <div className="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-zinc-800 text-gray-50 p-5 mt-16">
        <NavLink
        to='/karachi'
        className="">
          <div className="group-hover:scale-110 w-full h-80   bg-[url('/static/img/8.jpg')] bg-cover bg-center duration-500"></div>
          <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
            <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
            <span className="text-xl font-bold">Karachi</span>
            <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
Providing services in 10+ biggest graveyards of the city. ALmost covering greater portion of the population. </p>
          </div>
        </NavLink>
      </div>

      <div className="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-zinc-800 text-gray-50 p-5 mt-16">
        <NavLink
        to='/peshawar'
        className="">
          <div className="group-hover:scale-110 w-full h-80   bg-[url('/static/img/9.jpg')] bg-cover bg-center duration-500"></div>
          <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
            <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
            <span className="text-xl font-bold">Peshawar</span>
            <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
Providing services in 10 of the major graveyards of the city. Covering the entire city.            </p>
          </div>
        </NavLink>
      </div>

      <div className="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-zinc-800 text-gray-50 p-5 mt-16">
        <NavLink
        to='/rawalpindi'
        className="">
          <div className="group-hover:scale-110 w-full h-80   bg-[url('/static/img/10.jpg')] bg-cover  duration-500"></div>
          <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
            <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
            <span className="text-xl font-bold">RAWALPINDI</span>
            <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
Providing services in the major graveyards. ALmost covering the entire city.            </p>
          </div>
        </NavLink>
      </div>

      <div className="relative group cursor-pointer overflow-hidden duration-500 w-80 h-96 bg-zinc-800 text-gray-50 p-5 mt-16">
        <NavLink
        to='/multan'
        className="">
          <div className="group-hover:scale-110 w-full h-80   bg-[url('/static/img/11.jpg')] bg-cover  duration-500"></div>
          <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
            <div className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
            <span className="text-xl font-bold">MULTAN</span>
            <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
Providing services in the major graveyards of the city. ALmost covering the entire city.             </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Areas;
