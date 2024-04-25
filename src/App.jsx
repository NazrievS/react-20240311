import { useMemo, useState } from 'react';
import { Layout } from './components/layout/component';
import { Restaurant } from './components/restaurant/component';
import { restaurants } from './constants/mock';
import { RestaurantTabs } from './components/restaurant-tabs/component';
import { setStorageItem, getStorageItem } from './utils/storage';
import './styles.scss';
import { ThemeContext, useTheme } from './components/contexts/theme';
import { UserContext, useUser } from './components/contexts/user';



const ACTIVE_RESTAURANT_INDEX_STORAGE_KEY = "activeRestaurantIndex";

export const App = () => {
    const [activeRestaurantId, setActiveRestaurandId] = useState(() => 
    Number(localStorage.getItem(ACTIVE_RESTAURANT_INDEX_STORAGE_KEY)));

    const {theme, toggleTheme} = useTheme();
    const {currentUser, login, logout} = useUser();


    const themeContextValue = useMemo(
      () => ({theme, toggleTheme}),
      [theme, toggleTheme]
    );

    const userContextValue = useMemo(
      () => ({currentUser, login, logout}),
      [currentUser, login, logout]
    );
    
    return (
      <ThemeContext.Provider value = {themeContextValue}>
        <UserContext.Provider value = {userContextValue}>
          <Layout className={"wrapper"}>
            <RestaurantTabs 
              onTabClick={setActiveRestaurandId}
              activeRestaurantId={setActiveRestaurandId}
              className={"tabsPadding"}
            />
            
            {activeRestaurantId ? (
              <Restaurant restaurantId={activeRestaurantId} className={"restaurantsNameCentering"}/>
              ) : (
                <span>Selected Restaurant</span>
            )}
          </Layout>
        </UserContext.Provider>
      </ThemeContext.Provider>
    )
}