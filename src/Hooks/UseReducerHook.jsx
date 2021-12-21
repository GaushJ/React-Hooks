import React from "react";
import { useState, useReducer } from "react";

const UseReducerHook = () => {
  // const [count , setCount] = useState(0)

  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return (state += 1);
    } else if (action.type === "DECREMENT") {
      return (state -= 1);
    }
    console.log(state, action);
    return state;
  };
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>{state}</div>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        Dec
      </button>
    </>
  );
};

export default UseReducerHook;
