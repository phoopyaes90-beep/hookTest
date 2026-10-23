import { useCounterStore } from "./CounterStore";


function ZustandCounter(){
    const count=useCounterStore((state) => state.count);
    const increase=useCounterStore((state) => state.increase);
    const decrease = useCounterStore((state) => state.decrease);

    return (
    <div className="flex flex-col items-center gap-5 mt-10">
      <h1 className="text-2xl font-bold">Zustand</h1>
      <h1 className="text-4xl font-bold">{count}</h1>

      <div className="flex gap-4">
        <button
          onClick={increase}
          className="bg-green-500 text-white px-6 py-3 text-xl rounded-lg cursor-pointer"
        >
          +
        </button>

        <button
          onClick={decrease}
          className="bg-red-500 text-white px-6 py-3 text-xl rounded-lg cursor-pointer"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default ZustandCounter;