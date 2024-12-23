import mongoose from 'mongoose';

const childSchema = new mongoose.Schema({
    childName: {
        type: String,
    },
    dailyAllowance: {
        type: String,
    },
    dailyUsage: {
        type: String,
    },
    valueOfScreenTime: {
        type: String,
    },
}, { timestamps: true });



const Child = mongoose.model("Child", childSchema);

export default Child;
