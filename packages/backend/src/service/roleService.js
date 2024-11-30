import Role from "../model/Role";
import { NotFoundError } from "../utils/errors";

class RoleService {
    constructor() {
        this.role = Role;
    }

    getRoleByName = async (name) => {
        const role = await this.role.findOne({name: name});
        if (!role) {
            throw new NotFoundError(`${name} role not found`, 'not_found');
        }
        return role;
    }
};

export default RoleService;