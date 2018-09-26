import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});
const decrementCount = ({ decrementBy = 2 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});
const resetCount = ({ reset = 0 } = {}) => ({
  type: 'RESET',
  reset
});
const setCount = ({ setCount = 100 } = {}) => ({
  type: 'SET',
  setCount
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.setCount
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log('subscribe', store.getState());
});

store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount());

/* 
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 1
});

// console.log('INC', store.getState());

store.dispatch({
  type: 'RESET'
});
// console.log('RES', store.getState());

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 1
});
// console.log('DEC', store.getState());
*/
