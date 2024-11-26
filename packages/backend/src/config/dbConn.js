import mongoose from 'mongoose';

const connectToDB = async () => {
    try {
        const url = process.env.DB_URL;
        if (url) {
            await mongoose.connect(url);
            console.info('Database connected');
        }
    } catch (err) {
        console.error(err);
    }
};

export default connectToDB;