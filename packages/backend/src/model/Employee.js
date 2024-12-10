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
        type: String,
        unique: true
    },

    password: {
        required: true,
        type: String
    },

    jobTitle: {
        required: true,
        type: String
    },

    roleId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Role',
        required: true
    },

    employeeId: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;