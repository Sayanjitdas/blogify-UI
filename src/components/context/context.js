import { createContext } from "react";
import { useState } from "react";
import { GetUserAuthData } from "./localstorage";

export const useGlobalData = () => {
    const [getToken,getUsername] = GetUserAuthData()
    const [token,setToken] = useState(getToken)
    const [user,setUser] = useState(getUsername) 
    const [authenticated,setAuthenticated] = useState(getToken ? true : false)

    const globalData = {
        token:{token,setToken},
        userData:{user,setUser},
        auth:{authenticated,setAuthenticated}
    }
    return globalData;
}

export const GlobalContext = createContext({}) 