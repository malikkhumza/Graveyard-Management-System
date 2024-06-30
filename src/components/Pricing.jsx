import React from "react";

function Pricing() {
  return (
    <div className="bg-gray-900 h-max w-full py-8">
      <div className="p-8">
        {/* <p className="text-[#D5A021] py-10 font-semibold flex justify-center">
          Pricing
        </p> */}
        <p className="flex font-KeplerStd  justify-center font-bold text-4xl mb-2 mt-24 text-white">
          Our Prices
        </p>
      </div>

      {/* pricing starts here */}
      <div className="md:flex md:p-10  ">
        <div className="px-6">
          <div className="">
            <div className="text-white font-KeplerStd  font-bold flex justify-between text-2xl">
              <p>Grave Maintenance</p>
              <p>Rs 2500</p>
            </div>
            <div className="border-gray-500 mt-2 border-b"></div>
            <p className="text-slate-400 font-thin text-justify py-2 text-[20px]">
              Grave maintenance includes cleaning, flowering and regular maintenance of grave. Disaster management is also provided.
            </p>
          </div>

          <div className="pt-8 ">
            <div className="text-white font-KeplerStd  font-bold flex justify-between  text-2xl">
              <p>Kafn/Dafn</p>
              <p>Rs 8000+</p>
            </div>
            <div className="border-gray-500 mt-2 border-b"></div>
            <p className="text-slate-400 text-justify font-thin py-2 text-[20px]">
              All the Funeral related services are included in Kafn/Dafn. Which includes Ghusl, kafn etc.
            </p>
          </div>

          <div className="pt-8 ">
            <div className="text-white font-KeplerStd  font-bold flex justify-between  text-2xl">
              <p>Food Services</p>
              <p>Rs 20k+</p>
            </div>
            <div className="border-gray-500 mt-2 border-b"></div>
            <p className="text-slate-400 font-thin py-2 text-[20px]">
              We provide food services for all families. It includes different types of food depending on your choice.
            </p>
          </div>

          
        </div>


        <div className="px-6">
          <div className="">
            <div className="text-white font-KeplerStd  font-bold flex justify-between text-2xl">
              <p>Seating Services</p>
              <p>Rs 10k+</p>
            </div>
            <div className="border-gray-500 mt-2 border-b"></div>
            <p className="text-slate-400 text-justify font-thin py-2 text-[20px]">
              We provide seating services for all families. It includes tents, chairs, tables etc.
            </p>
          </div>

          <div className="pt-8 ">
            <div className="text-white font-KeplerStd  font-bold flex justify-between  text-2xl">
              <p>Grave Digging</p>
              <p>Rs 15k+ </p>
            </div>
            <div className="border-gray-500 mt-2 border-b"></div>
            <p className="text-slate-400 text-justify font-thin py-2 text-[20px]">
              Grave digging service is also provided. You can show us the location ad we will do the rest.
            </p>
          </div>

          <div className="pt-8 ">
            <div className="text-white font-KeplerStd  font-bold flex justify-between  text-2xl">
              <p>Restoration</p>
              <p>RS 10k+ </p>
            </div>
            <div className="border-gray-500 mt-2 border-b"></div>
            <p className="text-slate-400 font-thin py-2 text-[20px]">
              You can also have the graves of your loved ones restored. We also provide restoration services.
            </p>
          </div>

          


        </div>

      </div>
    </div>
  );
}

export default Pricing;
