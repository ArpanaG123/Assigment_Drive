import React from 'react'
import { useState } from 'react';
import './Register.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const[user,setUser] = useState({
        name : "",
        username:"",
        mobile:"",
        email:"",
        password:"",
        state:"",
        city:"",
        comment:""
    })

    const handleChange = (e) => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const register = () => {
        const {name,username,mobile,email,password,state,city,comment} = user;

        if(name && username && mobile && email && password && state && city && comment){
            axios.post("http://localhost:9002/register",user)
            .then(res =>  alert(res.data.message));
            navigate("/login")
        }else{
            alert("Invalid Input")
        }
    }

  return (
    <div className='outerLayer-Register'>
        <div className='Register-Page'>
            <div>
                <img src = "https://colorlib.com/etc/regform/colorlib-regform-20/images/registration-form-4.jpg" alt = " " />
            </div>
            <div>
            <h1 className='signup-heading'>Sign Up</h1>
                <label className='label'>Enter Your Name</label><br/>
                <input type="text" name = "name" value={user.name}  className='name' onChange={handleChange} /><br/>
                <label className='label'>Enter Your User Name</label><br/>
                <input type="text" name = "username" value={user.username}  className='name' onChange={handleChange}  /><br/>
                <label className='label'>Enter Your Mobile Number</label><br/>
                <input type="number" name = "mobile" value={user.mobile} className='name' onChange={handleChange}  /><br/>
                <label className='label'>Enter your Email Address</label><br/>
                <input type="email" name = "email" value={user.email} className='name' onChange={handleChange}  /><br/>
                <label className='label'>Enter your Password</label><br/>
                <input type="password" name = "password"  placeholder='Enter Your Password' value={user.password} className='name' onChange={handleChange}  /><br/>
                <select name="state" id="states" value={user.state} className='nameOption' onChange={handleChange}  >
                    <option value="select">Select State</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharastra">Maharastra</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Bihar">Bihar</option>
                </select>
                <br/>
                <select name="city" id="cities" value={user.city} className='nameOption' onChange={handleChange} >
                    <option value="select">Select City</option>
                    <option value="Bhopal">Jabalpur</option>
                    <option value="Pune">Pune</option>
                    <option value="tamil">Tamil</option>
                    <option value="patna">Patna</option>
                </select><br/>
                <label className='label'>Description</label><br/>
                <textarea rows="4" cols="40" name="comment" value={user.comment} className='nameDesc' onChange={handleChange} >Description</textarea><br/>
                <div className='bottom'>
                    <button type="submit" className='sinupButton' onClick={register}>Signup</button>
                    <p className='alreadylogin-message'>Already Have Account?</p>
                    <div  className='naivation-login' onClick={() => navigate("/login")}>Login</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register;