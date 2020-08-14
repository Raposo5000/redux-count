export function countIncrement(newValue) {
  return { type: "INCREMENT", payload: newValue };
}

export function countDecrement(newValue) {
  return { type: "DECREMENT", payload: newValue };
}
