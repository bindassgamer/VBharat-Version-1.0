import userModel from "../models/userModel.js";
import Organization from "../models/organizationM.js";
import { comparePassword, hashPassword } from './../helpers/authH.js';
import jwt from 'jsonwebtoken';
import Otp from "../models/otp.js"
import nodemailer from "nodemailer"
import otpGenerator from "otp-generator"
import slugify from "slugify";
import { nanoid } from "nanoid";

export const registerController = async (req, res) => {
    try {
        const { name, email, mobile_no, password, confirm_password, organization } = req.body;

        // Input validation
        if (!name || !email || !mobile_no || !password || !confirm_password || !organization) {
            return res.status(400).send({
                success: false,
                message: "All fields are required",
            });
        }

        if (password !== confirm_password) {
            return res.status(400).send({
                success: false,
                message: "Passwords do not match",
            });
        }

        // Check if user already exists (email or mobile number)
        const existingUser = await userModel.findOne({
            $or: [{ email }, { mobile_no }],
        });
        if (existingUser) {
            return res.status(409).send({
                success: false,
                message: "User already registered. Please login.",
            });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Check if organization already exists
        const existingOrganization = await Organization.findOne({ name: organization });
        if (existingOrganization) {
            return res.status(406).send({
                success: false,
                message: "Organization already exists.",
            });
        }

        // Create the organization with a slug
        const slugifiedName = slugify(organization, { lower: true, strict: true }).replace(/-/g, "_");
        const newOrganization = new Organization({
            name: organization,
            slug: `${slugifiedName}_${nanoid(10)}`,
        });
        await newOrganization.save();

        console.log(newOrganization)
        // Save user
        const user = await new userModel({
            name,
            email,
            mobile_no,
            password: hashedPassword,
            organization: newOrganization._id,
        }).save();

        res.status(201).send({
            success: true,
            message: "User registered successfully and organization linked.",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                mobile_no: user.mobile_no,
                organization: user.organization,
            },
            organization: newOrganization,
        });
    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).send({
            success: false,
            message: "Error during registration",
            error,
        });
    }
};


export const loginController = async (req, res) => {
    try {
        const { emailOrMobile, password } = req.body;

        // Validate input
        if (!emailOrMobile || !password) {
            return res.status(400).send({
                success: false,
                message: "Email/Mobile number and password are required",
            });
        }

        // Find user by email or mobile number
        const user = await userModel.findOne({
            $or: [{ email: emailOrMobile }, { mobile_no: emailOrMobile }],
        });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        // Compare passwords
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: "Invalid password",
            });
        }

        // Generate JWT token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.status(200).send({
            success: true,
            message: "Login successful!!Redirecting to Login Page",
            user: {
                name: user.name,
                email: user.email,
                mobile_no: user.mobile_no,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).send({
            success: false,
            message: "An error occurred during login",
            error,
        });
    }
};


export const testController = (req, res) => {
    try {
        res.send("Protected Routes");
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
};



export const sendOtp = async (req, res) => {
    try {
        const { email } = req.body;

        // Validate input
        if (!email) {
            return res.status(400).send({
                success: false,
                message: "Email is required",
            });
        }

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        // Generate OTP
        const otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            specialChars: false,
        });


        // Hash OTP
        const hashedOtp = await hashPassword(otp)
        const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5-minute expiration

        // Save OTP to database
        const otpgen = await new Otp({
            email,
            otp: hashedOtp, expiresAt
        }).save();

        // res.status(201).send({
        //     success: true,
        //     message: "User registered successfully.",
        //     Otp: {
        //         id: user._id,
        //         name: user.name,
        //         email: user.email,
        //         mobile_no: user.mobile_no,
        //     },
        // });

        // Send OTP email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.Email_user,
                pass: process.env.Email_pass,
            }
        })
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Your Login OTP for GrabHUB",
            text: `Your OTP for login is: ${otp}. It is valid for 5 minutes.`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).send({
            success: true,
            message: "OTP sent successfully to your registered email.",
        });
    } catch (error) {
        console.error("Error sending OTP:", error);
        res.status(500).send({
            success: false,
            message: "Failed to send OTP",
            error,
        });
    }
};


export const verifyOtp = async (req, res) => {
    try {
        const { email, otp, newPass } = req.body;

        // Validate input
        if (!email || !otp || !newPass) {
            return res.status(401).send({
                success: false,
                message: "Email, OTP, and new password are required"
            });
        }

        // Check if the user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(402).send({
                success: false,
                message: "User not found! Please register."
            });
        }

        // Check if the OTP exists in the database
        const otpRecord = await Otp.findOne({ email });
        if (!otpRecord) {
            return res.status(403).send({
                success: false,
                message: "OTP not found or expired"
            });
        }

        // Compare OTP entered by the user with the hashed OTP in the database
        // const hashotp= await hashPassword(otp)
        const isOtpValid = await comparePassword(otp, otpRecord.otp);
        if (!isOtpValid) {
            return res.status(404).send({
                success: false,
                message: "Invalid OTP"
            });
        }

        // Hash the new password and update it in the user record
        const hashedPassword = await hashPassword(newPass)
        await userModel.findByIdAndUpdate(user._id, { password: hashedPassword });

        // Delete OTP record after successful password update
        await Otp.deleteOne({ email });

        // Send success response
        res.status(200).send({
            success: true,
            message: "Password reset successfully."
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Failed to reset password",
            error
        });
    }
};

export const getProfileController = async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id).select("-password");
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }
        res.status(200).send({
            success: true,
            user,
            message: "Profile fetched successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Internal server error",
        });
    }
};

export const updateProfileController = async (req, res) => {
    try {
        const { name, email, mobile_no } = req.body;
        const profilePic = req.files ? req.files.profilePic : null;

        const user = await userModel.findById(req.user._id);

        if (name) user.name = name;
        if (email) user.email = email;
        if (mobile_no) user.mobile_no = mobile_no;

        if (profilePic) {
            const profilePicPath = `uploads/${req.user._id}_profilePic.jpg`;
            profilePic.mv(profilePicPath, (err) => {
                if (err) {
                    console.error("Error uploading profile picture:", err);
                    return res.status(500).send({
                        success: false,
                        message: "Error uploading profile picture",
                        error: err,
                    });
                }
            });
            user.profilePic = profilePicPath;
        }

        await user.save();

        res.status(200).send({
            success: true,
            message: "Profile updated successfully",
            user,
        });
    } catch (error) {
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0];
            const value = error.keyValue[field];
            return res.status(400).send({
                success: false,
                message: `Duplicate value for ${field}: ${value}`,
            });
        }
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Internal server error",
        });
    }
};



