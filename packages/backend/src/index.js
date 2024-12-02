import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import connectToDB from './config/dbConn.js';
import cookieParser from 'cookie-parser';
import authRoute from './routes/authRoute.js'
import globalErrorHandler from './middleware/globalErrorHandler.js';

const server = express();
const PORT = process.env.PORT;

connectToDB();

server.use(cors());
server.use(cookieParser());
server.use(express.static("public"));
server.use(express.json());

server.use('/', authRoute);

server.use(globalErrorHandler);

mongoose.connection.once("open", () => {
    server.listen(process.env.PORT, () => {
        console.log('Connecting..');
        console.log(`Server is listening on PORT: ${PORT}`);
    })
})