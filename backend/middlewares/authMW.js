import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js';

export const requireSignin = async (req, res, next) => {
    try {
        const decode =jwt.verify(
            req.headers.authorization,
            process.env.jwt_secret
        );
        req.user =decode;
        next();
       } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: "Invalid or expired token",
       });
    }

};

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized Access",
            });

        } else {
            next();
        }
    } catch (error) {
        console.log(error)
        res.status(505).send({
            success: false,
            message: "Error in admin middleware",
        })

    }
}

export const isOrganizationBanned = async (req, res, next) => {
    try {
        const user1 = await userModel.findById(req.user._id).populate("organization");
        if (user1.organization.banned) {
            return res.status(403).json({ success: false, message: "Organization is banned" });
        }
        else {
            next();
        }
    } catch (error) {
        console.error("Error in isOrganizationBanned middleware:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};