import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { countDecrement, countIncrement } from '../store/actions/countActions'

function App() {
  const currentValue = useSelector((state) => state.count.currentValue);
  const dispatchIncrementValue = useDispatch()
  const dispatchDecrementValue = useDispatch()
  return (
    <div>
      {currentValue}
      <br />
      <button onClick={()=>dispatchIncrementValue(countIncrement(currentValue + 1))}> + </button>
      <button onClick={()=>dispatchDecrementValue(countDecrement(currentValue - 1))}> - </button>
    </div>
  );
}

export default App;
