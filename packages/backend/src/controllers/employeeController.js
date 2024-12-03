import EmployeeService from "../service/employeeService.js";
import RoleService from "../service/roleService.js";
import { AttendanceService } from "../service/attendanceService.js";

export class EmployeeController {
    constructor() {
        this.employeeService = new EmployeeService();
        this.attendanceService = new AttendanceService();
    }

    getEmployee = async (req, res) => {
        const id = req.params.userId;
        const employee = await this.employeeService.findOne({_id: id});
        res.status(200).json({employee: employee});
    }

    getAllEmployees = async (req, res) => {
        const employees = await this.employeeService.getAll();
        res.status(200).send(employees);
    }
}