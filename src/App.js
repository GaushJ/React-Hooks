import React, { createContext } from "react";
import ContextAPI from "./Hooks/ContextAPI";
import UseContextHook from "./Hooks/UseContextHook";
import UseEffectHook from "./Hooks/UseEffect";
import UseReducerHook from "./Hooks/UseReducerHook";

const FirstName = createContext();

function App() {
  return (
    <>
      {/* <UseEffectHook />
      Provider is used to provide value to consumer
      <FirstName.Provider value = {'Gauransh'}>
        <UseEffectHook /> 
        <ContextAPI />
        <UseContextHook />
      </FirstName.Provider> */}
      <UseReducerHook />
    </>
  );
}

export default App;
export  {FirstName};
