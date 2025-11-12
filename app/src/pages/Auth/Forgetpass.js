import React, { useState } from 'react'
import '../../css/fpwd.css'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
const ChangePass = () => {
    const [email, setEmail] = useState("")
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);
        try {
            const res = await axios.post(`api/v1/auth/forgot_pass`, { email })
            if (res && res.data.success) {
                toast.success(res.data.message)
                navigate("/otp")
            }
            else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        }
    }


    return (

        <div className="forgot-password-container">
            <h2>Forgot Your Password?</h2>
            <p>Enter your email address or username below, and we'll send you a link to reset your password.</p>
            <form onSubmit={handleSubmit} >
                <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                </div>
                {/* go to otp page */}
                <button id="submitButton" className="submit-btn">
                    {loading ? (<><span
                        id="spinner"
                        className="spinner-border spinner-border-sm me-2 d-none"
                        aria-hidden="true"
                        color='red'
                    ></span>Loading.....</>) : (<>Send Otp</>)}
                    
                </button>

            </form>
            <p className="back-to-login">
                Remember your password? <Link to='/'>Log in here!!</Link>
            </p>
            <Toaster/>
        </div>


    )
}

export default ChangePass
