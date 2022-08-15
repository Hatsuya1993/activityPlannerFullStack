import React from 'react'
import { googleSearchMapResponse, imagesResponse } from '../Redux/initialState'
import noImages from '../Img/noImages.png'
import { useStateValue } from '../Redux/StateProvider'
import { CircularProgress } from '@chakra-ui/react'

type RowComponentsType = {
    googleSearchMap: googleSearchMapResponse,
}

const RowComponents : React.FC<RowComponentsType> = ({googleSearchMap}) => {

    const [{loading}, dispatch] = useStateValue()
    return (
        <div className='w-5/6 h-[200px] mx-auto flex items-center my-12 scroll-smooth overflow-x-scroll gap-3 scrollbar-thumb-gray-100 scrollbar-track-transparent scrollbar-thin'>
            {loading ? <div className='w-full text-center'><CircularProgress size='50px' isIndeterminate color='orange.400' /></div> : googleSearchMap && googleSearchMap.place_results && googleSearchMap.place_results.images ?  googleSearchMap.place_results.images.map((each : imagesResponse) => (
                <img key={each?.title} className='rounded-lg object-cover w-[300px] h-full' src={`${each?.thumbnail}`} alt="" />
            )): <div className='w-full'>
                <img className='w-[150px] h-[150px] mx-auto' src={`${noImages}`} alt=''/>
                </div>}
        </div>
    )
}

export default RowComponents