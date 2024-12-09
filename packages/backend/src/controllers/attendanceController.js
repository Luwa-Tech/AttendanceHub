import { AttendanceService } from "../service/attendanceService.js";

export class AttendanceController {
    constructor() {
        this.attendanceService = new AttendanceService();
    }

    checkIn = async (req, res) => {
        const newRecord = await this.attendanceService.checkInAttendance(employeeId);

        res.status(201).json({ message: 'Check-in successful', record: newRecord });
    }

    checkOut = async (req, res) => {
        const record = await this.attendanceService.checkOutAttendance(employeeId);

        res.status(200).json({ message: 'Check-out successful', record: record });
    }

    //getByDate
    //getByStatus
    //getAll
    //getCurrent
}