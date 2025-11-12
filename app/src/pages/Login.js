import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../pages/login.module.css';
import Layout from '../Layout/Layout.js';
import { useState } from 'react';
import { useAuth } from '../context/auth.js';

const Login = () => {
  const [emailOrMobile, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [auth, setAuth] = useAuth()

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
  return (
    <div>
      <Layout>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>V</title>
        <link rel="stylesheet" href="login.css" />
        {/* Navbar */}

        {/* Login Form Section */}
        <div className="container">
          <div className="login_box" id="login-box">
            <h2>Login</h2>
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
            <Toaster />
          </div>
        </div >
      </Layout >

    </div >

  );
};

export default Login;