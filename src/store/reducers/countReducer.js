const INITIAL_STATE = {
  currentValue: 0,
};

function countReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "INCREMENT":
      const valueIncrement = action.payload;
      return {...state, currentValue: valueIncrement}
      break;
    case "DECREMENT":
      const valueDecrement = action.payload;
      return {...state, currentValue: valueDecrement}
      break;
    default:
      return state
      break;
  }
}

export default countReducer