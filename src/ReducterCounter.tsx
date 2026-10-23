
import { useReducer } from "react";
type Action =
    | { type : "increase"}
    | { type : "decrease"};

function reducer(state: number,action: Action):number{
    switch(action.type){
        case "increase":
            return state+1;

            case "decrease":
            return state-1;

            default:
                return state;
    }
}

function ReducterCounter(){
    const[count,dispatch]=useReducer(reducer,0);

    return(
        <div className="flex flex-col items-center gap-5 mt-10">
            <h1 className="text-2xl font-bold">useReducer</h1>
            <h1 className="text-4xl font-bold">{count}</h1>

            <div className="flex gap-4">
                <button
                     onClick={() => dispatch({ type: "increase" })}
                    className="bg-green-500 text-white px-6 py-3 text-xl rounded-lg cursor-pointer"
                >
                    +


                </button>
                <button
          onClick={() => dispatch({ type: "decrease" })}
          className="bg-red-500 text-white px-6 py-3 text-xl rounded-lg cursor-pointer"
        >
          -
        </button>

            </div>

        </div>
    );
}

export default ReducterCounter;