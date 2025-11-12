import mongoose from "mongoose";
// 0=user
// 1=Admin
// 2=Organization
// 3=Manager
// 4=Employee


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile_no: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: false,
    },
    profilePic: {
      type: String,
      default: "",
    },
    notifications: {
      type: [String],
      default: [],
    },
    emailNotifications: {
      type: Boolean,
      default: true,
    },
    smsNotifications: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: "light",
    },
  },
  { timestamps: true }
);


export default mongoose.model("users", userSchema);