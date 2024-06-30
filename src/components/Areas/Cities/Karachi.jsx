import React from 'react'

function Karachi() {
  return (
    <div className='bg-gray-900 flex py-44 px-10'>
       <div className=' flex border-2 border-gray-100  bg-[#050d15] w-screen p-5'> 
        <div className=''>
            <img src="/public/img/8.jpg" alt="" className=' h-full w-80 hidden md:block' />
        </div>

        <div className='text-white  font-KeplerStd px-10'>
            <h2 className='text-[#D5A021] text-4xl '>Karachi</h2>
            <p>
                We are providig our services in the following graveyards in Karachi:
                
                <ol className='ml-4'>
                    <li>1) Army Graveyard</li>
                    <li>2) Azzizabad Yaseenabad Graveyard</li>
                    <li>3) Bani Israel Graveyard</li>
                    <li>4) Bizerta Lines Graveyard</li>
                    <li>5) Defence Graveyard</li>
                    <li>6) General Mohammed Zia Ul-Haq Mausoleum</li>
                    <li>7) Gizri Cemetery</li>
                    <li>8) Gora Qabristan</li>
                    <li>9) Karachi Baha'i Cemetery</li>
                    <li>10) Korangi Graveyard</li>
                    <li>11) Mevashan Graveyard</li>
                    <li>12) Paposh Nagar Graveyard</li>
                    <li>13) PECHS Graveyard (Society Qabristan)</li>
                    <li>13) Wadi-e-Hussain Cemetery</li>
                    <li>13) Shahedon Ka Qabrustan</li>
                </ol>
                </p>
        </div>
        </div>
    </div>
  )
}

export default Karachi