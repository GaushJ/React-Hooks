import React, { createContext } from "react";
import ContextAPI from "./Hooks/ContextAPI";
import UseEffectHook from "./Hooks/UseEffect";

const FirstName = createContext();

function App() {
  return (
    <>
      {/* <UseEffectHook /> */}
      {/* Provider is used to provide value to consumer */}
      <FirstName.Provider value = {'Gauransh'}>
        <ContextAPI />
      </FirstName.Provider>
    </>
  );
}

export default App;
export  {FirstName};
