import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GdiggingForm() {

  const [toastDisplayed, setToastDisplayed] = useState(false); // State to track toast display

  const navigate = useNavigate();
  const cities = [
    {
      name: "Lahore",
      graveyards: ["Miani Sahib Graveyard", "Gora Kabristan at Dharampura", "Gora Kabristan at Nishat Colony", "Gora Kabristan at Jail Road", "Gora Kabristan at Taxali Gate", "Calvary Ground graveyard", "Data Darbar Quarry Complex Graves", "Lahore Cantonment British Infantry Cemetery", "The Badshahi Mosque Graves", "Muslim Town Cemetery", "Nawabi Cemetery", "Lahore Military Cantonment", "G Block Graveyard", "Others"]
    },
    {
      name: "Islamabad",
      graveyards: ["Islamabad Graveyard H-11", "H-8 Graveyard", "H-9 Graveyard", "CDA Graveyard", " Mujahideen Graveyard", "E-11 Informal Cementery", "Nai Abdali Graveyard", "Old Graveyard", "Others"]
    },
    {
      name: "Karachi",
      graveyards: ["Army Graveyard", "Azzizabad Yaseenabad Graveyard", "Bani Israel Graveyard", "Bizerta Lines Graveyard", "Defence Graveyard", " General Mohammed Zia Ul-Haq Mausoleum", "Gizri Cemetery", "Gora Qabristan", " Karachi Baha'i Cemetery", "Korangi Graveyard", " Mevashan Graveyard", "Paposh Nagar Graveyard", " PECHS Graveyard (Society Qabristan)", "Wadi-e-Hussain Cemetery", "Shahedon Ka Qabrustan", "Others"
      ]
    },
    {
      name: "Rawalpindi",
      graveyards: ["TAlif Shah Graveyard", " Harley Street Cemetery", "Old Cemetery Rawalpindi", "Muslim Cemetery", "Rajah Bazar", " Rawalpindi War Cemetery", "Joint Staff HQ", "Others"]
    },
    {
      name: "Multan",
      graveyards: ["Cemetery at Daya Ram's Well", "Cemetery near Shrine of Baba Safra", "Cemetery at Sher Khan's Garden, Mailsi Road", " Multan Cemetery", "Multan Fort Cemetery", "Multan Idgah", "Cemetery near New Jail", "New Cemetery", "Others"]


    },
    {
      name: "Peshawar",
      graveyards: [" Bannu Cemetery", "Khan Family Cemetery", "Sadar Bazaar Cemetery", " Peshawar Jamrud Road Cemetery", "Wazir Bagh Christian Cemetery", "Taikal Payan Christian Cemetery", "Old City Cemetery", "Mackeson Memorial", "Dargai Qabrastan", "Others"]
    }
  ]

  const [City, setCity] = useState('--City--');
  const [Graveyard, setGraveyard] = useState('--Graveyard--');
  const [grave, setgrave] = useState([]);

  const changeCountry = (event) => {
    setCity(event.target.value);
    setgrave(cities.find((city) => city.name === event.target.value).graveyards);
  };

  const handleDiggingAddition = async (e) => {
    e.preventDefault();

    if (!toastDisplayed) {
      toast.success('Your digging request has been submitted. We will call you soon.', {
        autoClose: 2000,
        onClose: () => setToastDisplayed(false)
      })          
      setToastDisplayed(true); // Update state to indicate toast displayed
    }
    
    navigate("/");

    console.log(Graveyard);

    const data = {
      name: e.target.name.value,
      mobileNumber: e.target.mobile.value,
      email: e.target.email.value,
      address: e.target.address.value,
      city: City,
      graveyard: Graveyard,
      otherInfo: e.target.message.value,
    };

    let response = await fetch(import.meta.env.VITE_BACKEND_URL + "/api/payment/service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({...data, serviceId: "1"}),
    });
    let res = await response.json();
    console.log(res);
  }

  function changeGraveyard(event) {

    console.log(event.target.value)
    setGraveyard(event.target.value);

  };

  return (

    <div class="bg-gray-900 py-24 pt-44 w-full px-8 ">
      <div className="flex">
        <span
          onClick={() => navigate("/onetime")}
          className="text-gray-700 cursor-pointer text-xl px-2">One Time Services /</span>

        <p class="text-white font-KeplerStd  font-bold flex  text-xl mb-6">Grave Digging</p>
      </div>
      <div class="w-full md:w-96 md:max-w-full mx-auto">
        <div class="p-6 border border-gray-300 sm:rounded-md">

          <form
            onSubmit={handleDiggingAddition}
          >
            <label class="block mb-6">
              <span class="text-gray-700">Your name</span>
              <input
                name="name"
                type="text"
                required
                class="
            block
            w-full
            mt-1
            p-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Enter your name here"
              />
            </label>
            <label class="block mb-6">
              <span class="text-gray-700">Mobile Number</span>
              <input
                name="mobile"
                type="text"
                required

                class="
            block
            w-full
            mt-1
            p-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="03xx-xxxxxxx"
              />
            </label>

            <label class="block mb-6">
              <span class="text-gray-700">Email Address</span>
              <input
                name="email"
                type="email"
                required

                class="
            block
            w-full
            mt-1
            p-2
            mb-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="abc@example.com"
              />

            </label>

            <label class="block mb-6">
              <span class="text-gray-700">Address</span>
              <input
                name="address"
                type="text"
                required

                class="
            block
            w-full
            mt-1
            p-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Enter your complete address"
              />

            </label>

            <span class="text-gray-700">City</span>
            <select
              required

              class="
             block
             w-full
             mt-1
             p-2
             border-gray-300
             rounded-md
             shadow-sm
             focus:border-indigo-300
             focus:ring
             focus:ring-indigo-200
             focus:ring-opacity-50
             mb-6
           "
              name="city" id="" onChange={changeCountry}
              value={City}>
              <option value="">--City--</option>
              {cities.map((city) => (
                <option value={city.name}>{city.name}</option>
              ))}
            </select>

            <span class="text-gray-700">Graveyard</span>
            <select
              required

              class="
             block
             w-full
             mt-1
             p-2
             mb-6
             border-gray-300
             rounded-md
             shadow-sm
             focus:border-indigo-300
             focus:ring
             focus:ring-indigo-200
             focus:ring-opacity-50
           "
              name="city" id="" onChange={changeGraveyard}
              >
              <option value={Graveyard}>--Graveyard--</option>
              {grave.map(graveyard => (
                <option value={graveyard}>{graveyard}</option>
              ))}
            </select>

            <label class="block mb-6">
              <span class="text-gray-700">Enter the name here if it's not in the list</span>
              <input
                name="city"
                type="text"
                class="
            block
            w-full
            mt-1
            p-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder=""
              />
            </label>

            <label class="block mb-6">
              <span class="text-gray-700">Any other information</span>
              <textarea
                name="message"
                class="
            block
            w-full
            mt-1
            p-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="3"
                placeholder="floor/door lock code/etc."
              ></textarea>
            </label>
            <div class="mb-6">
              
              <button
                type="submit"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#D5A021] rounded-lg hover:bg-[#050d15] focus:ring-4 focus:outline-none dark:focus:ring-white dark:bg-bg-[#050d15] dark:hover:bg-[#050d15] duration-500 ease-in-out ml-64"
              >
                Save
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>

              </button>
            </div>
            <div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GdiggingForm;
