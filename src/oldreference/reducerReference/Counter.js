import React, { useReducer } from 'react';

function Counter() {
  const countReducer = (state, action) => {
    if (action.type === 'PLUS') return { count: state.count + 1 };
    if (action.type === 'MINUS') return { count: state.count - 1 };
  };
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'PLUS' })}>+</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>-</button>
    </div>
  );
}
export default Counter;
