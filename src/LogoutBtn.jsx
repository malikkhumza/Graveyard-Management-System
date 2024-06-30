import React from 'react'
import {usedispatch} from 'react-redux'
import authService from './appwrite/auth'
import logout from './store/auth'


function LogoutBtn() {
    const dispatch = usedispatch()
    const logoutHandler =()=>{
        authService.logout()
        .then(()=>{
            dispatch(logout())
        })
    }

  return (
    <button
    className='text-2xl text-white font-KeplerStd '
    >Logout</button>
  )
}

export default LogoutBtn