import React from 'react'

function Multan() {
  return (
    <div className='bg-gray-900 flex py-44 px-10'>
       <div className=' flex border-2 border-gray-100  bg-[#050d15] w-screen p-5'> 
        <div className=''>
            <img src="/public/img/11.jpg" alt="" className=' h-full w-80 hidden md:block' />
        </div>

        <div className='text-white  font-KeplerStd px-10'>
            <h2 className='text-[#D5A021] text-4xl'>Multan</h2>
            <p>
                We are providig our services in the following graveyards in Multan:

                <ol className='ml-4'>
                    <li>1) Cemetery at Daya Ram's Well near Multan Jail </li>
                    <li>2) Cemetery near Shrine of Baba Safra </li>
                    <li>3) Cemetery at Sher Khan's Garden, Mailsi Road </li>
                    <li>4) Multan Cemetery</li>
                    <li>5) Multan Fort Cemetery</li>
                    <li>6) Multan Idgah</li>
                    <li>7) Cemetery near New Jail</li>
                    <li>8) New Cemetery</li>
                </ol>
                </p>
        </div>
        </div>
    </div>
  )
}

export default Multan