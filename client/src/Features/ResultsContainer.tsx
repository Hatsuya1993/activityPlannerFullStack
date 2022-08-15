import React from 'react'
import { yelpResponseType } from '../Redux/initialState'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { useStateValue } from '../Redux/StateProvider'

type ResultsContainerType = {
    data: Array<yelpResponseType>
}

const ResultsContainer : React.FC<ResultsContainerType> = ({data}) => {
    const [{}, dispatch] = useStateValue()
    return (
        <div className='w-full flex flex-col gap-7'>
            {data && data.length > 0 && data.map((each: yelpResponseType) => {
                return (
                    <Link key={each.id} to={'/detail'} state={each}>
                    <motion.div  whileTap={{scale: 0.75}} className='w-full bg-slate-100 p-3 h-36 rounded-lg drop-shadow-lg cursor-pointer'>
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
                    </Link>
                )
            }) }
        </div>
    )
}

export default ResultsContainer