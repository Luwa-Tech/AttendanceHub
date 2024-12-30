import { useParams, useLocation } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import { ImSpinner } from "react-icons/im"
import axios from "../utils/axiosConfig"
import NotificationDialog from "../component/MessageModal"

const ResetPasswordPage = () => {
    const { token } = useParams()
    const [responseMsg, setResponseMsg] = useState("")
    const [msgTitle, setMsgTitle] = useState("Password Reset Success")
    const [open, setOpen] = useState(false);

    const resetSuccessMsg = "Your password has been successfully reset. You can now log in with your new password."

    const location = useLocation()
    const [error, setError] = useState("")

    const form = useForm({
        mode: "onSubmit"
    })

    const { register, handleSubmit, formState, reset } = form
    const { errors, isValid, isSubmitting, isSubmitSuccessful } = formState

    const resetPassword = async (data) => {
        try {
            // Add Prod API URL -> Example: //`https://talentbridge.onrender.com/api/user/reset-password-with-token?token=${token}`
            const response = await axios.post("http://localhost:5001/", {
                newPassword: data.newPassword,
                confirmPassword: data.confirmPassword
            })

            if (response.status === 200) {
                setResponseMsg(resetSuccessMsg);
                setOpen(prev => !prev)
            }

        } catch (error) {
            setError(error.response.data.error)
        }
    }

    useEffect(() => {
        if (isValid && isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset, isValid])

    return (
        <main className="mt-[2rem] md:mt-[.5rem]">
            <section className="md:w-[30%] mx-auto w-[80%] my-[5rem]">
                <h1 className="text-[1.3rem] md:text-[1.6rem] mb-6 font-medium leading-normal text-center">Reset Password</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(resetPassword)} noValidate>
                    <div className="flex flex-col gap-2 font-normal leading-normal">
                        <input className="border-[.12rem] border-blue-600 text-[1rem] rounded-[0.25rem] w-full py-2 px-2 outline-none" placeholder="Password" id="newPassword" type="password" {...register("newPassword", {
                            required: {
                                value: true,
                                message: "Password is required"
                            }
                        })} />

                        <p className="text-red-700 text-[.8rem]">{errors.password?.message}</p>
                    </div>
                    <div className="flex flex-col gap-2 font-normal leading-normal">
                        <input className="border-[.12rem] border-blue-600 text-[1rem] w-full py-2 px-2 outline-none rounded-[0.25rem]" placeholder="Confirm Password" id="confirmPassword" type="password" {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: "Password is required"
                            }
                        })} />

                        <p className="text-red-700 text-[.8rem]">{errors.password?.message}</p>
                    </div>
                    {
                        error !== "" && <p className="text-red-700 text-[.95rem]">{error}</p>
                    }
                    <button type="submit" className="bg-button-400 py-2 text-white hover:bg-opacity-[0.7] flex justify-center items-center rounded-[0.3rem] md:text-[1.1rem] mb-2">{isSubmitting ? <ImSpinner className={`${isSubmitting ? "animate-spin bg-opacity-[0.7]" : "animate-none"} w-6 h-6`} /> : "Reset"}</button>
                </form>
            </section>
            <NotificationDialog
                openDialog={open}
                setOpen={setOpen}
                resMsg={responseMsg}
                msgTitle={msgTitle}
                location={location.pathname}
            />
        </main>
    )
}

export default ResetPasswordPage
