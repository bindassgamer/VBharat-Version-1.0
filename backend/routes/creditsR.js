import express from 'express';
import { getCredits } from '../controllers/creditsC.js';

const router = express.Router();

router.get('/credits', getCredits);

export default router;