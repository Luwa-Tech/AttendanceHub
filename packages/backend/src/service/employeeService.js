import Employee from '../model/Employee.js';
import { NotFoundError, TokenExpirationError } from '../utils/errors.js';

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

    getOneByEmail = async (email) => {
        const employee = await this.checkEmail(email);
        if (!employee) {
            throw new NotFoundError(`Employee with email: ${email} not found`);
        };

        return employee;
    }

    getOneById = async (id) => {
        const employee = await this.employee.findOne({id: id}).exec();
        if (!employee) {
            throw new NotFoundError(`Employee with id:${id} is not found`);
        }
        return employee;
    }

    checkResetTokenExpiration = async (resetInfo) => {
        /*
            Finds and validates employee where resetPasswordExpires
            is not greater than current date and returns employee
            details if true
        */

        const employee = await this.employee.findOne(resetInfo);

        if (!employee) {
            throw new TokenExpirationError('Token has expired. Please re-authenticate.');
        }

        return employee // if token is not expired
    }

    create = async (employeeDetails) => {
        const newEmployee = await this.employee.create(employeeDetails);
        return newEmployee;
    }

    getAll = async () => {
        const employees = await this.employee.find({});
        if (!employees) {
            throw new NotFoundError('No employees found');
        }

        return employees;
    }
};

export default EmployeeService;