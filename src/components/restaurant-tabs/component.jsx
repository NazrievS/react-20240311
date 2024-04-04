
export const RestaurantTabs = ( {restaurants, onTabClick}) => {
    return (
        <div>
        {restaurants.map((restaurant, index) => (
          <button onClick={() => { onTabClick(index), localStorage.setItem('currentRestaurantIndex', index)}}>
              {restaurant.name}
          </button>
          ))}
      </div>
    )
}