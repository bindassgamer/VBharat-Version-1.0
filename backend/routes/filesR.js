import express from 'express';
import { getFiles,uploadFile } from '../controllers/filesC.js';
import { requireSignin } from '../middlewares/authMW.js';
const router = express.Router();

router.get('/files',requireSignin, getFiles);
router.post('/files/upload', requireSignin, uploadFile);


export default router;