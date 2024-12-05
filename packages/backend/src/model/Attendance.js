import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },

    // statusId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Status',
    //     required: true
    // },

    checkInTime: {
        type: Date,
        required: false
    },

    checkOutTime: {
        type: Date,
        required: false
    },

    // createdAt: {
    //     default: Date.now,
    //     type: Date
    // },

    // updatedAt: {
    //     default: Date.now,
    //     type: Date
    // }
}, {timestamps: true});

const Attendance = mongoose.model('Attendance', attendanceSchema);

export default Attendance;