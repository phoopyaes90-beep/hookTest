import CounterProvider from "./CounterProvider";
import Counter from "./Counter";
import ReducerCounter from "./ReducterCounter";
import ZustandCounter from "./ZustandCounter";


function App(){
    return(
     <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        useContext
      </h1>

      <CounterProvider>
        <Counter />
      </CounterProvider>

      <ReducerCounter />

      <ZustandCounter />
    </div>

    );
}

export default App;