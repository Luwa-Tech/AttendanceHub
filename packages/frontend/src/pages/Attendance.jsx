import { useEffect, useState } from "react"
import axios from "../utils/axiosConfig"
import { Button, Avatar } from "@material-tailwind/react"
import useAuth from "../hooks/useAuth"

const AttendancePage = () => {
    const { auth } = useAuth();
    const openingHour = 8;
    const closingHour = 16;

    const checkInTime = new Date();
    const checkInHour = checkInTime.getHours();

    const [isCheckInLoading, setIsCheckInLoading] = useState(false);
    const [isCheckOutLoading, setIsCheckOutLoading] = useState(false);

    const [isExistingRecordLoading, setIsExistingRecordLoading] = useState(false);
    const [existingRecordError, setExistingRecordError] = useState(null);

    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [isCheckedOut, setIsCheckedOut] = useState(false);
    const [error, setError] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

    const handleCheckIn = async () => {
        try {
            setIsCheckInLoading(true);

            const res = await axios.post("http://localhost:5001/api/v1/attendance/check-in");
            setIsCheckedIn(true);
            setSuccessMsg(res.data.message)
        } catch (error) {
            setError(error.response?.data?.message || 'An error occurred during check-in');
        } finally {
            setIsCheckInLoading(false);
        }
    };

    const handleCheckOut = async () => {
        try {
            setIsCheckOutLoading(true);

            const res = await axios.put("http://localhost:5001/api/v1/attendance/check-out");
            setIsCheckedOut(true);
            setSuccessMsg(res.data?.message);
        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || 'An error occurred during check-out');
        } finally {
            setIsCheckOutLoading(false);
        }
    };

    const getExistingRecord = async () => {
        try {
            setIsExistingRecordLoading(true);

            const res = await axios.get("http://localhost:5001/api/v1/attendance/today");

            if (res.data.checkInTime && !res.data.checkOuTime) {
                setIsCheckedIn(true);
                setIsCheckedOut(false);
            } else if (res.data.checkInTime && res.data.checkOutTime) {
                setIsCheckedIn(true);
                setIsCheckedOut(true);
            } else {
                setIsCheckedIn(false);
                setIsCheckedOut(false);
            }
        } catch (error) {
            setExistingRecordError(error.response?.data?.message || 'An error occurred while fetching the record');
        } finally {
            setIsExistingRecordLoading(false);
        }
    };

    useEffect(() => {
        getExistingRecord();

    }, [])


    return (
        <main className="mt-16">
            <div className="md:w-4/5 md:mx-auto px-4 py-4 md:px-0 md:py-0">
                <section className="flex items-center space-x-4">
                    <img className="bg-slate-300 w-40 h-40 rounded-full" src="" alt="Profile image" />
                    <div className="text-left">
                        <p className="text-xl font-semibold">{auth?.fullname}</p>
                        <p className="text-gray-600">{auth?.jobTitle}</p>
                    </div>
                </section>
                <section className="mt-8">
                    {
                        checkInHour < openingHour || checkInHour > closingHour ? (
                            <span className="text-red-500 font-bold">Closed</span>
                        ) : (
                            <div className="mt-4 space-x-2">
                                <button disabled={isCheckInLoading || isCheckedIn} onClick={handleCheckIn} className={`px-4 py-2 rounded ${isCheckInLoading || isCheckedIn ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                                >
                                    {isCheckInLoading ? 'Checking in...' : 'Check in'}</button>
                                <button disabled={isCheckOutLoading || !isCheckedIn || isCheckedOut} onClick={handleCheckOut} className={`px-4 py-2 rounded ${isCheckOutLoading || !isCheckedIn || isCheckedOut ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-600 text-white'}`}
                                >
                                    {isCheckOutLoading ? 'Checking out...' : 'Check out'}</button>
                            </div>
                        )
                    }


                </section>
                {error && <p className="text-red-500">{error}</p>}
                {successMsg && <p className="text-blue-500">{successMsg}</p>}
                {existingRecordError && <p className="text-red-500">{existingRecordError}</p>}
            </div>
        </main>

    )
}

export default AttendancePage;