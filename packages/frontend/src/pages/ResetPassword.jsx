
import { useNavigate, useParams } from "react-router-dom"
import {useForm} from "react-hook-form"
import { useState, useEffect } from "react"
import {ImSpinner} from "react-icons/im"
import axios from "axios"

const ResetPasswordPage = () => {
    //`https://talentbridge.onrender.com/api/user/reset-password-with-token?token=${token}`
    const {token} = useParams()
    const navigate = useNavigate()
    const [error, setError] = useState("")

    const form = useForm({
        mode: "onSubmit"
    })

    const {register, handleSubmit, formState, reset} = form
    const {errors, isValid, isSubmitting, isSubmitSuccessful} = formState

    const redirectToSignin = () => {
        navigate("/login")
    }

    const resetPassword = async (data) => {
        try {
            const response = await axios.post("", {
                newPassword: data.newPassword,
                confirmPassword: data.confirmPassword
            })
            if (response) {
                console.log(response)
                redirectToSignin()
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
                      error !== "" &&  <p className="text-red-700 text-[.95rem]">{error}</p>
                    }
                    <button type="submit" className="bg-blue-950 py-2 text-white hover:bg-opacity-[0.7] flex justify-center items-center rounded-[0.3rem] md:text-[1.1rem] mb-2">{isSubmitting ? <ImSpinner className={`${isSubmitting ? "animate-spin bg-opacity-[0.7]" : "animate-none"} w-6 h-6`}/> : "Reset"}</button>
                </form>
            </section>
            {/* make modal into its own component for better maintainability */}
            {/* <Rodal height={240} width={350} visible={openModal} animation="zoom">
                <section className="mt-[4rem] flex flex-col items-center gap-4">
                    <p className="text-center text-[1rem] text-[#334155]">Password reset was successful. You can proceed to login page</p>
                    <button className="bg-secondary-500 text-primary-500 hover:bg-opacity-[0.95] px-[2.5rem] py-2 rounded-[.4rem]" onClick={redirectToSignin}>Go to Login</button>
                </section>
            </Rodal> */}
        </main>
    )
}

export default ResetPasswordPage
