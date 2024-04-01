import { useState } from 'react';
import { Layout } from './components/layout/component';
import { Restaurant } from './components/restaurant/component';
import { restaurants } from './constants/mock';
import { RestaurantTabs } from './components/restaurant-tabs/component';


export const App = () => {
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(() => Number(localStorage.getItem('currentRestaurantIndex')) || false);
    const currentRestaurant = restaurants[currentRestaurantIndex]
    return (
    <Layout>
    <RestaurantTabs restaurants={restaurants} onTabClick={setCurrentRestaurantIndex}/>
    { currentRestaurant && <Restaurant restaurant={currentRestaurant}/> }
  </Layout>
    )
}