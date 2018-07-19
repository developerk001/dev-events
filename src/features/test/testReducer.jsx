import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testContstants";
import { createReducer } from "../../app/common/util/reducerUtil.jsx";

const initialState = {
  age: 18
};

export const incrementCounter = (state, payload) => {
  return {
    ...state,
    age: state.age + 1
  };
};

export const decrementCounter = (state, payload) => {
  return {
    ...state,
    age: state.age - 1
  };
};

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
});

