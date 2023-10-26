import React, { useState } from 'react'
import Login from './Login'
import { Link, useNavigate } from 'react-router-dom'
import "./form.css"
import { UserAuth } from '../../context/AuthContext'


export default function SignUp() {

  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState("")
  //We grab the createNewUser from UserAuth from the Context file(line 29)
  const { createNewUser } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createNewUser(email, password);
      navigate("/account")
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className='form-wrapper'>
      <div className="form-container signup">
        <h2>Sign up for your free account</h2>
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
     
        <p>Already have an account? Login &nbsp;<Link className='underline' to="/login" element={<Login />}>here</Link></p>
      </div>
    </div>
  )
}
