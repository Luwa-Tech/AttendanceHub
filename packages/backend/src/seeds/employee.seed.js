/*
    For a robust/flexible employees seeding, use Faker.js 
    to generate employees and randomize role.
*/
import Employee from "../model/Employee.js";
import { employees } from "../seed.data.js";
import Role from "../model/Role.js";

const seedEmployees = async () => {
    try {
        const roles = await Role.find().exec();

        // Create a map of role names to their respective _id
        const roleMap = roles.reduce((acc, role) => {
            acc[role.name] = role._id;
            return acc;
        }, {});
        console.log('Role Map:', roleMap);

        // Format employees to replace roleId with the corresponding _id from roleMap
        const formattedEmployees = employees.map(employee => ({
            ...employee,
            roleId: roleMap[employee.roleId]
        }));


        await Employee.insertMany(formattedEmployees);
    } catch (err) {
        console.log('Error seeding to employees collection', err);
    }
}

export default seedEmployees;