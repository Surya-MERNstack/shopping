import React from 'react'
import './CSS/LoginSingup.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handle = () => {
      navigate('/shop')
    }
  return (
    <div className='loginsingup'>
      <div className="loginsingup-container">
        <h1 className='text-danger'>Log In</h1>
        <div className='loginsigup-fields'>
          {/* <input type="text" placeholder='Your name' /> */}
          <input type="email" placeholder='Email Address' value="kakshi@gmail.com"/>
          <input type="password" placeholder='Password' value = "123"/>
        </div>
        <button onClick={() => handle()}>Continue</button>
        <p className='loginsignup-login'>Already have an account <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' required id=''/>
          <p>By Continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Login