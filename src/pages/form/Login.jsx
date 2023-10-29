import React, { useState } from 'react'
import './form.css'

import { Link, useNavigate } from 'react-router-dom'

import SignUp from './SignUp'
import { UserAuth } from '../../context/AuthContext'


export default function Login() {

  const [ email, setEmail ] = useState("")
  const [ error, setError ] = useState("")
  const [ password, setPassword ] = useState("")
  const { signIn } = UserAuth()
  const navigate = useNavigate()

  const defaultEmail = "henry@mail.com"
  const defaultPassword = "henry1234"

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try{
      await signIn(email, password)
      navigate("/account")
    } catch (e) {
      setError(e.message)
      console.log(e.message);
    }
  }

  const handleDemo = (e) => {
    if (e.target.checked) {
      setEmail(defaultEmail)
      setPassword(defaultPassword)
    } else {
      setEmail("")
      setPassword("")
    }
  }

  return (
    <div className='form-wrapper'>
      <div className="form-container login">
        <h2>Login to your account</h2>
        <form onSubmit={handleSubmit}>
          <div role="group"> 
            <div className="demo">
              <input 
                onChange={handleDemo} 
                type="checkbox" 
                id="defaultUserCheck" 
                name="defaultUserCheck"
              />
              <label htmlFor="defaultUserCheck"> use Demo account</label>
            </div>
            <br />
            <label>Enter your email</label>
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              type="text" 
              placeholder='email' />
          </div>
          <div role="group">
            <label>Enter your password</label>
            <input 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              type="password" 
              placeholder='password' />
          </div>
          <button>Submit</button>
        </form>
        <p>Don't have an account yet? Click &nbsp;<Link className='underline' to="/signup" element={<SignUp />}>here</Link></p>
      </div>
    </div>
  )
}
