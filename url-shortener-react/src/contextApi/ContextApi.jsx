import { createContext, useContext, useState } from "react";

const ContextApi = createContext();

export const ContextProvider = ({ children }) => {

    const [token, setToken] = useState(
        localStorage.getItem("JWT_TOKEN") || null
    );

    const sendData = {
        token,
        setToken,
    };

    return (
        <ContextApi.Provider value={sendData}>
            {children}
        </ContextApi.Provider>
    );
};


export const useStoreContext = () => {
    return useContext(ContextApi);
};