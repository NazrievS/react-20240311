import { createContext, useCallback, useContext, useState } from "react";


export const ThemeContext = createContext("default");

export function useTheme(defaultTheme = "default") {
    const [theme, setTheme] = useState(defaultTheme);
  
    const toggleTheme = useCallback(() => {
      setTheme((currentTheme) => 
        currentTheme === "default" ? "dark" : "default"
      );
    }, [])
  
    return {theme, toggleTheme};
}

export function useCurrrentTheme () {
    return useContext(ThemeContext)
  }