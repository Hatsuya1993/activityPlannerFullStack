import React from 'react'
import { useAuth } from '../Context/authContext'
import { useStateValue } from '../Redux/StateProvider';
import OptionsMenu from './OptionsMenu';
import ResultsContainer from './ResultsContainer';
import emptyResults from '../Img/emptyResults.png'
import SearchContainer from './SearchContainer';
import { CircularProgress } from '@chakra-ui/react';

const MainPage : React.FC = () => {

    const {currentUser} = useAuth()

    const [{loading, currentPlan}, dispatch] = useStateValue()
    
    return (
        <div className='w-full flex justify-center pb-10'>
            <div className='flex flex-col gap-10'>
            <div className='shadow-lg bg-gray-100 w-[600px] h-[110px] rounded-lg'>
                <div className='p-5 flex flex-col gap-2'>
                    <p className='flex gap-2 items-end'><span className='text-3xl'>Hi,</span> {currentUser?.email}</p>
                    <p>What would you like to do today ?</p>
                </div>
            </div>
            <OptionsMenu />
            <div className='w-full h-full'>
            <SearchContainer />
            </div>
            <div className='w-full'> 
            {loading ? <div className='text-center'><CircularProgress isIndeterminate color='orange.400' /></div> : currentPlan?.length > 0 ? (
                <ResultsContainer data={currentPlan} />
            ): 
            <div className='w-full flex items-center justify-center py-14'>
            <div>
            <p className='text-center text-2xl'>No Results</p>
            <img className='w-80' src={emptyResults} alt="" />
            </div>
        </div>
            }
            </div>
            </div>
        </div>
    )
}

export default MainPage