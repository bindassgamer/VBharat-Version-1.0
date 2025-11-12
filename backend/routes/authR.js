import express from 'express';
import fileUpload from 'express-fileupload';
import { registerController, loginController, testController, sendOtp, verifyOtp, getProfileController, updateProfileController } from '../controllers/authC.js';
import { isAdmin, requireSignin,isOrganizationBanned } from '../middlewares/authMW.js';

const router = express.Router();

router.use(fileUpload());

router.post('/register', registerController);
router.post('/login', loginController);

// Forgot pass
router.post('/forgot_pass', sendOtp);
router.post('/change_pass', verifyOtp);

router.get('/test', requireSignin, isAdmin,isOrganizationBanned, testController);

// protect route-login
router.get("/user-auth", requireSignin, (req, res) => {
  res.status(200).send({ ok: true });
});
// protected route-admin
router.get("/admin-auth", requireSignin, isAdmin,isOrganizationBanned, (req, res) => {
  res.status(200).send({ ok: true });
});

// profile route
router.get("/profile", requireSignin, getProfileController,isOrganizationBanned);
router.post("/profile/update", requireSignin, updateProfileController,isOrganizationBanned);

export default router;