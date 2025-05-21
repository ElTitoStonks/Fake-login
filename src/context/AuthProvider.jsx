import { createContext, useState } from "react";

export const FilterContext = createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    const login = (userData) => {
        setUser(userData)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <FilterContext.Provider
            value={{
                user,
                login,
                logout
            }}>
            {children}
        </FilterContext.Provider >
    )
}



