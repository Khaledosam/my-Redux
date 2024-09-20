import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0), dispatch(reset(0));
  };
  return (
    <section
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "40px" }}>{count}</p>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          style={{ color: "black", backgroundColor: "orange" }}
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          style={{ color: "black", backgroundColor: "orange" }}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <input
        style={{ textAlign: "center", fontSize: "20px" }}
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        style={{ color: "black", backgroundColor: "orange" }}
        onClick={() => dispatch(incrementByAmount(addValue))}
      >
        Add Amount
      </button>
      <button
        style={{ color: "black", backgroundColor: "orange" }}
        onClick={() => dispatch(resetAll)}
      >
        Reset
      </button>
    </section>
  );
};
export default Counter;
