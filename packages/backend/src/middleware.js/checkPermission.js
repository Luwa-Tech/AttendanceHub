// const checkPermission = (requiredPermission) => {
//     return async (req, res, next) => {
//         const user = await User.findById(req.userId).populate('role');
//         if (!user) {
//             return res.status(401).send('User not found');
//         }

//         const hasPermission = user.role.permissions.includes(requiredPermission);
//         if (!hasPermission) {
//             return res.status(403).send('Access denied');
//         }

//         next();
//     };
// };

// export default checkPermission;


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

