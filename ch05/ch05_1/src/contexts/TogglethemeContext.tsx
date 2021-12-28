import React, {createContext, useContext} from 'react'
import type {FC} from 'react'

export type ToggleThemeContextType = {
    toggleTheme: () => void
}

const defaultToggleThemeContext = {
    toggleTheme: () => {}
}
const TogglethemeContext = createContext<ToggleThemeContextType>(
    defaultToggleThemeContext
)
type ToggleThemeContextProps = {
    toggleTheme: () => void
}
export const TogglethemeProvider: FC<ToggleThemeContextProps> = ({
    children,
    toggleTheme
}) => {
    const value = {
        toggleTheme
    }
    return (
        <TogglethemeContext.Provider value={value}>
            {children}
        </TogglethemeContext.Provider>
    )
}
export const useToggleTheme = () => {
    const {toggleTheme} = useContext(TogglethemeContext)
    return toggleTheme
}