import classNames from "classnames"
import { Tab } from "../tab/component"
import styles from './styles.module.scss'


export const RestaurantTabs = ( {restaurants, onTabClick, activeTabIndex, className}) => {

    return (
        <div className={classNames(styles.root, className)}>
        {restaurants?.map((restaurant, index) => (
          <Tab
            title = {restaurant.name}
            onClick = {() => onTabClick(index)}
            isActive = {index === activeTabIndex}
          />
          ))}
      </div>
    )
}