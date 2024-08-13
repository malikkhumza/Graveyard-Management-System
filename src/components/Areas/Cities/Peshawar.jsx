import React from 'react'

function Peshawar() {
  return (
    <div className='bg-gray-900 flex py-44 px-10'>
       <div className=' flex border-2 border-gray-100  bg-[#050d15] w-screen p-5'> 
        <div className=''>
            <img src="/static/img/9.jpg" alt="" className=' h-full w-80 hidden md:block' />
        </div>

        <div className='text-white  font-KeplerStd px-10'>
            <h2 className='text-[#D5A021] text-4xl '>Peshawar</h2>
            <p>
                We are providig our services in the following graveyards in Peshawar:
                
                <ol className='ml-4' >
                    <li>1) Bannu Cemetery</li>
                    <li>2) Khan Family Cemetery</li>
                    <li>3) Sadar Bazaar Cemetery Peshawar</li>
                    <li>4) Peshawar Jamrud Road Cemetery</li>
                    <li>5) Wazir Bagh Christian Cemetery</li>
                    <li>6) Taikal Payan Christian Cemetery</li>
                    <li>7) Old City Cemetery Peshawar</li>
                    <li>8) Mackeson Memorial Peshawar </li>
                    <li>9) Dargai Qabrastan</li>
                    
                </ol>
                </p>
        </div>
        </div>
    </div>
  )
}

export default Peshawar