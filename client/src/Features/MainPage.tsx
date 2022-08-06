import React from 'react'
import { useAuth } from '../Context/authContext'
import OptionsMenu from './OptionsMenu';

const MainPage : React.FC = () => {

    const {currentUser} = useAuth()

    return (
        <div className='w-full h-screen flex justify-center'>
            <div className='flex flex-col gap-10'>
            <div className='shadow-lg bg-gray-100 w-[600px] h-[110px] rounded-lg'>
                <div className='p-5 flex flex-col gap-2'>
                    <p className='flex gap-2 items-end'><span className='text-3xl'>Hi,</span> {currentUser?.email}</p>
                    <p>What would you like to do today ?</p>
                </div>
            </div>
            <OptionsMenu />
            </div>
        </div>
    )
}

export default MainPage