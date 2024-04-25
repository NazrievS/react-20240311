import { useSelector } from "react-redux"
import { Button } from "../button/component"

export const RestaurantTab = ({restaurantId, onClick, isActive}) => {
    const restaurant = useSelector((state) => state.restaurant.entities[restaurantId])

    if(!restaurant) {
        return null;
    }

    return (
        <button onClick={onClick} disabled={isActive}> 
            {restaurant?.name}
        </button>
    ) 
}