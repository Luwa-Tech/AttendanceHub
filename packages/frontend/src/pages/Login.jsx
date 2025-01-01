import {NavLink, useNavigate, useLocation} from "react-router-dom"
import { useForm } from "react-hook-form"
import { ImSpinner } from "react-icons/im"
import axios from "../utils/axiosConfig"
import { useState, useEffect } from "react"
import useAuth from "../hooks/useAuth"

/*

    TODO:
        - write auth pages logic
        - write attendance logic
        - write dashboard logic and data
 */

const LoginPage = () => {
    const { setAuth} = useAuth()
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const form = useForm({
        mode: "onBlur"
    })

    const { register, handleSubmit, formState, reset } = form
    const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } = formState

    const login = async (data) => {
        try {
            // change url to prod-url during deployment
            const response = await axios.post("http://localhost:5001/login", {
                id: data.ID,
                password: data.password
            });

            if (response.status === 200) {
                setAuth(response.data.employee)

                navigate("/attendance");
            }

        } catch (error) {
            setError(error.response?.data?.error)
        }
    }

    useEffect(() => {
        if (isValid && isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset, isValid])

    
    return (
        <main className="my-[5rem]">
            <section className="md:w-[30%] mx-auto w-[80%]">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(login)} noValidate>
                    <div className="flex flex-col gap-2 font-normal leading-normal">

                        <input type="text" placeholder="ID" className="border-[.12rem] border-blue-600 py-2 px-2 text-[1rem] rounded-[0.25rem] outline-none" id="ID"  {...register("ID", {
                            required: {
                                value: true,
                                message: "ID is required"
                            }
                        })} />
                        <p className="text-red-700 text-[.8rem]">{errors.ID?.message}</p>
                    </div>
                    <div className="flex flex-col gap-2 font-normal leading-normal">

                        <input placeholder="Password" className="border-[.12rem] border-blue-600 py-2 px-2 text-[1rem] rounded-[0.25rem] outline-none" type="password" id="password" {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required"
                            }
                        })} />
                        <p className="text-red-700 text-[.8rem]">{errors.password?.message}</p>
                    </div>
                    <span className="text-right">
                        <NavLink to="/forgot_password" className="hover:underline text-blue-600 mt-2">Forgot Password?</NavLink>
                    </span>
                    {
                        error !== "" && <p className="text-red-700 text-[.95rem]">{error}</p>
                    }
                    <button type="submit" disabled={!isDirty || !isValid || isSubmitting} className={`bg-button-400 py-2 text-[1.3rem] hover:bg-opacity-[0.5] flex justify-center text-white items-center rounded-[0.3rem] md:text-[1.05rem] mb-2 ${isSubmitting || !isDirty || !isValid ? "bg-opacity-[0.9] hover:bg-opacity-[0.7]" : ""}`}>{isSubmitting ? <ImSpinner className={`${isSubmitting ? "animate-spin bg-opacity-[0.7]" : "animate-none"} w-7 h-7`} /> : "Login"}</button>
                </form>
            </section>
        </main>
    )
}

export default LoginPage
