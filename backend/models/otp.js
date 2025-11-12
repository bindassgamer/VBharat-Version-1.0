import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: false, // Multiple OTPs for the same email (if allowed)
        },
        otp: {
            type: String,
            required: true,
        },
        expiresAt: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields
);

// Index for automatic deletion of expired OTPs
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model('Otp', otpSchema);
