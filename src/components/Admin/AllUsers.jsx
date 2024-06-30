// import React, { useEffect, useState } from "react";
// import { useUser } from "../../contexts/auth.jsx";
// import { useNavigate } from "react-router";

// import jsonData from "../../assets/payments.json";

// function AllUsers() {
//   let selfuser = useUser();
//   let navigate = useNavigate();

//   let [users, setUsers] = useState([]);

//   let [modal, setModal] = useState(false);

//   useEffect(() => {
//     (async () => {
//       let response = await fetch(
//         import.meta.env.VITE_BACKEND_URL + "/api/admin/users",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + localStorage.getItem("jwt"),
//           },
//         }
//       );
//       if (response.ok) {
//         let data = await response.json();
//         data.users = data.users.map((user) => {
//           user.subscriptions = user.subscriptions.map((sub) => {
//             sub.expiryDate = new Date(sub.expiryDate);
//             return sub;
//           });
//           return user;
//         });
//         setUsers(data.users);
//       }
//     })();
//   }, []);

//   const handleUserDelete = async (email) => {
//     let response = await fetch(
//       import.meta.env.VITE_BACKEND_URL + "/api/admin/users",
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + localStorage.getItem("jwt"),
//         },
//         body: JSON.stringify({ email }),
//       }
//     );
//     if (response.ok) {
//       setUsers(users.filter((user) => user.email !== email));
//     }
//     // setModal(false);
//   };

//   return (
    
//     <table className="max-w-3xl w-1/2 bg-white rounded-lg overflow-hidden shadow-lg">
//       <thead className="bg-gray-200 text-gray-700">
//         <tr>
//           <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
//             Name
//           </th>
//           <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
//             Email
//           </th>
//           <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
//             Role
//           </th>
//           <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
//             Subscriptions
//           </th>
//           <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
//             Actions
//           </th>
//         </tr>
//       </thead>
//       <tbody className="text-gray-700">
//         {users.map((user) => {
//           if (user.email === selfuser.user.email) return;
//           return (
//             <>
//             <tr key={user.email}>
//               <td className="border px-4 py-2">{user.name}</td>
//               <td className="border px-4 py-2">{user.email}</td>
//               <td className="border px-4 py-2">{user.role}</td>
//               <td className="border px-4 py-2">
//                 {user.subscriptions.map((subscription) => (
//                   <>
//                     <div key={subscription.id} className="mt-4">
//                       Name: {jsonData[subscription.id].name}
//                     </div>
//                     <div key={subscription.id} className="mt-4">
//                       Expiry Date: {subscription.expiryDate.toDateString()}
//                     </div>
//                   </>
//                 ))}
//               </td>
//               <td className="border px-4 py-2">
//                 <button
//                   // onClick={() => setModal(true)}
//                    onClick={() => { let approval = prompt("Are you sure? ('yes' to confirm)"); if (approval.toLowerCase() === 'yes') { handleUserDelete(user.email) } }}

                  
//                   className="rounded-lg bg-[#D5A021] px-5 py-2.5  text-center text-sm font-medium text-white hover:bg-[#050d15]   dark:text-white  ease-in-out duration-500"
//                 >
//                   Delete User
//                 </button>
//               </td>
              
//             </tr>
//             </>

// // {modal ? (
// //   <div 
// //     >
  
    

// // <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center z-50">
// // <div className="relative bg-white rounded-lg shadow w-full max-w-md">
// // <button
// // onClick={() => setModal(false)}
// // type="button"
// // className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"


// // >
// // <svg
// // className="w-3 h-3"
// // aria-hidden="true"
// // xmlns="http://www.w3.org/2000/svg"
// // fill="none"
// // viewBox="0 0 14 14"
// // >
// // <path
// // stroke="currentColor"
// // strokeLinecap="round"
// // strokeLinejoin="round"
// // strokeWidth="2"
// // d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
// // />
// // </svg>
// // </button>
// // <div className="p-4 md:p-5 text-center">
// // <svg
// // className="mx-auto mb-4 text-gray-400 w-12 h-12"
// // aria-hidden="true"
// // xmlns="http://www.w3.org/2000/svg"
// // fill="none"
// // viewBox="0 0 20 20"
// // >
// // <path
// // stroke="currentColor"
// // strokeLinecap="round"
// // strokeLinejoin="round"
// // strokeWidth="2"
// // d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
// // />
// // </svg>
// // <h3 className="mb-5 text-lg font-normal text-gray-500">
// // Are you sure you want to delete {user.email} ?
// // </h3>
// // <button
// // onClick={handleUserDelete(user.email)}
// // // type="button"
// // // className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
// // className="rounded-lg bg-[#D5A021] px-5 py-2.5  text-center text-sm font-medium text-white hover:bg-[#050d15]   dark:text-white  ease-in-out duration-500"
// // >
// // Yes, I'm sure
// // </button>
// // <button
// // onClick={() => setModal(false)}
// // type="button"
// // className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
// // >
// // No, cancel
// // </button>
// // </div>
// // </div>
// // </div>

// //   </div>
// // ) : null}
//           )}
//         )}
        
//       </tbody>
      
//     </table>
   
   
    
//   );
// }

// export default AllUsers;


import React, { useEffect, useState } from 'react'
import { useUser } from '../../contexts/auth.jsx'
import { useNavigate } from 'react-router';

import jsonData from '../../assets/payments.json'

function AllUsers() {
  let selfuser = useUser();
  let navigate = useNavigate();

  let [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/admin/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        }
      })
      if (response.ok) {
        let data = await response.json();
        data.users = data.users.map(user => {
          user.subscriptions = user.subscriptions.map(sub => {
            sub.expiryDate = new Date(sub.expiryDate);
            return sub;
          })
          return user;
        })
        setUsers(data.users);
      }
    })();
  }, [])

  const handleUserDelete = async (email) => {
    let response = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/admin/users', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
      },
      body: JSON.stringify({ email })
    })
    if (response.ok) {
      setUsers(users.filter(user => user.email !== email));
    }
  }

  return (
    <table className="max-w-3xl w-1/2 bg-white rounded-lg overflow-hidden shadow-lg">
      <thead className="bg-gray-200 text-gray-700">
        <tr>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Role</th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Subscriptions</th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {users.map(user => {
          if (user.email === selfuser.user.email) return;
          return (
            <tr key={user.email}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2">
                {user.subscriptions.map(subscription => (
                  <>
                    <div key={subscription.id} className='mt-4'>
                      Name: {jsonData[subscription.id].name}
                    </div><div key={subscription.id} className='mt-4'>
                      Expiry Date: {subscription.expiryDate.toDateString()}
                    </div>
                  </>
                ))}
              </td>
              <td className="border px-4 py-2">
                <button onClick={() => { let approval = prompt("Are you sure? ('yes' to confirm)"); if (approval.toLowerCase() === 'yes') { handleUserDelete(user.email) } }} className="rounded-lg bg-[#D5A021] px-5 py-2.5  text-center text-sm font-medium text-white hover:bg-[#050d15]   dark:text-white  ease-in-out duration-500">
                  Delete User
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default AllUsers