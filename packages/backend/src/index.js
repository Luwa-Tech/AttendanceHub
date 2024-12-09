import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import connectToDB from './config/dbConn.js';
import cookieParser from 'cookie-parser';
import authRoute from './routes/authRoute.js';
import employeeRoute from './routes/employeeRoute.js';
import globalErrorHandler from './middleware/globalErrorHandler.js';
import attendanceRoute from './routes/attendanceRoute.js';

const server = express();
const PORT = process.env.PORT;

connectToDB();

server.use(cors());
server.use(cookieParser());
server.use(express.static("public"));
server.use(express.json());

server.use('/', authRoute);
server.use('/api/v1/employee/', employeeRoute);
server.use('/api/v1/employee/', attendanceRoute);

//server.use(globalErrorHandler);

mongoose.connection.once("open", () => {
    server.listen(process.env.PORT, () => {
        console.log('Connecting..');
        console.log(`Server is listening on PORT: ${PORT}`);
    })
})

// TODO:
// Review features
// Implement db seed - DONE
// Test and debug features
// Plan client