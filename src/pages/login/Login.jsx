import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className='login-wrapper'>
      <div className="login">
        <h2>Login</h2>
        <div>
            <label>Enter your email</label>
            <input type="text" placeholder='email' />
        </div>
        <div>
            <label>Enter your password</label>
            <input type="password" placeholder='password' />
        </div>
        <button onClick={() => alert('clicked')}>Submit</button>
        <p>Don't have an account yet? Click here to sign up <br /> and save 10% on your first order!</p>
      </div>
    </div>
  )
}
