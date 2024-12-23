import Child from "../models/childModel.js"


// Create a new child
export const addChild = async (req, res) => {
    const { childName, dailyAllowance, dailyUsage, valueOfScreenTime} = req.body;
    try {
        const newChild = new Child({ childName, dailyAllowance, dailyUsage, valueOfScreenTime });
        await newChild.save();
        res.status(201).json(newChild);
        //  res.redirect('/');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};