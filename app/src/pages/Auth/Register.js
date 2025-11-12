import React, { useState } from 'react'
import Layout from '../../Layout/Layout.js'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../css/signup.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile_no, setMod_no] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_password, setconfirm_Password] = useState("")
  const [ABC_ID, setABC] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`/api/v1/auth/register`, { name, email,mobile_no, password ,confirm_password,ABC_ID})
      if (res && res.data.success) {
        toast.success(res.data.message)
        setTimeout(() => {
          navigate('/')
        }, 3000);
      }
      else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('Someting went wrong')
    }
  }

  useEffect(() => {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (menuToggle && navbar) {
      menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
      });

      // Cleanup event listener on component unmount
      return () => {
        menuToggle.removeEventListener("click", () => {
          navbar.classList.toggle("active");
        });
      };
    }
  }, []);

  return (
    <Layout tittle='SignUp'>

      <div className="signup-container">
        <h2>Create Your Account</h2>
        <p>Fill in the details below to create a new account.</p>
        {/* Signup Form */}
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="input-group">
            <label htmlFor="full-name">Full Name</label>
            <input type="text" id="full-name" name="full-name" onChange={(e)=> setName(e.target.value)}   placeholder="Enter your full name" required />
          </div>
          {/* Email Address */}
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email" required />
          </div>
          {/* Phone Number */}
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" maxLength={10} onChange={(e)=> setMod_no(e.target.value)} placeholder="Enter your phone number" required />
          </div>
          {/* Password */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Create a password" required />
          </div>
          {/* Confirm Password */}
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password"  onChange={(e)=> setconfirm_Password(e.target.value)}   placeholder="Confirm your password" required />
          </div>
          {/* Organization */}
          <div className="input-group">
            <label htmlFor="abc">ABC ID</label>
            <input type="number" id="organization" name="organization" onChange={(e) => setABC(e.target.value)} placeholder="Enter your ABC_ID" required />
          </div>
          

          {/* Signup Button */}
          <button className="submit-btn" type="submit">Sign Up</button>
        </form>
        <p className="login-link">Already have an account? <Link to="/">Sign Up</Link></p>
        <Toaster/>
      </div>
    </Layout>

  )
}

export default Register
