import { faker } from '@faker-js/faker';
import Employee from "../model/Employee.js";
import Status from "../model/Status.js";
import Attendance from "../model/Attendance.js";

const generateRandomAttendance = (employeeId, startDate, endDate, status) => {
    const attendanceRecords = [];
    let currentDate = new Date(startDate);

    while (currentDate <= new Date(endDate)) {
        const isPresent = faker.datatype.boolean();
        let statusId;

        if (isPresent) {
            statusId = status.find(status => status.name === 'Present');
            attendanceRecords.push({
                employeeId,
                statusId: statusId._id,
                checkInTime: faker.date.between({from: currentDate.setHours(8, 0, 0), to: currentDate.setHours(9, 0, 0)}),
                checkOutTime: faker.date.between({from: currentDate.setHours(15, 0, 0), to: currentDate.setHours(16, 0, 0)}), 
                createdAt: faker.date.between({from: currentDate.setHours(8, 0, 0), to: currentDate.setHours(9, 0, 0)}),
                updatedAt: faker.date.between({from: currentDate.setHours(15, 0, 0), to: currentDate.setHours(16, 0, 0)})      
            });
        }
        
        // else {
        //     statusId = status.filter(status => status.name === 'Absent');
        //     console.log(statusId)
        //     attendanceRecords.push({
        //         employeeId,
        //         statusId: statusId._id
        //     });
        // }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return attendanceRecords;
};

const seedAttendance = async () => {
    try {
        const startDate = '2024-12-01';
        const endDate = '2025-01-09';

        const status = await Status.find();
        const employees = await Employee.find();

        for (const employee of employees) {
            const attendanceRecords = generateRandomAttendance(employee._id, startDate, endDate, status);
            await Attendance.insertMany(attendanceRecords);
        }
    } catch (error) {
        console.error('Error seeding attendance data:', error);
    }
};

export default seedAttendance;