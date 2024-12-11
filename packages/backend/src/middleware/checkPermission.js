import { AccessDeniedError, NotFoundError } from "../utils/errors.js";
import Role from "../model/Role.js";

const checkPermission = (requiredPermission) => {
    return async (req, res, next) => {
        const role = await Role.findById(req.user.roleId);

        const hasPermission = role.permissions.includes(requiredPermission);
        if (!hasPermission) {
            throw new AccessDeniedError('You do not have permission to access this resource.');
        }

        next();
    };
};

export default checkPermission;