import { useSelector } from "react-redux";
import { useCurrrentTheme } from "../contexts/theme";
import { useCurrentUser } from "../contexts/user";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({restaurantId, className}) => {
    
    const restaurant = useSelector((state) => state.restaurant.entities[restaurantId])

    if (!restaurant) {
        return null;
    }

    const { name, menu, reviews } = restaurant;
    return (
        <div>
            <h1 className={className}>{name}</h1>
            <div>
                <h3>Menu:</h3>
                <Menu dishIds={menu} />
            </div>
            <div>
                <h3>Reviews:</h3>
                <Reviews reviewIds={reviews} />
            </div>
        </div>
    )
}