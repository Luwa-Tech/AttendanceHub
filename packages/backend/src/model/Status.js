import mongoose from 'mongoose';

const statusSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    }
});

const Status = mongoose.model('Status', statusSchema);

export default Status;