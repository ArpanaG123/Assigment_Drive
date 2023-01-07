import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom'


const Login = ({setLoginUser}) => {
  const navigate = useNavigate()

  const[user,setUser] = useState({
    email:" ",
    password:" ",
})

const handleChange = (e) => {
    const {name,value} = e.target
    setUser({
        ...user,
        [name]:value
    })
}

const login = () => {
  axios.post("https://thankful-tan-woolens.cyclic.app/login",user)
  .then(res => {
    alert(res.data.message)
    setLoginUser(res.data.user)
    navigate("/")
  })

}

  return (
    <div className='outerLayer-Login'>
      <div className='login-Page'>
        <div>
          <img src = "https://colorlib.com/etc/regform/colorlib-regform-20/images/registration-form-4.jpg" alt = " " />
        </div>
        <div>
          <h1 className='login-heading'>Login</h1>
          <label className='labelLogin'>Enter Your Email Address</label><br/>
          <input type="email" name = "email" value={user.email}  className='nameLogin' onChange={handleChange} /><br/>
          <label className='labelLogin'>Enter your Password</label><br/>
          <input type="password" name = "password" value = {user.password} className='nameLogin'  onChange={handleChange} /><br/>
          <div className='bottom'>
            <button type="submit" className='loginButton' onClick={login}>Login</button>
            <p className='alreadylogin-message1'>NewUser?</p>
            <div className='naivation-register' onClick={() => navigate("/register")}>Register</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login