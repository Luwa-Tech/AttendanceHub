import Attendance from "../model/Attendance.js";
import { NotFoundError } from "../utils/errors.js";

export class AttendanceService {
    constructor() {
        this.attendance = Attendance;
    }
    
    getAttendance = async (employeeId) => {
        const attendance = await this.attendance.find({employeeId: employeeId});
        if (!attendance) {
            throw new NotFoundError(`No attendance records for employee with ID: ${employeeId}`);
        };

        return attendance;
    }
}