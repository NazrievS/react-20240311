import { Dish } from "../dish/component"

export const Menu = ( {menu}) => {
    return (
        <ul>
            {menu.map(dish => (
                <li>
                    <Dish dish = {dish} />
                </li>
            ))}
        </ul>
    )
}