import { AccessDeniedError, NotFoundError } from "../utils/errors.js";
import Employee from "../model/Employee.js";

const checkPermission = (requiredPermission) => {
    return async (req, res, next) => {
        const user = await Employee.findById(req.userId).populate('role');
        if (!user) {
            throw new NotFoundError('Employee not found')
        }

        const hasPermission = user.role.permissions.includes(requiredPermission);
        if (!hasPermission) {
            throw new AccessDeniedError('You do not have permission to access this resource.');
        }

        next();
    };
};

export default checkPermission;


// seed logic:

// const seedRoles = async () => {
//     const roles = [
//         { name: 'worker', permissions: ['view_own_attendance', 'update_own_attendance'] },
//         { name: 'admin', permissions: ['manage_users', 'view_all_attendance', 'update_all_attendance'] },
//         { name: 'time-keeper', permissions: ['view_all_attendance', 'update_all_attendance'] }
//     ];

//     for (const role of roles) {
//         await Role.create(role);
//     }
// };

// seedRoles();

