import { NavLink, useNavigate, useLocation } from "react-router-dom"
import { useForm } from "react-hook-form"
import { ImSpinner } from "react-icons/im"
import axios from "axios"
import { useState, useEffect } from "react"
import useAuth from "../hooks/useAuth"

const LoginPage = () => {
    const { setAuth } = useAuth()

    const [error, setError] = useState("")

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const form = useForm({
        mode: "onBlur"
    })

    const { register, handleSubmit, formState, reset } = form
    const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } = formState

    const login = async (data) => {
        try {
            const response = await axios.post("http://localhost:5001/login", {
                id: data.ID,
                password: data.password
            })

            console.log(response);
            // if (response) {
            //     //give user access and redirect user profile
            //     console.log(response.data.user)

            //     const role = response.data.user.user.role

            //     setAuth({
            //         user: data.email,
            //         role: role        
            //     })

            //     navigate(from, { replace: true })
            // }
        } catch (error) {
            // setError(error.response.data.error)
            console.log(error)
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
                    <button type="submit" disabled={!isDirty || !isValid || isSubmitting} className={`bg-blue-950 py-2 text-[1.3rem] hover:bg-opacity-[0.5] flex justify-center text-white items-center rounded-[0.3rem] md:text-[1.05rem] mb-2 ${isSubmitting || !isDirty || !isValid ? "bg-opacity-[0.9] hover:bg-opacity-[0.7]" : ""}`}>{isSubmitting ? <ImSpinner className={`${isSubmitting ? "animate-spin bg-opacity-[0.7]" : "animate-none"} w-6 h-6`} /> : "Login"}</button>
                </form>
            </section>
        </main>
    )
}

export default LoginPage
