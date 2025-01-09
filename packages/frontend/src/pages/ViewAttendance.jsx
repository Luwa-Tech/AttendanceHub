import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import axios from "../utils/axiosConfig";
import { ImSpinner } from "react-icons/im";
import { format, parseISO } from 'date-fns';


const TABLE_HEAD = ["ID", "Name", "Job Title", "Check-in", "Check-out", "Status", "Date", ""];

/*
    Additional Implementation:
        - If filtering by month, display records for the entire month selected
            in a pagination form
 */

const ViewAttendancePage = () => {
    const [attendance, setAttendance] = useState([]);
    const [isAttendanceLoading, setIsAttendanceLoading] = useState(false);
    const [filterDate, setFilterDate] = useState('');
    const [error, setError] = useState(null);

    const getCurrentDayAttendance = async () => {
        try {
            setIsAttendanceLoading(true);
            const res = await axios.get("https://attendancehub.onrender.com/api/v1/attendance/current");
            setAttendance(res.data);
        } catch (error) {
            console.log(error);
            setError(error.response?.data?.error || 'An error occurred when getting current day attendance')
        } finally {
            setIsAttendanceLoading(false);
        }
    };

    const getAttendanceByDate = async (date) => {
        try {
            setIsAttendanceLoading(true);
            const res = await axios.get("https://attendancehub.onrender.com/api/v1/attendance/filter-by-date", {
                params: { date }
            });
            setAttendance(res.data);
        } catch (error) {
            console.log(error);
            setError(error.response?.data?.error || 'An error occurred when getting attendance')
        } finally {
            setIsAttendanceLoading(false);
        }
    };

    const handleFilter = () => {
        if (filterDate) {
            getAttendanceByDate(filterDate);
        }
    };

    useEffect(() => {
        getCurrentDayAttendance()
    }, [])

    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-[22rem] md:mb-[9rem] md:flex flex-col md:flex-row md:items-center md:justify-between md:gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Attendance List
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See attendance information for the selected date or month
                        </Typography>
                    </div>
                    <div className="flex md:items-center items-left flex-col md:flex-row gap-4">
                        <div className="w-[2rem] md:w-auto">
                        <Input
                            type="date"
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                            variant="outlined"
                        />
                        </div>
                        <Button className="bg-button-400 text-center w-[4.5rem]" size="sm" onClick={handleFilter}>
                            Filter
                        </Button>
                    </div>
                </div>
            </CardHeader>

            {
                isAttendanceLoading ? (
                    <div className="flex justify-center items-center h-60">
                        <ImSpinner className="animate-spin w-7 h-7" />
                    </div>
                ) : (

                    <CardBody className="overflow-scroll mt-4 px-0">
                        {
                            attendance.length === 0 ? (
                                <div className="flex justify-center items-center h-64">
                                    <Typography variant="h6" color="gray">
                                        No attendance records found.
                                    </Typography>
                                </div>
                            ) : (

                                <table className="w-full min-w-max table-auto text-left">
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
                                        {attendance.map(
                                            ({ employeeDeptId, name, jobTitle, checkIn, checkOut, status, date }, index) => {
                                                const isLast = index === attendance.length - 1;
                                                const classes = isLast
                                                    ? "p-4"
                                                    : "p-4 border-b border-blue-gray-50";

                                                return (
                                                    <tr key={employeeDeptId}>
                                                        <td className={classes}>
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal"
                                                            >
                                                                {employeeDeptId}
                                                            </Typography>

                                                        </td>
                                                        <td className={classes}>
                                                            <div className="flex flex-col">
                                                                <Typography
                                                                    variant="small"
                                                                    color="blue-gray"
                                                                    className="font-normal"
                                                                >
                                                                    {name}
                                                                </Typography>
                                                            </div>
                                                        </td>
                                                        <td className={classes}>
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal"
                                                            >
                                                                {jobTitle}
                                                            </Typography>
                                                        </td>

                                                        <td className={classes}>
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal"
                                                            >
                                                                {checkIn ? format(parseISO(checkIn), 'HH:mm') : 'N/A'}
                                                            </Typography>
                                                        </td>
                                                        <td className={classes}>
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal"
                                                            >
                                                                {checkOut ? format(parseISO(checkOut), 'HH:mm') : 'N/A'}
                                                            </Typography>
                                                        </td>
                                                        <td className={classes}>
                                                            <div className="w-max">
                                                                <Chip
                                                                    size="sm"
                                                                    variant="ghost"
                                                                    value={status}
                                                                    color={status === "Present" ? "green" : "red"}
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className={classes}>
                                                            <Typography
                                                                variant="small"
                                                                color="blue-gray"
                                                                className="font-normal"
                                                            >
                                                                {format(parseISO(date), 'yyyy-MM-dd')}
                                                            </Typography>
                                                        </td>
                                                    </tr>
                                                );
                                            },
                                        )}
                                    </tbody>
                                </table>
                            )}
                    </CardBody>
                )

            }

        </Card>
    );
}

export default ViewAttendancePage;