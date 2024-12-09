import Employee from "../model/Employee.js";
import { employees } from "../seed.data.js";
import Role from "../model/Role.js";

/*
    For a robust/flexible employees seeding, use Faker.js 
    to generate employees and randomize role.
*/
const seedEmployees = async () => {
    try {
        const role = await Role.findOne({name: 'admin'}).exec();
        const formatedEmployee = employees.map(employee => ({
            ...employee,
            roleId: role._id
        }));

        await Employee.insertMany(formatedEmployee);
    } catch (err) {
        console.log('Error seeding to employees collection', err)
    }
}

export default seedEmployees