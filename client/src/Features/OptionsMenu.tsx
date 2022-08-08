import React from 'react'
import {motion} from 'framer-motion'
import { activity, activityProp, foodAndDrinksData, activityData } from '../Utils/Data'
import { useStateValue } from '../Redux/StateProvider'
import { actionType } from '../Redux/reducer'


const OptionsMenu : React.FC = () => {
    const [currentPlan, setCurrentPlan] = React.useState("Food & Drinks")
    const [{}, dispatch] = useStateValue()
    const handleCurrentPlan = (each: activityProp) => {
        setCurrentPlan(each.type)
        switch (each.id) {
            case 1:
                dispatch({
                    type: actionType.SET_DROPDOWN,
                    setDropDown: {
                        data: foodAndDrinksData,
                        service: 'food'
                    }
                })
                break;
            case 2:
                dispatch({
                    type: actionType.SET_DROPDOWN,
                    setDropDown: {
                        data: [],
                        service: 'hotels'
                    }
                })
                break
            case 3:
                dispatch({
                    type: actionType.SET_DROPDOWN,
                    setDropDown: {
                        data: activityData,
                        service: 'activities'
                    }
                })
            break;
            case 4:
                dispatch({
                    type: actionType.SET_DROPDOWN,
                    setDropDown: {
                        data: [],
                        service: 'events'
                    }
                })
                break
            default:
                break;
        }
    }
    return (
        <div className='w-full'>
                <div className='w-full flex items-center justify-between'>
                    {activity.map(each => {
                        return (
                            <motion.div onClick={() => handleCurrentPlan(each)} key={each.id} whileTap={{scale: 0.75}} className={`${each.type === currentPlan ? 'bg-orange-600' : 'bg-gray-100'}  h-28 w-24 p-3 flex flex-col items-center justify-center rounded-lg shadow-lg cursor-pointer`}>
                            <div className={`${each.type === currentPlan ? 'bg-gray-100' : 'bg-orange-600'} rounded-full p-3 w-11 flex items-center justify-center`}>
                            <each.symbol className={`${each.type === currentPlan ? 'text-orange-600' : 'text-white'} text-1xl`}/>
                            </div>
                            <div className='flex items-center justify-center text-center'>
                                <p className={`${each.type === currentPlan ? 'text-white' : ''}`}>{each.type}</p>
                            </div>
                            </motion.div>
                        )
                    })}
                </div>
        </div>
    )
}

export default OptionsMenu