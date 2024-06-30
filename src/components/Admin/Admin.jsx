import React, { useEffect } from 'react'
import { useUser } from '../../contexts/auth.jsx'
import { useNavigate } from 'react-router';

import jsonData from '../../assets/payments.json'

import AllUsers from './AllUsers.jsx';
import { Link } from 'react-router-dom';

function AdminDashboard() {
    let user = useUser();
    let navigate = useNavigate();

    if (!user.user && !user.loading) {
        navigate('/login');
    }

    if (!user.loading && user.user && user.user.role !== 'admin') {
        navigate('/myaccount');
    }

    if (user.loading) return (
        <div className='bg-gray-900 py-24 pt-36 w-full'>
            <div className='flex justify-center text-3xl font-KeplerStd font-semibold text-[#D5A021]'>
                Loading...
            </div>
        </div>
    )

    return (
        <div className='bg-gray-900 py-24 pt-36 w-full'>
            <div className='flex justify-center text-3xl font-KeplerStd font-semibold text-[#D5A021]'>
                Welcome {user.user.name}!
            </div>
            <div style={{textAlign:"center"}}>
                <span style={{color:"white",opacity:"0.8"}}> Go To: </span>
                <Link to="/admin-chats" style={{color:"white",textDecoration:"underline",fontSize:"1rem"}}>Admin Chats</Link>
            </div>
            <h2 className='flex justify-center text-3xl font-KeplerStd font-semibold text-[#D5A021]'>
                Admin Dashboard
            </h2>
            <div className='flex flex-col justify-center items-center mt-28'>
                <AllUsers />
            </div>
        </div>
    )
}

export default AdminDashboard