import  express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from "url";
import { connectDB } from "./config/database.js";
import childRoutes from "./routes/childRoutes.js";
import offlineActivityRoutes from "./routes/offlineActivityRoutes.js";
import rootRoutes from "./routes/root.js";




dotenv.config()
const app = express()
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to Database
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '/public')))

// Routes
app.use('/', rootRoutes)
app.use('/childapi', childRoutes);
app.use('/offlineactivityapi', offlineActivityRoutes);
app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
