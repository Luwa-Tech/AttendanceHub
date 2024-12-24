import { NavLink } from "react-router-dom"
import {useForm} from "react-hook-form"
import axios from "axios"
import {ImSpinner} from "react-icons/im"
import { useState, useEffect } from "react"
import NotificationDialog from "../component/MessageModal"

const ForgotPasswordPage = () => {
    const [error, setError] = useState("")
    const [responseMsg, setResponseMsg] = useState("")
    const [msgTitle, setMsgTitle] = useState("Password Reset")
    const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);

    const form = useForm({
        mode: "onBlur"
    })

    const {register, handleSubmit, formState, reset} = form
    const {errors, isDirty, isValid, isSubmitting, isSubmitSuccessful} = formState

    const initPasswordReset = async (data) => {
        try {
            // Change to Production API URL
            const response = await axios.post("https://3ad4-172-166-151-113.ngrok-free.app/generate-reset-token", {
                id: data.ID
            })
            
            if (response.status === 200) {
                setResponseMsg(response.data);
                handleOpen();

            }
        } catch(error) {
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
            <section className="md:w-[30%] mx-auto my-[5rem] w-[80%]">
                <p className="text-[1.3rem] md:text-[1.7rem] mb-6 font-medium leading-normal text-center">Employee ID</p>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(initPasswordReset)} noValidate>
                    <div className="flex flex-col gap-2 font-normal leading-normal">
                        
                        <input placeholder="ID" className="border-[.12rem] border-blue-600 py-2 px-2 text-[1rem] rounded-[0.25rem] outline-none" id="ID" type="text" {...register("ID",  {
                            required: {
                                value: true,
                                message: "ID is required"
                            },
                        })}/>
                        <p className="text-red-700 text-[.8rem]">{errors.ID?.message}</p>
                    </div>
                    {
                      error !== "" &&  <p className="text-red-700 text-[.95rem]">{error}</p>
                    }
                    <button type="submit" disabled={!isDirty || !isValid || isSubmitting}  className={`bg-button-400 py-2 text-white hover:bg-opacity-[0.7] flex justify-center items-center rounded-[0.3rem] md:text-[1.1rem] mb-2 ${isSubmitting || !isDirty || !isValid ? "bg-opacity-[0.7] hover:bg-opacity-[0.7] " : ""}`}>{isSubmitting ? <ImSpinner className={`${isSubmitting ? "animate-spin bg-opacity-[0.7]" : "animate-none"} w-7 h-7`}/> : "Recover"}</button>
                </form>
            </section>
            <NotificationDialog openDialog={open} handleDialog={handleOpen} resMsg={responseMsg} msgTitle={msgTitle}/>
        </main>
    )
}

export default ForgotPasswordPage