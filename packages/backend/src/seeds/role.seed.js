import Role from "../model/Role.js";
import { roles } from "../seed.data.js";

const seedRoles = async () => {
    try {
         await Role.insertMany(roles);
    } catch (err) {
        console.log('error seeding to role collection', err)
    }
}

export default seedRoles;
