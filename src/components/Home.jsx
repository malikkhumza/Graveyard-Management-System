import React, { useRef, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {

  // const { showPopup } = usePopup();

  // const { isAuthenticated } = usePopup();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     toast.success('Logged in successfully!', { autoClose: 2000 });
  //   }
  // }, [isAuthenticated]);

  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };


  const scrollRef = useRef();
  const scrollBottom = e => {
    e.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className=" w-full ">
      <div className="h-screen ">

        <div className=" w-full    h-full bg-[url('/img/6.jpg')]  flex bg-fixed bg-center justify-center items-center bg-cover bg-no-repeat bg-[#050d15]  ">
          <div className="">
            <div className="justify-center  flex mb-5 items-center">
              <p className="px-10 mt-24 font-Sans  text-[#D5A021]  text-[15px] ">
                FUNERAL HOME SERVICES
              </p>
            </div>
            <div className="justify-center items-center px-10 md:ml-6 px">
              <p className=" text-white font-KeplerStd font-bold text-center  leading-none  flex text-[70px]">
                Funeral plans to help you do right by your family
              </p>
            </div>
            {/* {showPopup && <Popup  message="Logged in successfully!" />} */}

            <div className="justify-center flex">
              
              <button className="text-white  px-10 py-3 mt-8 bg-[#D5A021] rounded-md hover:bg-[#050d15] ease-in-out duration-500"
              onClick={() => scrollBottom(scrollRef)}>
              
          
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:h-max flex bg-[#050d15]  w-full ">
        <img
          className="lg:ml-auto lg:items-center  lg:h-[530px] lg:w-[600px] hidden lg:block lg:p-10 lg:mt-[60px] lg:rounded "
          src="/public/img/img2.jpeg"
          alt=""
          srcset=""
        />

        <div className="space-y-4  px-6  mt-24  w-full  ">
          <h2 className="text-[#D5A021] font-bold text-[20px]">About Us</h2>
          <p className="text-4xl font-extrabold font-KeplerStd text-[50px] leading-none text-white py-4 ">
            We Provide Funeral Ceremonies
          </p>
          <p className="text-white space-y-3 text-justify  max-h-sm">
          In times of grief, we extend our heartfelt condolences and offer our support with compassionate funeral services tailored to honor and celebrate the life of your loved one. Our dedicated team understands the importance of creating a meaningful farewell that reflects the unique essence of those we’ve lost. With sensitivity and respect, we guide you through every aspect of the funeral process, providing thoughtful arrangements, personalized tributes, and a serene atmosphere for remembrance. Let us help you navigate this difficult time with dignity and care, ensuring a farewell that truly honors the cherished memories and legacy of your beloved.
          </p>

          <div className="  pt-10 pb-20 flex items-center ">
            <img
              className="h-20 rounded-full w-20 "
              src="/public/img/img4.png"
              alt=""
              srcset=""
            />
            <div>
              <p className="text-white text-2xl font-bold  px-[15px]">
                Malik Humza
              </p>
              <p className="text-white px-[15px] ">CEO OF THE COMPANY</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* gravestones */}
      <div className="h-screen ">
        <div className="w-full h-screen bg-[url('/img/img00.jpeg')]  flex bg-fixed bg-center justify-center items-center bg-cover bg-no-repeat bg-[#050d15]  ">
          <div className="">
            
            <div className="justify-center items-center px-10 md:ml-6 px">
              <p className=" text-[#D5A021]   text-center  leading-none font-light  flex text-[50px]">
              Memorials & Headstones
              </p>
            </div>
            <div 
            className="text-white mt-10 text-xl text-center font-thin"
            >
              <p>We offer a huge range of headstones available Nationwide</p>
              <p className="mt-6">Our skilfully crafted monuments and gravestones are available in all colours</p>
            </div>
            
          </div>
        </div>
      </div>

      {/* restorations */}

      <div className="h-screen ">
        <div className=" w-full h-screen bg-[url('/img/img002.jpeg')]  flex bg-fixed bg-center justify-center items-center bg-cover bg-no-repeat bg-[#050d15]  ">
          <div className="">
           
            <div className="justify-center items-center flex px-10 md:ml-6 px">
              <p className=" text-[#D5A021]   text-center  leading-none font-light  flex text-[50px]">
              Restorations
              </p>
            </div>
            <div 
            className="text-white mt-10 text-xl text-center font-thin"
            >
              <p>We can renovate and restore your loved ones resting place to its original condition</p>
              
            </div>
            {/* <div className="justify-center flex">
              <button className="text-white  px-10 py-3 mt-8 bg-[#D5A021] rounded-md hover:bg-[#050d15] ease-in-out duration-500">
                CONTACT US
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="bg-gray-200 h-max md:h-max  w-full  ">
        <div>
          <p className="text-[#D5A021] font-semibold flex justify-center py-6">
            WE REMEMBER
          </p>
          <p className="text-black flex justify-center font-bold font-KeplerStd  text-3xl">
            RECENT OBITUARIES
          </p>
        </div>

        <div className="p-8 flex flex-wrap justify-around ">
          <div class="max-w-sm mb-6 border border-gray-200  shadow bg-white ">
            <img class="" src="/public/img/1.png" alt="" />
            <div class="p-4">
              <h5 class="mb-2 flex  font-KeplerStd justify-center text-2xl font-bold tracking-tight text-gray-900">
                Roma Dee
              </h5>
              <p class="mb-3  text-[#D5A021] font-semibold flex justify-center">
                Dec 25,1876 - April 11,1948
              </p>
            </div>
          </div>

          <div class="max-w-sm mb-6 border border-gray-200  shadow bg-white">
            <img class="" src="/public/img/2.jpg" alt="" />

            <div class="p-4">
              <h5 class="mb-2  font-KeplerStd flex justify-center text-2xl font-bold tracking-tight text-gray-900">
                Salay Breh
              </h5>

              <p class="mb-3  text-[#D5A021] font-semibold flex justify-center">
                Dec 25,1876 - April 11,1948
              </p>
            </div>
          </div>

          <div class="max-w-sm mb-6 border border-gray-200  shadow bg-white">
            <img class="" src="/public/img/3.png" alt="" />
            <div class="p-4"
            ref={scrollRef}>
              <h5 class="mb-2  font-KeplerStd flex justify-center text-2xl font-bold tracking-tight text-gray-900">
                Kim Oo
              </h5>
              <p class="mb-3 text-[#D5A021] font-semibold flex justify-center">
                Dec 25,1876 - April 11,1948
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
