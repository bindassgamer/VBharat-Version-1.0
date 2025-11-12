import userModel from "../models/userModel.js";

export const updateProfileController = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await userModel.findByIdAndUpdate(req.user._id, { name, email }, { new: true });
    res.status(200).send({
      success: true,
      user,
      message: "Profile updated successfully",
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

export const changePasswordController = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const user = await userModel.findById(req.user._id);
    if (!user || !(await user.comparePassword(currentPassword))) {
      return res.status(400).send({
        success: false,
        message: "Current password is incorrect",
      });
    }
    user.password = newPassword;
    await user.save();
    res.status(200).send({
      success: true,
      message: "Password changed successfully",
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

export const updateNotificationPreferencesController = async (req, res) => {
  try {
    const { emailNotifications, smsNotifications } = req.body;
    const user = await userModel.findByIdAndUpdate(req.user._id, { emailNotifications, smsNotifications }, { new: true });
    res.status(200).send({
      success: true,
      user,
      message: "Notification preferences updated successfully",
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

export const updateThemeController = async (req, res) => {
  try {
    const { theme } = req.body;
    const user = await userModel.findByIdAndUpdate(req.user._id, { theme }, { new: true });
    res.status(200).send({
      success: true,
      user,
      message: "Theme updated successfully",
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
