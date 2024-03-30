import { Menuitem } from "../menuitem/component"

export const Menu = ( {menu}) => {
    return (
        <ul>
            {menu.map(menuitem => (
                <li>
                    <Menuitem menuitem = {menuitem} />
                </li>
            ))}
        </ul>
    )
}