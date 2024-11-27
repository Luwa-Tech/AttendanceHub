import mongoose from 'mongoose';

const employeeSchema  = new mongoose.Schema({
    firstname: {
        required: true,
        type: String
    },

    lastname: {
        required: true,
        type: String
    },

    email: {
        required: true,
        type: String
    },

    password: {
        required: true,
        type: String
    },

    jobRole: {
        required: true,
        type: String
    },

    role: {
        required: true,
        type: [String],
        default: ['worker']
    },

    createdAt: {
        default: Date.now,
        type: Date
    },

    updatedAt: {
        default: Date.now,
        type: Date
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;