import { createContext, useState } from "react";
export let userContext=createContext();
export default function  UserContextProvider({children}){
    const [isLogin, setLogin] = useState(!!localStorage.getItem('userToken'));
        return <userContext.Provider value={{isLogin,setLogin}}>
    {children}
    </userContext.Provider>
}