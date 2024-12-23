import express from 'express';
import { addChild } from '../controllers/childController.js';
const router = express.Router();


router.post('/child', addChild);

export default router;