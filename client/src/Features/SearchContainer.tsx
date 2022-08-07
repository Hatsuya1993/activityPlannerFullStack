import React from 'react'
import ButtonComponent from '../Components/ButtonComponent'
import DropDownComponent from '../Components/DropDownComponent'
import { actionType } from '../Redux/reducer'
import { useStateValue } from '../Redux/StateProvider'
import { getAllFoodAndDrinks } from '../Utils/fetchYelpApi'

const SearchContainer : React.FC = () => {
    const [dropDownDistance, setDropDownDistance] = React.useState('')
    const [dropDownFood, setdropDownFood] = React.useState('')
    const [{}, dispatch] = useStateValue()
    const handleSearch = async () => {
        dispatch({
            type: actionType.SET_LOADING,
            loading: true
        })
        const data = await getAllFoodAndDrinks(Number(dropDownDistance), dropDownFood)
        console.log(data,123456)
        dispatch({
            type: actionType.SET_FOOD_AND_DRINKS,
            foodAndDrinks: data
        })
        dispatch({
            type: actionType.SET_LOADING,
            loading: false
        })
    }
    return (
        <div className='w-full h-60 bg-gray-100 rounded-lg shadow-lg'>
            <div className='w-full p-8 flex flex-col gap-5'>
                <DropDownComponent classData='w-full h-10 rounded-lg' onChange={(e) => setDropDownDistance(e.target.value.split(' ')[e.target.value.split(' ').length-2])} inputProps={{data: ['Select distance', 'Less than 100 metres', 'Less than 200 metres', 'Less than 300 metres', 'More than 400 metres']}}/>
                <DropDownComponent classData='w-full h-10 rounded-lg' onChange={(e) => setdropDownFood(e.target.value)} inputProps={{data: ['Select food type', 'singaporean', 'italian', 'french', 'chinese', 'vietnamese', 'any']}}/>
                <div>
                <ButtonComponent onClick={handleSearch}>Search</ButtonComponent>
                </div>
            </div>
        </div>
    )
}

export default SearchContainer