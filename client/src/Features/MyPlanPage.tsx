import React, { useEffect } from 'react'
import {TiTick} from 'react-icons/ti'
import { AnimatePresence, motion } from 'framer-motion'
import noData from '../Img/noData.png'
import { useStateValue } from '../Redux/StateProvider'
import { actionType } from '../Redux/reducer'
import { CircularProgress } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { dataType, deleteItem, getAllItems } from '../Utils/firebaseFunctions'
import { useAuth } from '../Context/authContext'

const MyPlanPage : React.FC = () => { 
    const {currentUser} = useAuth()
    const [{myPlanData, loading}, dispatch] = useStateValue()
    useEffect(() => {
        dispatch({
            type: actionType.SET_MY_PLAN_DATA,
            myPlanData: []
        })
        dispatch({
            type: actionType.SET_LOADING,
            loading: true
        }) 
        fetchData()
        async function fetchData() {
            const response = await getAllItems(currentUser.uid)
            dispatch({
                type: actionType.SET_MY_PLAN_DATA,
                myPlanData: response
            })
        }
        dispatch({
            type: actionType.SET_LOADING,
            loading: false
        }) 
    }, [])
    const handleDone = async (id: string) => {
        const data = myPlanData.filter((each: dataType) => each.data_id !== id)
        dispatch({
            type: actionType.SET_MY_PLAN_DATA,
            myPlanData: data
        })
        await deleteItem(id)
    }
    return (
        <div className='w-full h-full'>
            <div className='w-5/6 mx-auto flex flex-col gap-5'>
                {loading ? <div className='text-center'><CircularProgress isIndeterminate color='orange.400' /></div> : myPlanData.length > 0 ? myPlanData.map((each : dataType) => (
                    <div key={each.data_id}>
                    <AnimatePresence>
                        <motion.div initial={{ y: 300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }} key={each.data_id} className='bg-gray-100 p-3 rounded-lg drop-shadow-lg flex items-center justify-between'>
                        <div>
                        <Link to={`/detail`} state={each.yelpData}>
                        <motion.p className='bg-white p-1 rounded-lg' whileTap={{scale: 0.8}}>{each.name}</motion.p>
                        </Link>           
                        </div>
                        <ul className='flex items-center gap-2'>
                            <motion.li onClick={() => handleDone(each.data_id )} whileTap={{scale: 0.9}} className='cursor-pointer flex items-center gap-1 bg-white p-1 rounded-lg'>Done <span><TiTick /></span></motion.li>
                        </ul>
                        </motion.div>
                    </AnimatePresence>
                    </div>         
                )) : <div className='w-full'>
                <img className='w-[150px] h-[150px] mx-auto' src={`${noData}`} alt=''/>
                </div>}
            </div>
        </div>
    )
}

export default MyPlanPage