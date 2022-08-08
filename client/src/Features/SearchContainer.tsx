import React from 'react'
import ButtonComponent from '../Components/ButtonComponent'
import DropDownComponent from '../Components/DropDownComponent'
import { actionType } from '../Redux/reducer'
import { useStateValue } from '../Redux/StateProvider'
import { getAllActivities, getAllEvents, getAllFoodAndDrinks, getAllHotels } from '../Utils/fetchYelpApi'

const SearchContainer : React.FC = () => {
    const [dropDownDistance, setDropDownDistance] = React.useState('')
    const [dropDownFood, setdropDownFood] = React.useState('')
    const [{setDropDown}, dispatch] = useStateValue()
    const handleSearch = async () => {
        dispatch({
            type: actionType.SET_LOADING,
            loading: true
        })
        switch (setDropDown.service) {
            case "food":
                const dataFood = await getAllFoodAndDrinks(Number(dropDownDistance), dropDownFood)
                dispatch({
                    type: actionType.SET_FOOD_AND_DRINKS,
                    foodAndDrinks: dataFood
                })
                dispatch({
                    type: actionType.SET_CURRENT_PLAN,
                    currentPlan: dataFood
                })
                break;
            case "hotels":
                const dataHotel = await getAllHotels(Number(dropDownDistance))
                dispatch({
                    type: actionType.SET_HOTELS,
                    hotels: dataHotel
                })
                dispatch({
                    type: actionType.SET_CURRENT_PLAN,
                    currentPlan: dataHotel
                })
                break;
            case "activities":
                const dataActivities = await getAllActivities(Number(dropDownDistance), dropDownFood)
                dispatch({
                    type: actionType.SET_ACTIVITIES,
                    activities: dataActivities
                })
                dispatch({
                    type: actionType.SET_CURRENT_PLAN,
                    currentPlan: dataActivities
                })
                break;
            case "events":
                const dataEvents = await getAllEvents(Number(dropDownDistance))
                dispatch({
                    type: actionType.SET_EVENTS,
                    activities: dataEvents
                })
                dispatch({
                    type: actionType.SET_CURRENT_PLAN,
                    currentPlan: dataEvents
                })
                break;
            default:
                break;
        }
        dispatch({
            type: actionType.SET_LOADING,
            loading: false
        })
    }
    return (
        <div className='w-full bg-gray-100 rounded-lg shadow-lg'>
            <div className='w-full p-8 flex flex-col gap-5'>
                <DropDownComponent classData='w-full h-10 rounded-lg' onChange={(e) => setDropDownDistance(e.target.value.split(' ')[e.target.value.split(' ').length-2])} inputProps={{data: ['Select distance', 'Less than 100 metres', 'Less than 200 metres', 'Less than 300 metres', 'More than 400 metres']}}/>
                {setDropDown.data.length > 0 && <DropDownComponent classData='w-full h-10 rounded-lg' onChange={(e) => setdropDownFood(e.target.value)} inputProps={{data: setDropDown.data}}/>}
                <div>
                <ButtonComponent onClick={handleSearch}>Search</ButtonComponent>
                </div>
            </div>
        </div>
    )
}

export default SearchContainer