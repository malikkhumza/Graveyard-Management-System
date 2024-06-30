
function Footer() {
  return (
    <footer className=' w-full h-max bg-[#050d15] border-t-2 py-10' >
        <p className='text-5xl text-white font-KeplerStd  font-bold p-6 '>CONTACT</p>
        
        
        <div className='pb-9  flex flex-wrap  md:justify-around '>
            
            <div className='text-white p-6'>
                <p className=' font-bold text-xl font-KeplerStd pb-4 '>Our Location</p>
                <p className='text-slate-400'>Near Miani Sahab GraveYard Lahore, Pakistan</p>
            </div>

            <div className='text-white p-5'>
                <p className=' font-bold text-xl pb-4  font-KeplerStd '>Working Hours</p>
                <p className='block text-slate-400'>Monday - Friday 8AM - 6PM</p>
                <p className='text-slate-400'> Saturday - Sunday 9AM - 5PM</p>
            </div>

            
            <div className='text-white p-5'>
                <p className=' font-bold text-xl pb-4 font-KeplerStd  '>Office Phone</p>
                <p className='text-slate-400'>090078601</p>
            </div>

            <div className='text-white  p-5'>
                <p className=' font-bold text-xl pb-4 font-KeplerStd  '>Email</p>
                <p className='text-slate-400'>ARAAM@gmail.com</p>
            </div>
        

        </div>
        <div>
        <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13600.304701047662!2d74.3081546!3d31.549524!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190357054d7f95%3A0xc9e2c7fda2b07bee!2sMiani%20Sahib%20Graveyard!5e0!3m2!1sen!2s!4v1705924552373!5m2!1sen!2s"  height="450" width='600' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className=' text-slate-400 flex items-center justify-center pt-5'>  Copyright &copy; All rights reserved</div>

    </footer>
  )
}

export default Footer