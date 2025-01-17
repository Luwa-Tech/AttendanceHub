import { AttendanceService } from "../service/attendanceService.js";

export class AttendanceController {
    constructor() {
        this.attendanceService = new AttendanceService();
    }

    checkIn = async (req, res) => {
        const employeeId = req.user.id;
        const newRecord = await this.attendanceService.checkInAttendance(employeeId);

        res.status(201).json({ message: 'Check-in successful', record: newRecord });
    }

    checkOut = async (req, res) => {
        const employeeId = req.user.id;
        const updatedRecord = await this.attendanceService.checkOutAttendance(employeeId);

        res.status(200).json({ message: 'Check-out successful', record: updatedRecord });
    }

    getExistingRecord = async (req, res) => {
        const employeeId = req.user.id;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const record = await this.attendanceService.getExistingRecord({
            employeeId: employeeId,
            checkInTime: { $gte: today }
        });

        res.status(200).json(record);
    }

    getCurrent = async (req, res) => {
        const result = await this.attendanceService.getCurrentDayAttendance();
        res.status(200).send(result);
    }

    getByDate = async (req, res) => {
        const { date } = req.query;
        const result = await this.attendanceService.filterAttendanceByDate(date);
        res.status(200).json(result)
    }
}