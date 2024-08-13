import React from "react";

function Islamabad() {
  return (
    <div className="bg-gray-900 flex py-44 px-10">
      <div className=" flex border-2 border-gray-100  bg-[#050d15] w-screen p-5">
        <div className="">
          <img src="/static/img/5.jpg" alt="" className=" h-full w-80 hidden md:block" />
        </div>

        <div className="text-white  font-KeplerStd px-10">
          <h2 className="text-[#D5A021] text-4xl ">Islamabad</h2>
          <p>
            We are providig our services in the following graveyards in
            Islamabad:
            <ol className="ml-4">
              <li>1) Islamabad Graveyard, H-11</li>
              <li>2) H-8 Graveyard</li>
              <li>3) CDA Graveyard</li>
              <li>4) H-9 Graveyard</li>
              <li>5) Mujahideen Graveyard</li>
              <li>6) E-11 Informal Cementery</li>
              <li>7) Nai Abdali Graveyard</li>
              <li>8) Old Graveyard</li>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Islamabad;
