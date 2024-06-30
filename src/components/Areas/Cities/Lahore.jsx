import React from 'react'

function Lahore() {
  return (
    <div className='bg-gray-900 flex py-44 px-10'>
       <div className=' flex border-2 border-gray-100  bg-[#050d15] w-screen p-5'> 
        <div className=''>
            <img src="/public/img/7.1.jpg" alt="" className=' h-full w-80 hidden md:block' />
        </div>

        <div className='text-white  font-KeplerStd px-10'>
            <h2 className='text-[#D5A021] text-4xl '>Lahore</h2>
            <p>
                We are providig our services in the following graveyards in Lahore:
                
                <ol className='ml-4'>
                    <li>1) Miani Sahib Graveyard</li>
                    <li>2) Gora Kabristan at Dharampura</li>
                    <li>3) Gora Kabristan at Jail Road</li>
                    <li>4) Gora Kabristan at Nishat Colony</li>
                    <li>5) Gora Kabristan at Taxali Gate</li>
                    <li>6) Calvary Ground graveyard</li>
                    <li>7) Data Darbar Shrine Complex Graves</li>
                    <li>8) Lahore Cantonment British Infantry Cemetery</li>
                    <li>9) The Badshahi Mosque Graves</li>
                    <li>10) Muslim Town Cemetery</li>
                    <li>11) Nawabi Cemetery</li>
                    <li>12) Lahore Military Cantonment</li>
                    <li>13) G Block Graveyard</li>
                </ol>
                </p>
        </div>
        </div>
    </div>
  )
}

export default Lahore