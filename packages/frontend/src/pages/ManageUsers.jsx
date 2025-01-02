import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "../utils/axiosConfig";
import RegisterUserModal from "../component/RegisterUserModal"
import { ImSpinner } from "react-icons/im"


const TABLE_HEAD = ["Employee", "Email", "Job Title", "Employed", ""];

const ManageUsersPage = () => {
    const [employees, setEmployees] = useState([]);
    const [isEmployeesLoading, setIsEmployeesLoading] = useState(false);
    const [error, setError] = useState(null);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open)

    const getEmployees = async () => {
        try {
            setIsEmployeesLoading(prev => !prev);

            const res = await axios.get("http://localhost:5001/api/v1/employee/get-all-employees");
            console.log(res)

            const formattedData = res.data.map(employee => ({
                name: `${employee.firstname} ${employee.lastname}`,
                email: employee.email,
                job: employee.jobTitle,
                date: new Date(employee.createdAt).toLocaleDateString()
            }))
            setEmployees(formattedData)
        } catch (error) {
            console.log(error)
            setError(error.response?.data?.message || 'An error occurred when getting employees')
        } finally {
            setIsEmployeesLoading(prev => !prev)
        }
    }

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none mb-[1.5rem] md:mb-[2rem]">
                <div className="mb-[15rem] md:mb-[10rem] md:flex flex-col md:flex-row md:items-center md:justify-between md:gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Employees list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all employees
                        </Typography>
                    </div>
                    <div>
                        <Button className="flex items-center mt-2 md:mt-0 gap-3 bg-button-400" size="sm" onClick={handleOpen}>
                            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add employee
                        </Button>
                    </div>
                </div>
            </CardHeader>
            {
                isEmployeesLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <ImSpinner className="animate-spin w-7 h-7" />
                    </div>
                ) : (

                    <CardBody className="overflow-scroll px-0">
                        <table className="mt-4 w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head, index) => (
                                        <th
                                            key={head}
                                            className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                            >
                                                {head}{" "}
                                                {index !== TABLE_HEAD.length - 1 && (
                                                    <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                                )}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {employees.map(
                                    ({ name, email, job, date }, index) => {
                                        const isLast = index === employees.length - 1;
                                        const classes = isLast
                                            ? "p-4"
                                            : "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={name}>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {name}
                                                    </Typography>

                                                </td>
                                                <td className={classes}>
                                                    <div className="flex flex-col">
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {email}
                                                        </Typography>
                                                    </div>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {job}
                                                    </Typography>
                                                </td>

                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {date}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Tooltip content="Edit User">
                                                        <IconButton variant="text">
                                                            <PencilIcon className="h-4 w-4" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </td>
                                            </tr>
                                        );
                                    },
                                )}
                            </tbody>
                        </table>
                    </CardBody>
                )

            }
            <RegisterUserModal
                handleOpen={handleOpen}
                open={open}
                getEmployees={getEmployees}
                setOpen={setOpen}
            />
        </Card>
    );
}

export default ManageUsersPage;