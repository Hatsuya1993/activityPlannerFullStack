import React, { useEffect } from 'react'
import { LocationInterface } from '../../../server/Interface/locationInterface'
import { deleteLocation, getLocations } from '../Utils/fetchLocations'
import {MdGpsFixed} from 'react-icons/md' 
import {TiTick} from 'react-icons/ti'
import { AnimatePresence, motion } from 'framer-motion'
import noData from '../Img/noData.png'
import { useStateValue } from '../Redux/StateProvider'
import { actionType } from '../Redux/reducer'
import { CircularProgress } from '@chakra-ui/react'

const MyPlanPage : React.FC = () => { 
    const [{myPlanData, loading}, dispatch] = useStateValue()
    useEffect(() => {
        fetchData(); 
        dispatch({
            type: actionType.SET_LOADING,
            loading: true
        }) 
        async function fetchData() {
            const response = await getLocations()
            dispatch({
                type: actionType.SET_MY_PLAN_DATA,
                myPlanData: response.data
            })
        }
        dispatch({
            type: actionType.SET_LOADING,
            loading: false
        }) 
    }, [])
    const handleDone = async (id: string) => {
        const data = myPlanData.filter((each: LocationInterface) => each.data_id !== id)
        dispatch({
            type: actionType.SET_MY_PLAN_DATA,
            myPlanData: data
        })
        await deleteLocation(id)
    }
    return (
        <div className='w-full h-full'>
            <div className='w-5/6 mx-auto flex flex-col gap-5'>
                {loading ? <div className='text-center'><CircularProgress isIndeterminate color='orange.400' /></div> : myPlanData.length > 0 ? myPlanData.map((each : LocationInterface) => (
                    <AnimatePresence>
                        <motion.div initial={{ y: 300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }} key={each.data_id} className='bg-gray-100 p-3 rounded-lg drop-shadow-lg flex items-center justify-between'>
                        <div>
                        <p>{each.name}</p>
                        </div>
                        <ul className='flex items-center gap-2'>
                            <motion.li whileTap={{scale: 0.9}} className='cursor-pointer flex items-center gap-1 bg-white p-1 rounded-lg'>Directions <span><MdGpsFixed /></span></motion.li>
                            <motion.li onClick={() => handleDone(each.data_id )} whileTap={{scale: 0.9}} className='cursor-pointer flex items-center gap-1 bg-white p-1 rounded-lg'>Done <span><TiTick /></span></motion.li>
                        </ul>
                        </motion.div>
                    </AnimatePresence>
                    
                )) : <div className='w-full'>
                <img className='w-[150px] h-[150px] mx-auto' src={`${noData}`} alt=''/>
                </div>}
            </div>
        </div>
    )
}

export default MyPlanPage