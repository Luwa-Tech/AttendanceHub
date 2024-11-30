import Employee from '../model/Employee';
import { NotFoundError } from '../utils/errors';

class EmployeeService {
    constructor () {
        this.employee = Employee;
    }

    checkEmail = async (email) => {
        /* 
            To verify if an email is already in use by another employee:
        */
        const employee = await this.employee.findOne({email: email}).exec();
        return employee;
    }

    getEmployeeByEmail = async (email) => {
        const employee = await this.checkEmail(email);
        if (!employee) {
            throw new NotFoundError(`Employee with email: ${email} not found`);
        };

        return employee;
    }

    getEmployeeById = async (id) => {
        const employee = await this.employee.findOne({id: id}).exec();
        if (!employee) {
            throw new NotFoundError(`Employee with id:${id} is not found`);
        }
        return employee;
    }

    checkEmployeeResetTokenExpiration = async (resetInfo) => {
        /*
            Finds and validates employee where resetPasswordExpires
            is not greater than current date and returns employee
            details if true
        */

        const employee = await this.employee.findOne(resetInfo);

        if (!employee) {
            // throw a token has expired error
        }

        return employee // if token is not expired
    }

    createNewEmployee = async (employeeDetails) => {
        const newEmployee = await this.employee.create(employeeDetails);
        return newEmployee;
    }
};

export default EmployeeService;