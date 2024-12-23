import OfflineActivity from "../models/offlineActivityModel.js"


// Create a new Activity
export const addOfflineActivity = async (req, res) => {
    const { offlineActivityName, pointsPerHour} = req.body;
    try {
        const newOfflineActivity = new OfflineActivity({ offlineActivityName, pointsPerHour });
        await newOfflineActivity.save();
        res.status(201).json(newOfflineActivity);
        //  res.redirect('/');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};