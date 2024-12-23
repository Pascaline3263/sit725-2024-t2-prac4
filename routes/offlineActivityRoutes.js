import express from 'express';
import { addOfflineActivity } from '../controllers/offlineActivityController.js';
const router = express.Router();


router.post('/offlineactivity', addOfflineActivity);

export default router;