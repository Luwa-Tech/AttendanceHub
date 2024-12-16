import Role from "../model/Role.js";
import { NotFoundError } from "../utils/errors.js";

class RoleService {
    constructor() {
        this.role = Role;
    }

    getRole = async (info) => {
        const role = await this.role.findOne(info);
        if (!role) {
            throw new NotFoundError(`${name} role not found`);
        }
        return role;
    }
};

export default RoleService;