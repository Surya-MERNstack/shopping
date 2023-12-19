import React from 'react'
import './CSS/LoginSingup.css'
const LoginSingup = () => {
  return (
    <div className='loginsingup'>
      <div className="loginsingup-container">
        <h1>Sign Up</h1>
        <div className='loginsigup-fields'>
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSingup
