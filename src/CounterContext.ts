import { createContext } from "react";

type CounterContextType={
    count:number;
    increase: () => void;
    decrease : () => void;
};

export const CounterContext = createContext<CounterContextType>({
    count : 0,
    increase: () => {},
    decrease: () => {}
});