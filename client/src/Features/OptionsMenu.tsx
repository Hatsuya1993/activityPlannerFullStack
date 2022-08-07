import React from 'react'
import {motion} from 'framer-motion'
import { activity } from '../Utils/Data'


const OptionsMenu : React.FC = () => {
    const [currentPlan, setCurrentPlan] = React.useState("Food & Drinks")
    return (
        <div className='w-full'>
                <div className='w-full flex items-center justify-between'>
                    {activity.map(each => {
                        return (
                            <motion.div onClick={() => setCurrentPlan(each.type)} key={each.id} whileTap={{scale: 0.75}} className={`${each.type === currentPlan ? 'bg-orange-600' : 'bg-gray-100'}  h-28 w-24 p-3 flex flex-col items-center justify-center rounded-lg shadow-lg cursor-pointer`}>
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