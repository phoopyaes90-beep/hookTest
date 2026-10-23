
import {useState, type ReactNode} from "react";
import { CounterContext } from "./CounterContext";


function CounterProvider({ children }: {children: ReactNode}){
    const [count,setCount]=useState(0);
    const increase = () => {
        setCount(prev => prev+1);
    };
    const decrease = () => {
        setCount(prev => prev-1);
    };
    return (
        <CounterContext.Provider value={{count, increase, decrease}}>
            {children}
            </CounterContext.Provider>
    );

}

export default CounterProvider;