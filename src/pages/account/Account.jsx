import React from 'react'
import './account.css'

import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'


export default function Account() {

  const { user, logout } = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
      try {
          await logout()
          navigate("/")
      } catch (e) {
          console.log(e.message);
      }
  }

  return (
    <div className='section-margin account'>
      <div className="account-wrapper">
        <p>Account email: {user && user.email}</p>
        <br />
        <br />
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    </div>
  )
}
