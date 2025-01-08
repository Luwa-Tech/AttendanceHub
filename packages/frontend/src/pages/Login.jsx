import {NavLink, useNavigate, useLocation} from "react-router-dom"
import { useForm } from "react-hook-form"
import { ImSpinner } from "react-icons/im"
import axios from "../utils/axiosConfig"
import { useState, useEffect } from "react"
import useAuth from "../hooks/useAuth"
import {BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs"

const LoginPage = () => {
    const { setAuth} = useAuth()
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false)

    const form = useForm({
        mode: "onBlur"
    })

    const { register, handleSubmit, formState, reset } = form
    const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } = formState

    const login = async (data) => {
        try {
            const response = await axios.post("https://attendancehub.onrender.com/login", {
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

                    <div className="flex items-center text-[1rem] border-[.12rem] border-blue-600 rounded-[0.25rem]">
                            <input placeholder="Password" className="text-[1rem] w-full py-2 px-2 outline-none" type={visible ? "text" : "password"} id="password" {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                }
                            })}/>
                            <span className="px-4 py-2 cursor-pointer" onClick={() => setVisible(prev => !prev)}>{visible ? <BsFillEyeFill/> : <BsFillEyeSlashFill />}</span>
                        </div>
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
