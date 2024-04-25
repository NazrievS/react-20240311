import classNames from "classnames"
import { RestaurantTab } from "../restaurant-tab/component"
import styles from './styles.module.scss'
import { useSelector } from "react-redux"


export const RestaurantTabs = ( {onTabClick, activeRestaurantId, className}) => {
    const restaurantIds = useSelector((state) => state.restaurant.ids);

    return (
        <div className={classNames(styles.root, className)}>
        {restaurantIds.map((restaurantId) => (
          <RestaurantTab
            restaurantId = {restaurantId}
            onClick = {() => onTabClick(restaurantId)}
            isActive = {restaurantId === activeRestaurantId}
          />
          ))}
      </div>
    )
}