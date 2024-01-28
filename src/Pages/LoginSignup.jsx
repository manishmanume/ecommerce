import React from 'react'
import './Css/Login.css'
import { useNavigate } from 'react-router-dom'


const LoginSignup = () => {
  const navigate = useNavigate()
  function cont(){
    navigate('/')
  }
  return (
    <div className='loginsignup'>
      <div className="login-container">
        <h1>Sigh-Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Enter your Name..' />
          <input type="email" placeholder='Enter Your Email...' />
          <input type="Password" placeholder='Enter Your Password...' />
          <button onClick={cont}>Continue</button>
          <p className='Login-Signup'>Allready have an acount? <span>Login here</span></p>
          </div>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
          </div>
      </div>
    </div>
  )
}

export default LoginSignup