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
            document.cookie = `token=''`
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <header className='bg-white fixed z-50 w-screen p-3 px-4 md:p-6 md:px-8'>
            <div className=' md:flex w-full h-full items-center justify-between'>
            <Link className='flex items-center justify-center gap-2' to={"/"}>
                <img className='w-14' src={restaurant} alt="" />
                <p className='text-2xl font-semibold'>Activity Planner</p>
            </Link>
            <div>
                <ul className='flex flex-col items-center gap-3 md:flex-row'>
                    <li>
                    <motion.ul className='flex items-center gap-4'>
                    {currentUser && <Link to={'/myPlan'}><li className='cursor-pointer text-base text-gray-400 hover:text-gray-500 transition-all duration-100 ease-in-out'>My Plan</li></Link>}
                    </motion.ul>
                    </li>
                    <li>
                    <motion.ul className='flex items-center gap-4'>
                    {currentUser && <li onClick={handleLogout} className='cursor-pointer text-base text-gray-400 hover:text-gray-500 transition-all duration-100 ease-in-out'>Logout</li>}
                    </motion.ul>
                    </li>
                </ul>
            </div>
            </div>
        </header>
    )
}

export default NavBar