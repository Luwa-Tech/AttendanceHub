import { EmployeeController } from "../controllers/employeeController.js";
import { authorizeUser } from "../middleware/authorize.js";
import checkPermission from "../middleware/checkPermission.js";
import express from 'express';
const router = express.Router();

const employeeController = new EmployeeController();

router.get('/get-employee', authorizeUser, employeeController.getEmployee)
router.get('/get-all-employees', authorizeUser, checkPermission('manage_users'), employeeController.getAllEmployees)

export default router;