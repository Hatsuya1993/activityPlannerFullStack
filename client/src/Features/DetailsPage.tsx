import { CircularProgress } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ButtonComponent from '../Components/ButtonComponent';
import ReviewsComponent from '../Components/ReviewsComponent';
import RowComponents from '../Components/RowComponents';
import { useAuth } from '../Context/authContext';
import { actionType } from '../Redux/reducer';
import { useStateValue } from '../Redux/StateProvider';
import { postLocation } from '../Utils/fetchLocations';
import { searchByMap, searchLocation, searchReviews } from '../Utils/fetchSearchGoogle';

const DetailsPage : React.FC = () => {
    const {currentUser} = useAuth()
    const [{googleSearchResponseData, googleSearchMap, loading, googleSearchReviews}, dispatch] = useStateValue()
    const [message, setMessage] = React.useState(false)
    const [messageContent, setMessageContent] = React.useState('')
    const location = useLocation();
    const data : any = location.state;
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch({
                type: actionType.SET_LOADING,
                loading: false
            })
        },15000)
        return () => clearTimeout(timer)
    })
    useEffect(() => {
        async function fetchData() {
            dispatch({
                type: actionType.SET_LOADING,
                loading: true
            }) 
            dispatch({
                type: actionType.SET_OPENING_HOURS,
                googleSearchResponseData: ''
            })
            dispatch({
                type: actionType.SET_SEARCH_METADATA,
                googleSearchMap: ''
            })
            dispatch({
                type: actionType.SET_SEARCH_REVIEWS,
                googleSearchReviews: ''
            })
            let resp = await searchLocation(data.name)
            let respMap = await searchByMap(data.name, data.coordinates.latitude, data.coordinates.longitude)
            let respRev = await searchReviews(respMap.place_results.data_id)
            dispatch({
                type: actionType.SET_OPENING_HOURS,
                googleSearchResponseData: resp
            })
            dispatch({
                type: actionType.SET_SEARCH_METADATA,
                googleSearchMap: respMap
            })
            dispatch({
                type: actionType.SET_SEARCH_REVIEWS,
                googleSearchReviews: respRev
            })
            dispatch({
                type: actionType.SET_LOADING,
                loading: false
            })
        }
        fetchData();
    }, [])

    const handleAddPlan = async () => {
        try {
            await postLocation({uid: currentUser.uid, name: data.name, latitude: data.coordinates.latitude, longitude: data.coordinates.longitude, data_id: googleSearchMap.place_results.data_id}, currentUser.accessToken)
            setMessage(true)
            setMessageContent('Successfully added to plan')
            setTimeout(() => {
                setMessage(false)
            }, 4000);
        } catch (error) {
            setMessage(true)
            setMessageContent('Plan already added')
            setTimeout(() => {
                setMessage(false)
            }, 4000);
        }
    }

    return (
        <div className='w-full'>
        <div className='w-full flex items-center justify-center'>
            <div className='w-[700px] p-7 bg-slate-100 rounded-lg shadow-lg'>
                <div className='w-1/2 text-center mx-auto my-3'>
                {message && messageContent && <p className='bg-white text-center p-1 rounded-lg'>{messageContent}</p>}
                </div>
                <div className='flex items-center justify-between'>
                    <div>
                        <ul className='flex flex-col gap-2'>
                            <li>
                            <p>Store : <span className='text-xl'>{data.name}</span></p>
                            </li>
                            <li>
                            <p>Available : </p>
                            <div className='flex flex-col'>
                            {loading ? <CircularProgress size='25px' isIndeterminate color='orange.400' /> : googleSearchResponseData && googleSearchResponseData.knowledge_graph ? googleSearchResponseData.knowledge_graph.hours && Object.keys(googleSearchResponseData.knowledge_graph.hours).map((each) => (
                                        <div key={each} className={each}>{each} : {googleSearchResponseData.knowledge_graph.hours[each].opens} - {googleSearchResponseData.knowledge_graph.hours[each].closes}</div>
                            )) : data.is_closed ? <p>Closed</p> : <p>Open</p>}
                            </div>
                            </li>
                            <li>
                                <p>Rating : {data.rating}/5</p>
                            </li>
                            <li>
                                <p>Telephone Number :</p>
                                <p>{data.display_phone !== '' ? data.display_phone : `-`}</p>
                            </li>
                            <li>
                                <p>Location : </p>
                                <p>{data.location.address1}</p>
                                <p>{data.location.zip_code}</p>
                            </li>
                            <li className='flex gap-3'>
                                {googleSearchMap && googleSearchMap.place_results && googleSearchMap.place_results.data_id && <ButtonComponent onClick={handleAddPlan}>Add to plan</ButtonComponent>}
                                {googleSearchMap && googleSearchMap.search_metadata && googleSearchMap.search_metadata.google_maps_url && <ButtonComponent onClick={() => {}}><a href={`${googleSearchMap.search_metadata.google_maps_url}`}>Get Directions</a></ButtonComponent>}
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <img className='w-80 h-80 rounded-lg' src={`${data.image_url}`} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div>
        <RowComponents googleSearchMap={googleSearchMap}/>
        </div>
        <div>
            <ReviewsComponent googleSearchReviews={googleSearchReviews}/>
        </div>
        </div>
    )
}

export default DetailsPage