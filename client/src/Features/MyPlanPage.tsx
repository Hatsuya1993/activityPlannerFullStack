import React, { useEffect } from 'react'
import { LocationInterface } from '../../../server/Interface/locationInterface'
import { getLocations } from '../Utils/fetchLocations'
import {MdGpsFixed} from 'react-icons/md' 
import {TiTick} from 'react-icons/ti'
import { motion } from 'framer-motion'
import noData from '../Img/noData.png'

const MyPlanPage : React.FC = () => { 
    const [loading, setLoading] = React.useState(false)
    let [currentData, setCurrentData] = React.useState<Array<LocationInterface>>([])
    useEffect(() => {
        setLoading(true)
        async function fetchData() {
            const response = await getLocations()
            setCurrentData(response.data)
        }
        setLoading(true)
        fetchData(); 
    }, [])
    return (
        <div className='w-full h-full'>
            <motion.div initial={{opacity: 0, y : 200}} animate={{opacity: 1, y : 0}} exit={{opacity: 0, y : 200}} className='w-5/6 mx-auto flex flex-col gap-5'>
                {loading && currentData.length > 0 ? currentData.map((each : LocationInterface) => (
                    <div className='bg-gray-100 p-3 rounded-lg drop-shadow-lg flex items-center justify-between'>
                        <div>
                        <p>{each.name}</p>
                        </div>
                        <ul className='flex items-center gap-2'>
                            <motion.li whileTap={{scale: 0.9}} className='cursor-pointer flex items-center gap-1 bg-white p-1 rounded-lg'>Directions <span><MdGpsFixed /></span></motion.li>
                            <motion.li whileTap={{scale: 0.9}} className='cursor-pointer flex items-center gap-1 bg-white p-1 rounded-lg'>Done <span><TiTick /></span></motion.li>
                        </ul>
                    </div>
                )) : <div className='w-full'>
                <img className='w-[150px] h-[150px] mx-auto' src={`${noData}`} alt=''/>
                </div>}
            </motion.div>
        </div>
    )
}

export default MyPlanPage