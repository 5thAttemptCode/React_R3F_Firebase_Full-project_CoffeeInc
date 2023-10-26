import React from 'react'
import { UserAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import "./account.css"

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
        <p>Account id: 187685</p>
        <p>Recent orders:</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}
