import { createContext, useCallback, useContext, useState } from "react";

export const UserContext = createContext(null);

export function useUser(defaultUser = null) {
    const [currentUser, setCurrentUser] = useState(defaultUser);
  
    const logout = useCallback(() => setCurrentUser(null), []);
  
    return {
      currentUser,
      login: setCurrentUser,
      logout,
    };
  }

  export function useCurrentUser () {
    return useContext(UserContext);
  }