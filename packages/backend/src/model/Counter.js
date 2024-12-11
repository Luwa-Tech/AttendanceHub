import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    sequence_value: {
        type: Number,
        required: true
    },
});

export const Counter = mongoose.model('Counter', counterSchema);

// Function to get the next ID
export const getNextSequenceValue = async (sequenceName) => {
    const counter = await Counter.findOneAndUpdate(
        { id: sequenceName },
        { $inc: { sequence_value: 1 } },
        { new: true, upsert: true } // Create document if it doesn't exist
    );

    return counter.sequence_value;
};