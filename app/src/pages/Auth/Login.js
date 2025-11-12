import React, { useState } from 'react'
import Layout from '../../Layout/Layout.js'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import '../../css/login.css';
import { useEffect } from 'react';
import { useAuth } from '../../context/auth';
import { Toaster } from 'react-hot-toast';

const Login = () => {
  const [emailOrMobile, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate("")
  const [auth, setAuth] = useAuth()
  const location = useLocation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`api/v1/auth/login`, { emailOrMobile, password })
      if (res.data.success) {
        toast.success(res.data.message);
        await setAuth({
          ...auth,
          user: res.data.user,
          // role:res.data.role,
          token: res.data.token
        })
        localStorage.setItem('auth', JSON.stringify(res.data))
        navigate(location.state|| `${res.data.user.role === 1 ? "/admin" : "/home-page"}`)
      }
      else
        toast.error(res.data.message)
    } 
    catch (error) {
      console.log(error)
      toast.error('Something went wrong')

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
    <Layout tittle='Login'>
      <div className="login-container">
        <h2>Login to SRB</h2>
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="login-form">
          {/* Email/Phone Field */}
          <div className="input-group">
            <label htmlFor="email">Email or Phone Number</label>
            <input type="text" id="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email or phone number" required />
          </div>
          {/* Password Field */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
          </div>
          {/* Submit Button */}
          <button type="submit" className="login-btn">Login</button>
          {/* Forgot Password Link */}
          <div className="forgot-password">
            {/* <a href="fpwd.html">Forgot Password?</a> */}
            <Link to="/forgot-pass">Forgot Password?</Link>
          </div>
        </form>
        {/* Register Link */}
        <p className="register-link">Don't have an account? <Link to="/register">Sign Up</Link></p>
        <Toaster/>
      </div>


    </Layout>
  )
}

export default Login
