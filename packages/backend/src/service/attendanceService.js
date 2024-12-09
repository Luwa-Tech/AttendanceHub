import Attendance from "../model/Attendance.js";
import { NotFoundError, ExistingRecordError} from "../utils/errors.js";
// import { StatusService } from "./statusService.js";

export class AttendanceService {
    constructor() {
        this.attendance = Attendance;
        // this.statusService = new StatusService();
    }

    getAttendance = async (employeeId) => {
        const attendance = await this.attendance.find({ employeeId: employeeId });
        if (!attendance) {
            throw new NotFoundError(`No attendance records for employee with ID: ${employeeId}`);
        };

        return attendance;
    }

    getExistingCheckInRecord = async (existingRecord) => {
        const record = await this.attendance.findOne(existingRecord);
        return record;
    }

    checkInAttendance = async (employeeId) => {
        const checkInTime = new Date();
        const openingHour = 8;
        const closingHour = 16;

        const checkInHour = checkInTime.getHours();
        console.log(checkInHour);

        // constraint checkIn to only office hours
        if (checkInHour < openingHour || checkInHour > closingHour) {
            throw new ExistingRecordError('Check-out is only allowed between 8 AM and 4 PM');
        };

        // stop user employee from checking in multiple times
        const today = new Date();
        today.setHours(0, 0, 0, 0); //Set to start of the day

        // Check later
        const existingRecord = await this.getExistingCheckInRecord({
            employeeId: employeeId,
            checkInTime: { $gte: today }
        }).sort({ checkInTime: -1 });
        console.log(existingRecord);

        if (existingRecord) {
            throw new ExistingRecordError('Employee has already checked in');
        };

        // If user checkin hour is 2-3 hours later than opening hours - iterate later

        const checkInResults = await this.attendance.create({
            employeeId: employeeId,
            checkInTime: checkInTime,
        })

        return checkInResults;
    }

    checkOutAttendance = async (employeeId) => {
        const checkOutTime = new Date();
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const existingRecord = await this.getExistingCheckInRecord({
            employeeId: employeeId,
            checkInTime: { $gte: today }
        }).sort({ checkInTime: -1 });

        if (!existingRecord) {
            throw new ExistingRecordError('Employee has not checked in today');
        };

        existingRecord.checkOutTime = checkOutTime
        await existingRecord.save();

        return existingRecord;
    }
}