import express from "express";
import {
  updateProfileController,
  changePasswordController,
  updateNotificationPreferencesController,
  updateThemeController,
} from "../controllers/settingsC.js";
import { requireSignin,isOrganizationBanned } from "../middlewares/authMW.js";

const router = express.Router();

router.put("/update-profile", requireSignin,isOrganizationBanned, updateProfileController);
router.put("/change-password", requireSignin,isOrganizationBanned, changePasswordController);
router.put("/update-notification-preferences", requireSignin,isOrganizationBanned, updateNotificationPreferencesController);
router.put("/update-theme",requireSignin,isOrganizationBanned, updateThemeController);

export default router;
