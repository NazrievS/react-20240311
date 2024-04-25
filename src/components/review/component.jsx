import { useSelector } from "react-redux"

export const Review = ( {reviewId}) => {

    const review = useSelector((state) => state.review.entities[reviewId])
    
    return (<div>{review.text}</div>)
}