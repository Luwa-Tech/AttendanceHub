import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import connectToDB from './config/dbConn.js';
import cookieParser from 'cookie-parser';
import globalErrorHandler from './middleware.js/globalErrorHandler.js';

const server = express();
const PORT = process.env.PORT;

connectToDB();

server.use(cors());
server.use(cookieParser());
server.use(express.static("public"));
server.use(express.json());


server.use(globalErrorHandler);

mongoose.connection.once("open", () => {
    server.listen(process.env.PORT, () => {
        console.log('Please wait..');
        console.log(`Server is listening on PORT: ${PORT}`);
    })
})