import React, { useState } from 'react'
import '../../css/otp.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
const OtpVerify = () => {
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")
    const [newPass, setPass] = useState("")
    const navigate = useNavigate()

    const ChangePass = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`api/v1/auth/change_pass`, { email, otp, newPass })
            if (res.data.success) {
                toast.success(res.data.message)
                navigate("/")
            }
            else {
                toast.error(res.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error("Somthing went wrong")
        }

    }
    return (
        <div className="otp-container">
            <h2>Verify Your Email</h2>
            <p>Enter the OTP sent to your registered email address to continue.</p>
            < form onSubmit={ChangePass}>
                <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
                </div>
                <div className="otp-input-group">
                    <label htmlFor="otp">One-Time Password (OTP)</label>
                    <input type="otp" id="otp" name="otp" maxLength={6} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" required />
                </div>
                <div className="input-group">
                    <label htmlFor="new-password">New Password</label>
                    <input type="password" id="new-password" name="new-password" onChange={(e) => setPass(e.target.value)} placeholder="Enter your new password" required />                    </div>

                <button type="submit" className="submit-btn">Verify OTP</button>
            </form>
            <Toaster/>
        </div>

    )
}

export default OtpVerify
