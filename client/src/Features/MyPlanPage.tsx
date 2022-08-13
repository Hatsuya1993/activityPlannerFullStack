import React, { useEffect } from 'react'
import { LocationInterface } from '../../../server/Interface/locationInterface'
import { getLocations } from '../Utils/fetchLocations'
import {MdGpsFixed} from 'react-icons/md' 
import {TiTick} from 'react-icons/ti'
import { motion } from 'framer-motion'

const MyPlanPage : React.FC = () => { 
    let [currentData, setCurrentData] = React.useState<Array<LocationInterface>>([])
    useEffect(() => {
        async function fetchData() {
            const response = await getLocations()
            setCurrentData(response.data)
        }
        fetchData();

    })
    return (
        <div className='w-full h-full'>
            <motion.div initial={{opacity: 0, y : 200}} animate={{opacity: 1, y : 0}} exit={{opacity: 0, y : 200}} className='w-5/6 mx-auto flex flex-col gap-5'>
                {currentData && currentData.map((each : LocationInterface) => (
                    <div className='bg-gray-100 p-3 rounded-lg drop-shadow-lg flex items-center justify-between'>
                        <div>
                        <p>{each.name}</p>
                        </div>
                        <ul className='flex items-center gap-2'>
                            <motion.li whileTap={{scale: 0.9}} className='cursor-pointer flex items-center gap-1 bg-white p-1 rounded-lg'>Directions <span><MdGpsFixed /></span></motion.li>
                            <motion.li whileTap={{scale: 0.9}} className='cursor-pointer flex items-center gap-1 bg-white p-1 rounded-lg'>Done <span><TiTick /></span></motion.li>
                        </ul>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default MyPlanPage