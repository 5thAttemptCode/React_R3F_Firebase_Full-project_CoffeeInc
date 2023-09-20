import React, { useState } from 'react'
import "./form.css"
import { Link, useNavigate } from 'react-router-dom'
import SignUp from './SignUp'
import { UserAuth } from '../../context/Context'


export default function Login() {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState("")
  const navigate = useNavigate()
  const { signIn } = UserAuth()

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

  return (
    <div className='form-wrapper'>
      <div className="form-container login">
        <h2>Login to your account</h2>
        <form onSubmit={handleSubmit}>
            <div>
              <label>Enter your email</label>
              <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='email' />
            </div>
            <div>
              <label>Enter your password</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' />
            </div>
            <button>Submit</button>
        </form>
        <p>Don't have an account yet? Click &nbsp;<Link className='underline' to="/signup" element={<SignUp />}>here</Link></p>
      </div>
    </div>
  )
}
