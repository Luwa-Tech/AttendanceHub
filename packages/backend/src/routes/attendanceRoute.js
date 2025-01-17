import express from 'express';
const router = express.Router();
import { AttendanceController } from '../controllers/attendanceController.js';
import { authorizeUser } from '../middleware/authorize.js';

const attendanceController = new AttendanceController();

router.get('/check', authorizeUser, attendanceController.getExistingRecord)
router.get('/current', authorizeUser, attendanceController.getCurrent)
router.get('/filter-by-date', authorizeUser, attendanceController.getByDate)
router.post('/check-in', authorizeUser, attendanceController.checkIn)
router.put('/check-out', authorizeUser, attendanceController.checkOut)


export default router;