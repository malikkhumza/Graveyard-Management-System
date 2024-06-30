import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUser } from "../contexts/auth";

import { toast } from "react-toastify";

export default function Navbar() {

  const userContext = useUser();
  const user = userContext.user;
  const logout = userContext.logout;

  const [isNavOpen, setIsNavOpen] = useState(false);


  const TOP_OFFSET = 50;
  const [showBackground, setShowBackground] = useState(false);

  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleStateChange = (state) => {
    setIsNavOpen(state.isOpen);
  };
  const handleCloseMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <div
      className={`fixed ${
        showBackground ? "bg-[#050d15]" : "bg-transparent"
      }   w-full   lg:h-28 h-20 md:px-10 justify-between  z-50  flex items-center text-white`}
    >
      <NavLink
      to="">
      <div className="px-[20px]   text-3xl cursor-pointer   font-semibold font-sans">
        
        <img className=" w-32  h-auto" src="/public/img/logo 2.svg" alt="" />
      </div></NavLink>
      <ul className="lg:text-lg lg:flex hidden  ">
        <li className="hover:scale-105 ">
          <NavLink
            to=""
            className={({ isActive }) =>
              ` ${
                isActive ? "text-[#D5A021]" : "text-white"
              } hover:scale-105 hover:text-[#D5A021] duration-300 ease-in-out  md:mx-[27px] cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  `
            }
          >
            HOME
          </NavLink>
        </li>

        <li className="hover:scale-105">
          <div className="">
            <div className="group relative inline-block ">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-[#D5A021]" : "text-white"
                  }  md:mx-[27px] flex cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#D5A021] duration-300 ease-in-out`
                }
              >
                SERVICES
                <svg
                  className=" w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </NavLink>

              <ul className="absolute hidden pt-1 text-white group-hover:block bg-[#050d15] w-max text-sm">
                <li className="">
                  <NavLink
                    to="/onetime"
                    className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]"
                  >
                    One Time Services
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/monthly"
                    className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]"
                  >
                    Monthly Services
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="hover:scale-105">
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-[#D5A021]" : "text-white"
              } md:mx-[27px]  cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#D5A021] duration-300 ease-in-out`
            }
          >
            PRICING
          </NavLink>
        </li>
        {/* defining chat route */}
        {/* {!user?.role || user?.role!== 'admin'? (<>
          <li className="hover:scale-105">
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-[#D5A021]" : "text-white"
              }  md:mx-[27px] cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#D5A021] duration-300 ease-in-out`
            }
          >
            ChatWith-Us
          </NavLink>
        </li>
        </>):(<>
          <li className="hover:scale-105">
          <NavLink
            to="/admin-dashboard"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-[#D5A021]" : "text-white"
              }  md:mx-[27px] cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#D5A021] duration-300 ease-in-out`
            }
          >
            Admin-Dashboard
          </NavLink>
        </li>
        </>)} */}
{/* ending here */}
        <li className="hover:scale-105">
          <NavLink
            to="/plans"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-[#D5A021]" : "text-white"
              }  md:mx-[27px] cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#D5A021] duration-300 ease-in-out`
            }
          >
            PLANS
          </NavLink>
        </li>

        <div className="group relative inline-block  ">
          <li className="hover:scale-105 onClick={handleClick} ">
            <NavLink
              to="/areas"
              className={({ isActive }) =>
                ` ${
                  isActive ? "text-[#D5A021]" : "text-white"
                }  md:mx-[27px] flex cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#D5A021] duration-300 ease-in-out`
              }
            >
              SERVICE AREAS
              <svg
                className=" w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </NavLink>

            <ul className="absolute hidden pt-1 text-white group-hover:block w-full bg-[#050d15] text-sm">
              <li className="">
                <NavLink
                  to="/lahore"
                  className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]"
                >
                  Lahore
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/islamabad"
                  className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]"
                >
                  Islamabad
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/karachi"
                  className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]"
                >
                  Karachi
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/peshawar"
                  className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]"
                >
                  Peshawar
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/rawalpindi"
                  className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]"
                >
                  Rawalpindi
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  to="/multan"
                  className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]"
                >
                  Multan
                </NavLink>
              </li>
            </ul>
          </li>
        </div>
      </ul>

      <div className="lg:flex lg:items-center hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-7 h-7 font-bold fill-[#D5A021] stroke-[#D5A021]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
        <div className=" px-5">
          <span className="font-semibold text-2xl leading-normal font-KeplerStd  hover:text-[#D5A021] ease-in-out duration-500 cursor-pointer">
            090078601
          </span>
          
          {user && (
            <p className="">
              <div
                className="flex group relative cursor-pointer "
                htmlFor="user"
              >
                {user.name}
                <svg
                  className=" w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
                <ul className="absolute hidden pt-1 mt-6 text-white group-hover:block bg-[#050d15] w-max text-sm">
                  <li className="">
                    <NavLink
                      to="/myaccount"
                      className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]"
                    >
                      My Account
                    </NavLink>
                  </li>
                  {!user?.role || user?.role!== 'admin'? (<>
          {/* <li className="hover:scale-105">
          <NavLink
            to="/chat"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-[#D5A021]" : "text-white"
              }  md:mx-[27px] cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#D5A021] duration-300 ease-in-out`
            }
          >
            ChatWith-Us
          </NavLink>
        </li> */}
        </>):(<>
          <li className="hover:scale-105">
          <NavLink
            to="/admin-dashboard"
            className={({ isActive }) =>
              ` ${
                isActive ? "text-[#D5A021]" : "text-white"
              }  md:mx-[27px] cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#D5A021] duration-300 ease-in-out`
            }
          >
            Admin-Dashboard
          </NavLink>
        </li>
        </>)}
                  <li
                    className="whitespace-no-wrap block  rounded-t  px-4 py-2 hover:text-[#D5A021]"
                    onClick={() => { toast.success("Logged out successfully!"),{autoclose: 1000};
                      logout();
                    }}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </p>
          )}
          
          {user ? 
          // (
          //   <div
          //   className="md:mx-[27px] flex cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#D5A021] duration-300 ease-in-out"
          //   >
          //   <p
          //     className=""
          //     onClick={() => {
          //       logout({ returnTo: window.location.origin });
          //     }}
          //   >
          //     Logout
          //   </p></div>
          // )
          null
           : (<div 
            // className="text-white cursor-pointer font-medium hover:text-[#D5A021] ease-in-out duration-500 hover:scale-105"
            className="md:mx-[27px] flex cursor-pointer hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#D5A021] duration-300 ease-in-out hover:scale-110"
            >
            <p
             
              // onClick={() => {
              //   loginWithRedirect();
              // }}
              onClick={() => navigate("/login")}
            >
              Login
            </p></div>
          )}
        </div>
      </div>

      <section className="MOBILE-MENU flex  lg:hidden">
        <div
          className="HAMBURGER-ICON space-y-2 p-3 cursor-pointer "
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8  bg-gray-600"></span>
          <span className="block h-0.5 w-8  bg-gray-600"></span>
          <span className="block h-0.5 w-8  bg-gray-600"></span>
        </div>

        <div
          className={`${
            isNavOpen ? "showMenuNav" : "hideMenuNav"
          } flex h-full flex-col justify-between border-e bg-[#050d15] `}
        >
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-white cursor-pointer "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>

          <div className="px-4 py-6">
            {/* <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-800 text-xs text-gray-600">
      Logo
    </span> */}
            {/* <li className=" border-gray-400 my-8 uppercase ">
              <NavLink
                to=""
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-[#D5A021]" : "text-white"
                  } hover:text-[#D5A021] ease-in-out duration-500 cursor-pointer underline`
                }
                onClick={() => handleCloseMenu()}
              >
                HOME
              </NavLink>
            </li> */}

            <ul
              className="mt-6 space-y-1"
              onStateChange={handleStateChange}
              isOpen={isNavOpen}
            >
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "bg-gray-800 text-white" : null
                    } flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-800 hover:text-white`
                  }
                  onClick={() => handleCloseMenu()}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    ` ${
                      isActive && "bg-gray-800 text-white"
                    } flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-800 hover:text-white`
                  }
                  onClick={() => handleCloseMenu()}
                >
                  Services
                </NavLink>
              </li>
              

              {/* {!user?.role || user?.role!== 'admin'? (<>
                <li className="my-4">
        <NavLink
          to="/chat"
          className="text-white text-s"
          onClick={handleCloseMenu}
          style={{marginLeft:"1rem"}}
        >
          ChatWith-Us
        </NavLink>
      </li>
              </>):(<>
              
                <li className="my-4">
        <NavLink
          to="/admin-dashboard"
          className="text-white text-s"
          onClick={handleCloseMenu}
          style={{marginLeft:"1rem"}}
        >
          Admin Dashboard
        </NavLink>
      </li>
              </>)} */}
             
              <li>
                <NavLink
                  to="/pricing"
                  className={({ isActive }) =>
                    ` ${
                      isActive && "bg-gray-800 text-white"
                    } flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-800 hover:text-white`
                  }
                  onClick={() => handleCloseMenu()}
                >
                  Pricing
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/plans"
                  className={({ isActive }) =>
                    ` ${
                      isActive && "bg-gray-800 text-white"
                    } flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-800 hover:text-white`
                  }
                  onClick={() => handleCloseMenu()}
                >
                  Plans
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/areas"
                  className={({ isActive }) =>
                    ` ${
                      isActive && "bg-gray-800 text-white"
                    } flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-800 hover:text-white`
                  }
                  onClick={() => handleCloseMenu()}
                >
                  Service Areas
                </NavLink>
              </li>

              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-800 hover:text-white">
                    <span className="text-sm font-medium"> Account </span>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="mt-2 space-y-1 px-4">
                    <li>
                      <NavLink
                        to="/myaccount"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-800 hover:text-white"
                      >
                        My Account
                      </NavLink>
                    </li>
                    {!user?.role || user?.role!== 'admin'? (<>
                <li className="my-4 text-s w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-800 hover:text-white">
        <NavLink
          to="/chat"
         
          onClick={handleCloseMenu}
          
        >
          ChatWith-Us
        </NavLink>
      </li>
              </>):(<>
              
                <li className="my-4">
        <NavLink
          to="/admin-dashboard"
          className=" text-s w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-800 hover:text-white"
          onClick={handleCloseMenu}
          style={{marginLeft:"1rem"}}
        >
          Admin Dashboard
        </NavLink>
      </li>
              </>)}

                    {user ? (
                      <li>
                        <button
                          onClick={() =>
                            logout()
                          }
                          type="submit"
                          className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-800 hover:text-white"
                        >
                          Logout
                        </button>
                      </li>
                    ) : (
                      <li>
                        <button
                        onClick={() => navigate("/login")}
                          type="submit"
                          className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-800 hover:text-white"
                        >
                          Login
                        </button>
                      </li>
                    )}
                  </ul>
                </details>
              </li>
            </ul>
          </div>

          {user ? (
            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
              <p
              
                className="flex items-center gap-2 bg-[#050d15] p-4"
              >
                <img
                  alt=""
                  src="/public/img/img4.jpg"
                  className="size-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-xs ">
                    <strong className="block font-medium">{user.name}</strong>

                    <span> {user.email} </span>
                  </p>
                </div>
              </p>
            </div>
          ) : null}
        </div>
        {/* { user ?
      <div>
      <div className='text-white flex items-center pt-2 mr-2'>
        <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ">
        <img className="w-8 h-8 rounded-full" 
        //src={user.img} once evrthng is dne ill come bck here
        src="/public/img/img4.jpg"
         alt="user photo"/>
          </button>
          <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      </div>
        </div>:
      <div className='text-white flex items-center'>
        <button
        className='bg-[#D5A021] px-4 py-1.5 rounded font-semibold'
        onClick={() => loginWithRedirect()}>Sign In</button>
        
        </div>
        }

        <div
          className="HAMBURGER-ICON space-y-2 p-3 cursor-pointer "
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8  bg-gray-600"></span>
          <span className="block h-0.5 w-8  bg-gray-600"></span>
          <span className="block h-0.5 w-8  bg-gray-600"></span>
        </div>

        <div className={`${isNavOpen ? "showMenuNav" : "hideMenuNav"} `}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-white cursor-pointer "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
              
          

          <ul
            className="flex flex-col items-center justify-between min-h-[250px]"
            onStateChange={handleStateChange}
            isOpen={isNavOpen}
          >
            <li className=" border-gray-400 my-8 uppercase ">
              <NavLink
                to=""
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-[#D5A021]" : "text-white"
                  } hover:text-[#D5A021] ease-in-out duration-500 cursor-pointer underline`
                }
                onClick={() => handleCloseMenu()}
              >
                HOME
              </NavLink>
            </li>
            <li className=" border-gray-400 my-8 uppercase ">
              <NavLink
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-[#D5A021]" : "text-white"
                  } hover:text-[#D5A021] ease-in-out duration-500 cursor-pointer underline`
                }
                to="/services"
                onClick={() => handleCloseMenu()}
              >
                SERVICES
              </NavLink>
            </li>
            <li className=" border-gray-400 my-8 uppercase ">
              <NavLink
                onClick={() => handleCloseMenu()}
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-[#D5A021]" : "text-white"
                  } hover:text-[#D5A021] ease-in-out duration-500 cursor-pointer underline`
                }
                to="/pricing"
              >
                PRICING
              </NavLink>
            </li>
            <li className=" border-gray-400 my-8 uppercase ">
              <NavLink
                onClick={() => handleCloseMenu()}
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-[#D5A021]" : "text-white"
                  } hover:text-[#D5A021] ease-in-out duration-500 cursor-pointer underline `
                }
                to="/plans"
              >
                PLANS
              </NavLink>
            </li>
            <li className=" border-gray-400 my-8 uppercase ">
              <NavLink
                onClick={() => handleCloseMenu()}
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-[#D5A021]" : "text-white"
                  } hover:text-[#D5A021] ease-in-out duration-500 cursor-pointer underline`
                }
                to="/areas"
              >
                SERVICE AREAS
              </NavLink>
            </li>
          </ul>
        </div> */}
      </section>

      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 50%;
        height: 100vh;
        top: 0;
        right: 0;
        background: #050d15;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        // align-items: center;
      } 
    `}</style>
    </div>
  );
}
