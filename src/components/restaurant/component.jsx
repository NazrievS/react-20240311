import { useCurrrentTheme } from "../contexts/theme";
import { useCurrentUser } from "../contexts/user";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({restaurant, className}) => {
    
    if (!restaurant) {
        return null;
    }

    const { name, menu, reviews } = restaurant;

    const {user} = useCurrentUser();

    return (
        <div>
            {user}
            <h1 className={className}>{name}</h1>
            <div>
                <h3>Menu:</h3>
                <Menu menu={menu} />
            </div>
            <div>
                <h3>Reviews:</h3>
                <Reviews reviews={reviews} />
            </div>
        </div>
    )
}