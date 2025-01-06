import Attendance from "../model/Attendance.js";
import { NotFoundError, ExistingRecordError } from "../utils/errors.js";
import { StatusService } from "./statusService.js";
import EmployeeService from "./employeeService.js";
// import { getLocalTime } from "../utils/localTime.js";

export class AttendanceService {
    constructor() {
        this.attendance = Attendance;
        this.statusService = new StatusService();
        this.employeeService = new EmployeeService();
    }

    getAttendance = async (employeeId) => {
        const attendance = await this.attendance.find({ employeeId: employeeId });
        if (attendance.length === 0) {
            throw new NotFoundError(`No attendance records for employee with ID: ${employeeId}`, 204);
        };

        return attendance;
    }

    getExistingRecord = async (existingRecord) => {
        const record = await this.attendance.findOne(existingRecord);

        if (!record) {
            throw new NotFoundError('User has not check-in for today', 204);
        }
        return record;
    }

    checkInAttendance = async (employeeId) => {
        const checkInTime = new Date();

        const openingHour = 8;
        const closingHour = 16;

        const checkInHour = checkInTime.getHours();

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

        if (existingRecord) {
            throw new ExistingRecordError('Employee has already checked in for today');
        };

        // assign 'present' status to employee after checkin
        const status = await this.statusService.getStatus({name: 'Present'});

        const newCheckInRecord = await this.attendance.create({
            employeeId: employeeId,
            statusId: status._id,
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

    getCurrentDayAttendance = async () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const endOfDay = new Date(today);
        endOfDay.setHours(23, 59, 59, 999);

        const attendanceRecords = await this.attendance.find({
            checkInTime: { $gte: today, $lte: endOfDay }
        }).populate('employeeId statusId');

        if (attendanceRecords.length === 0) {
            throw new NotFoundError('No attendancee records for today', 204);
        }

        const allEmployees = await this.employeeService.getAll();

        const result = this.structureRecord(attendanceRecords, allEmployees, today);
        return result;
    }

    filterAttendanceByDate = async (date) => {
        const filter = {};
        if (date) {
            const startOfDay = new Date(date);
            startOfDay.setHours(0, 0, 0, 0);
            const endOfDay = new Date(startOfDay);
            endOfDay.setHours(23, 59, 59, 999);
            filter.checkInTime = { $gte: startOfDay, $lte: endOfDay };
        } 

        const attendanceRecords = await this.attendance.find(filter).populate('employeeId statusId');
        
        if (attendanceRecords.length === 0) {
            throw new NotFoundError('No attendancee records for specified date', 204);
        }

        const allEmployees = await this.employeeService.getAll();

        const result = this.structureRecord(attendanceRecords, allEmployees, date);
        return result;
    }

    structureRecord = (attendanceRecords, allEmployees, date) => {
        // Create new Map and assign each employee with their corresponding record
        const attendanceMap = new Map();
        attendanceRecords.forEach(record => {
            attendanceMap.set(record.employeeId._id.toString(), record);
        });

        // Define result data structure based on if employee has attendance record or not
        const result = allEmployees.map(employee => {
            const record = attendanceMap.get(employee._id.toString());
            if (record) {
                return {
                    employeeDeptId: employee.employeeId,
                    name: `${employee.firstname} ${employee.lastname}`,
                    jobTitle: employee.jobTitle,
                    checkIn: record.checkInTime,
                    checkOut: record.checkOutTime,
                    status: record.statusId.name,
                    date: record.createdAt
                };
            } else {
                return {
                    employeeDeptId: employee.employeeId,
                    name: `${employee.firstname} ${employee.lastname}`,
                    jobTitle: employee.jobTitle,
                    checkIn: null,
                    checkOut: null,
                    status: 'Absent',
                    date: new Date(date)
                };
            }
        });

        return result;
    }

}