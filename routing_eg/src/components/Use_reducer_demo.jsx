import { useReducer  } from 'react';
function handleMultipleActions(dispatch) {
  dispatch({ type: 'increment' });
  dispatch({ type: 'increment' });
//  dispatch({ type: 'reset' });
}
const initialState = { count: 0 };// you can also define inside Use_reducer_demo()function
function counterReducer(state, action) {
   switch (action.type) {
     case 'increment':        return { count: state.count + 1 };
     case 'decrement':        return { count: state.count - 1 };
     case 'reset':        return { count: 0 };
     Default:   return state;
   }
 }


export default function Use_reducer_demo() {


    const [state, dispatch] = useReducer(counterReducer, initialState);
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Count: {state.count}</h2>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button> |{""}
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button> |{""}
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button> |{""}
        <button onClick={() => handleMultipleActions(dispatch)}>Multiple Actions </button>


      </div>
    );
}
