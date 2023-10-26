import React from 'react'
import "./loggedInBar.css"
import { UserAuth } from '../../context/AuthContext'

export default function LoggedInBar() {
    const { user } = UserAuth()

  return (
    <div className='login-bar'>
      <p>Logged in as: {user && user.email}</p>
    </div>
  )
}
