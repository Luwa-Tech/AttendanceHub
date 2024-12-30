import 'dotenv/config';
import 'express-async-errors';
import ngrok from '@ngrok/ngrok';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import connectToDB from './config/dbConn.js';
import cookieParser from 'cookie-parser';
import authRoute from './routes/authRoute.js';
import employeeRoute from './routes/employeeRoute.js';
import globalErrorHandler from './middleware/globalErrorHandler.js';
import attendanceRoute from './routes/attendanceRoute.js';
import {corsOptions} from './config/corsOptions.js';

const server = express();
const PORT = process.env.PORT;

connectToDB();

server.use(cors(corsOptions));
server.use(cookieParser());
server.use(express.static("public"));
server.use(express.json());

server.use('/', authRoute);
server.use('/api/v1/employee/', employeeRoute);
server.use('/api/v1/attendance/', attendanceRoute);

server.use(globalErrorHandler);

mongoose.connection.once("open", () => {
    server.listen(PORT, () => {
        console.log('Connecting..');
        console.log(`Server is listening on PORT: ${PORT}`);
    })
});

// for development purposes
// ngrok.connect({ addr: PORT, authtoken_from_env: true })
// 	.then(listener => console.log(`Ingress established at: ${listener.url()}`));