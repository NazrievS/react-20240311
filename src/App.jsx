import { useEffect, useState } from 'react';
import { Layout } from './components/layout/component';
import { Restaurant } from './components/restaurant/component';
import { restaurants } from './constants/mock';
import { RestaurantTabs } from './components/restaurant-tabs/component';
import { setStorageItem, getStorageItem } from './utils/storage';

const ACTIVE_RESTAURANT_INDEX_STORAGE_KEY = "activeRestaurantIndex";

export const App = () => {
    const [activeRestaurantIndex, setActiveRestaurandIndex] = useState(() => 
    Number(localStorage.getItem(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY)));

    const activeRestaurant = restaurants[activeRestaurantIndex]

    return (
    <Layout>
    <RestaurantTabs 
      restaurants={restaurants} 
      onTabClick={(index) => {
        setActiveRestaurandIndex(index)
        setStorageItem(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY, index)
      }}
      activeTabIndex={activeRestaurantIndex}
      />

    {activeRestaurant ? (
      <Restaurant restaurant={activeRestaurant}/>
    ) : (
      <span>Selected Restaurant</span>
    )}
  </Layout>
    )
}