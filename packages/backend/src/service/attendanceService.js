import Attendance from "../model/Attendance.js";
import { NotFoundError, ExistingRecordError } from "../utils/errors.js";
// import { StatusService } from "./statusService.js";
// import { getLocalTime } from "../utils/localTime.js";

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

    getExistingRecord = async (existingRecord) => {
        const record = await this.attendance.findOne(existingRecord);

        if (!record) {
            throw new NotFoundError('User has not check-in for today');
        }
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
            throw new ExistingRecordError('Check-in is only allowed between 8 AM and 4 PM');
        };

        // stop user employee from checking in multiple times
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set to start of the day

        const existingRecord = await this.attendance.findOne({
            employeeId: employeeId,
            checkInTime: { $gte: today }
        });
        console.log(existingRecord);

        if (existingRecord) {
            throw new ExistingRecordError('Employee has already checked in for today');
        };

        // If user checkin hour is 2-3 hours later than opening hours - iterate later

        const newCheckInRecord = await this.attendance.create({
            employeeId: employeeId,
            checkInTime: checkInTime,
        })

        return newCheckInRecord;
    }

    checkOutAttendance = async (employeeId) => {
        const checkOutTime = new Date();
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const existingRecord = await this.attendance.findOne({
            employeeId: employeeId,
            checkInTime: { $gte: today }
        });

        if (!existingRecord) {
            throw new ExistingRecordError(`No check-in found for employee ${employeeId} on ${today.toDateString()}`);
        }

        if (existingRecord.checkOutTime) {
            throw new ExistingRecordError(`Employee ${employeeId} has already checked out today`);
        }

        // Update the record with the check-out time
        existingRecord.checkOutTime = checkOutTime
        await existingRecord.save();

        return existingRecord;
    }
}