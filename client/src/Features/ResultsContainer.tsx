import React from 'react'
import { foodAndDrinksType } from '../Redux/initialState'
import {motion} from 'framer-motion'

type ResultsContainerType = {
    data: Array<foodAndDrinksType>
}

const ResultsContainer : React.FC<ResultsContainerType> = ({data}) => {
    return (
        <div className='w-full flex flex-col gap-7'>
            {data && data.length > 0 && data.map((each: foodAndDrinksType) => {
                return (
                    <motion.div whileTap={{scale: 0.75}} key={each.id} className='w-full bg-slate-100 p-3 h-36 rounded-lg drop-shadow-lg cursor-pointer'>
                        <div className='flex items-center justify-between'>
                        <div className=''>
                            <p>{each.name}</p>
                            {each.is_closed ? <p>Closed</p> : <p>Open</p>}
                        </div>
                        <div className='h-full flex items-center'>
                            <motion.img whileHover={{scale: 1.8}} className='w-28 h-28 rounded-lg' src={`${each.image_url}`} alt="" />
                        </div>
                        </div>
                    </motion.div>
                )
            }) }
        </div>
    )
}

export default ResultsContainer