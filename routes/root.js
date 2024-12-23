import  express from "express";
import path from 'path';
import { fileURLToPath } from "url";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/child',function(req,res){
    res.sendFile(path.join(__dirname, '..', 'views', 'child.html'));
});
router.get('/offlineActivity',function(req,res){
    res.sendFile(path.join(__dirname, '..', 'views', 'offlineActivity.html'));
});
router.get('/timer',function(req,res){
    res.sendFile(path.join(__dirname, '..', 'views', 'timer.html'));
});


export default router