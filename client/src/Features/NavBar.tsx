import React from 'react'
import { Link } from 'react-router-dom'
import restaurant from '../Img/restaurant.png'
import {motion} from 'framer-motion'
import { useAuth } from '../Context/authContext'

const NavBar : React.FC = () => {
    const {currentUser, logout} = useAuth()
    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <header className='bg-white fixed z-50 w-screen p-3 px-4 md:p-6 md:px-8'>
            {/* Desktop & Tablet */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
            <Link className='flex items-center gap-2' to={"/"}>
                <img className='w-14' src={restaurant} alt="" />
                <p className='text-2xl font-semibold'>Activity Planner</p>
            </Link>
            <div>
                <motion.ul className='flex items-center gap-4'>
                    {currentUser && <li onClick={handleLogout} className='cursor-pointer text-base text-gray-400 hover:text-gray-500 transition-all duration-100 ease-in-out'>Logout</li>}
                </motion.ul>
            </div>
            </div>
            {/* Mobile */}
        </header>
    )
}

export default NavBar