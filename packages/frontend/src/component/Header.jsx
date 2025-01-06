import { useState } from "react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import useAuth from "../hooks/useAuth"
import axios from "../utils/axiosConfig"

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const [isLogoutLoading, setIsLogoutLoading] = useState(false)
    const [error, setError] = useState(null)
    const { auth } = useAuth()
    const navigate = useNavigate()

    const mobileNavToggle = () => {
        setToggle(prev => !prev)
    }

    const closeToggle = () => {
        setToggle(prev => !prev)
    }

    const logout = async () => {
        try {
            setIsLogoutLoading(prev => !prev)
            const res = await axios.post("http://localhost:5001/logout")

            navigate("/")
        } catch (err) {
            console.log(err)
            setError(err.response?.data?.message || 'An error occurred when logging out')
        } finally {
            setIsLogoutLoading(prev => !prev)
        }
    }

    return (
        <header className="md:py-2 bg-[#e7eaec] text-button-400">
            <div className="flex justify-between items-center md:w-[90%] md:mx-auto px-2 py-2 md:px-0 md:py-0 relative">
                <h1 className="text-[1.4rem] md:text-[1.6rem] font-bold leading-normal z-[25] md:z-auto">AttendanceHub</h1>
                {
                    toggle ? (
                        <AiOutlineClose onClick={mobileNavToggle} className="md:hidden w-8 h-8 z-[25]" />
                    ) : (
                        <RxHamburgerMenu onClick={mobileNavToggle} className="md:hidden w-8 h-8 z-[25]" />
                    )
                }
                <nav className={`bg-[#b3b3ca] text-button-400 md:text-button-400 md:bg-transparent flex flex-col md:flex-row gap-8 md:gap-0 md:justify-end items-center md:w-full fixed md:static pt-20 md:pt-0 transition-all duration-[0.15s] mobile-nav ease-in md:z-auto z-[20] ${toggle ? "right-0" : "right-[-100%]"}`}>
                    <ul className="flex flex-col gap-4 md:gap-4 md:flex-row items-center">
                        <li onClick={closeToggle}><NavLink to="/admin" className="nav-links text-button-400">Dashboard</NavLink></li>
                        <li onClick={logout} className="text-[1rem] font-bold md:font-normal cursor-pointer hover:opacity-[0.6] px-4 py-2 rounded-[.2rem] bg-primary-600 text-primary-500">{
                            isLogoutLoading ? "loading.." : "Logout"
                        }</li>
                    </ul>
                </nav>
            </div>
        </header>

    )
}

export default Header
