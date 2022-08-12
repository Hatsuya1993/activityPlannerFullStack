import React from 'react'
import { googleSearchReviewsResponse } from '../Redux/initialState'
import { useStateValue } from '../Redux/StateProvider'
import {BsFillHandThumbsUpFill, BsFillHandThumbsDownFill} from 'react-icons/bs'

type ReviewsComponentType = {
    googleSearchReviews: googleSearchReviewsResponse
}

const ReviewsComponent : React.FC<ReviewsComponentType> = ({googleSearchReviews}) => {
    const [{loading}, dispatch] = useStateValue()
    return (
        <div className='w-5/6 flex items-center mx-auto'>
            <div className='flex flex-col gap-3 w-full'>
                {loading ? <p>Loading...</p> : googleSearchReviews && googleSearchReviews.reviews && googleSearchReviews.reviews.map(each => (
                    <div key={each.user.name} className='bg-gray-100 rounded-lg p-4'>
                        <div className='flex items-center justify-between'>
                            <ul>
                                <li>
                                    {each.user.name}
                                </li>
                                <li>
                                    Date : {each.date}
                                </li>
                                <li className='flex items-center gap-2'>
                                    <p>
                                    {each.likes ? <BsFillHandThumbsUpFill /> : <BsFillHandThumbsDownFill />}
                                    
                                    </p>
                                    <p>
                                    {each.likes}
                                    </p>
                                </li>
                                <li>
                                    <p>Comments : {each.snippet}</p>
                                </li>
                            </ul>
                            <img src={`${each.user.thumbnail}`} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReviewsComponent