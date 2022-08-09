import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const  ThemeProvayder= ({children}) =>{
    const [theme, setTheme] = useState("light")
    const data = {
        theme,
        setTheme

        // theme: theme,
        // setTheme: setTheme
    }

    return (
        <ThemeContext.Provider value= {data}>
            {children}
        </ThemeContext.Provider>
    )
}