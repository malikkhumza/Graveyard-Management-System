import React from 'react'

function Obituaries() {
  return (
    <div className='bg-gray-200 h-max md:h-max'>
        <div>
            <p className='text-[#D5A021] font-semibold flex justify-center py-6'>WE REMEMBER</p>
        <p className='text-black flex justify-center font-bold font-KeplerStd  text-3xl'>RECENT OBITUARIES</p>
        </div>

        <div className='p-10 flex flex-wrap justify-around'>

        <div className="max-w-sm mb-6 border border-gray-200  shadow bg-white">
        <a href="#">
          <img className="" src="/static/img/1.png" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 flex  font-KeplerStd justify-center text-2xl font-bold tracking-tight text-gray-900">
              Roma Dee
            </h5>
          </a>
          <p className="mb-3  text-[#D5A021] font-semibold flex justify-center">
            Dec 25,1876 - April 11,1948 
          </p>
        </div>
      </div>

      <div className="max-w-sm mb-6 border border-gray-200  shadow bg-white">
        <a href="#">
          <img className="" src="/static/img/2.jpg" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2  font-KeplerStd flex justify-center text-2xl font-bold tracking-tight text-gray-900">
              Salay Breh
            </h5>
          </a>
          <p className="mb-3  text-[#D5A021] font-semibold flex justify-center">
            Dec 25,1876 - April 11,1948 
          </p>
        </div>
      </div>

      <div className="max-w-sm mb-6 border border-gray-200  shadow bg-white">
        <a href="#">
          <img className="" src="/static/img/3.png" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2  font-KeplerStd flex justify-center text-2xl font-bold tracking-tight text-gray-900">
              Kim Oo
            </h5>
          </a>
          <p className="mb-3 text-[#D5A021] font-semibold flex justify-center">
            Dec 25,1876 - April 11,1948 
          </p>
        </div>
      </div>

        </div>

    </div>
  )
}

export default Obituaries