import { Dish } from "../dish/component"

export const Menu = ( {dishIds}) => {
    return (
        <ul>
            {dishIds.map(dishId => (
                <li>
                    <Dish dishId = {dishId} />
                </li>
            ))}
        </ul>
    )
}