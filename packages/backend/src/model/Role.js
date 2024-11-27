import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    
    permissions: [{
        type: String,
        required: true
    }]
});

const Role = mongoose.model('Role', roleSchema);

export default Role;
