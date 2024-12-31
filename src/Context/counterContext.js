import { createContext, useState } from "react";

export const counterContext= createContext();

export default function CounterContextProvider(props){

    let [counter,setCounter] =useState(0);

    return ( 
    <counterContext.Provider value={{counter,setCounter}}>
    {props.children}
    </counterContext.Provider>
    );
}