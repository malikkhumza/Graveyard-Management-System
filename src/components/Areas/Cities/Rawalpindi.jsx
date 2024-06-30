import React from 'react'

function Rawalpindi() {
  return (
    <div className='bg-gray-900 flex py-44 px-10'>
       <div className=' flex border-2 border-gray-100  bg-[#050d15] w-screen p-5'> 
        <div className=''>
            <img src="/public/img/10.jpg" alt="" className=' h-full w-80 hidden md:block' />
        </div>

        <div className='text-white  font-KeplerStd px-10'>
            <h2 className='text-[#D5A021] text-4xl '>Rawalpindi</h2>
            <p>
                We are providig our services in the following graveyards in Rawalpindi:
                
                <ol className='ml-4' >
                    <li>1) Alif Shah Graveyard</li>
                    <li>2) Harley Street Cemetery</li>
                    <li>3) Old Cemetery Rawalpindi</li>
                    <li>4) Muslim Cemetery</li>
                    <li>5) Rajah Bazar</li>
                    <li>6) Rawalpindi War Cemetery</li>
                    <li>7) Joint Staff HQ</li>
                    
                </ol>
                </p>
        </div>
        </div>
    </div>
  )
}

export default Rawalpindi