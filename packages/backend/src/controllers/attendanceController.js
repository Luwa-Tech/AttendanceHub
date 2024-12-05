import { AttendanceService } from "../service/attendanceService.js";
import { matchedData } from 'express-validator';

export class AttendanceController {
    constructor() {
        this.attendanceService = new AttendanceService();
    }

    checkIn = async (req, res) => {
        const data = matchedData(req);
        const newRecord = await this.attendanceService.checkInAttendance(data.checkInTime, employeeId);

        res.status(201).json({ message: 'Check-in successful', record: newRecord });
    }

    checkOut = async (req, res) => {
        const data = matchedData(req);
        const record = await this.attendanceService.checkOutAttendance(data.checkOutTime, employeeId);

        res.status(200).json({ message: 'Check-out successful', record: record });        
    }

    //getByDate
    //getByStatus
    //getAll
    //getCurrent
}