import {IoFastFoodSharp} from 'react-icons/io5'
import {FaHotel} from 'react-icons/fa'
import {MdSportsHandball} from 'react-icons/md'
import {TbChristmasTree} from 'react-icons/tb'
import { IconType } from 'react-icons'

export type activityProp = {
    id: number,
    type: string,
    symbol: IconType
}

export const activity = [
    {
        id: 1,
        type: 'Food & Drinks',
        symbol: IoFastFoodSharp
    },
    {
        id: 2,
        type: 'Hotels',
        symbol: FaHotel
    },
    {
        id: 3,
        type: 'Activities',
        symbol: MdSportsHandball
    },
    {
        id: 4,
        type: 'Events',
        symbol: TbChristmasTree
    },
]

export const foodAndDrinksData = ['Select food type', 'singaporean', 'italian', 'french', 'chinese', 'vietnamese', 'any']

export const activityData = ['Select activity type', 'sports', 'games', 'nature', 'workshop', 'any']