import mongoose from 'mongoose';

const offlineActivitySchema = new mongoose.Schema({
    offlineActivityName: {
        type: String,
        required: true,
    },
    pointsPerHour: {
        type: String,
        required: true,
    },
}, { timestamps: true });



const OfflineActivity = mongoose.model("OfflineActivity", offlineActivitySchema);

export default OfflineActivity;
