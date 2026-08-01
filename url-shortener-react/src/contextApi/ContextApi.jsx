import { createContext, useContext, useMemo, useState } from "react";

const ContextApi = createContext();

export const ContextProvider = ({ children }) => {
    const [token, setToken] = useState(
        () => localStorage.getItem("JWT_TOKEN") || null
    );
    const value = useMemo(
        () => ({
            token,
            setToken,
        }),
        [token]
    );
    return (
        <ContextApi.Provider value={value}>
            {children}
        </ContextApi.Provider>
    );
};
export const useStoreContext = () => useContext(ContextApi);