const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const DECREMENT3 = "DECREMENT3";
const CLEAR = "CLEAR";

const countReducer = function(state, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.value;
    case DECREMENT:
      return state - action.value;
    case DECREMENT3:
      return state - 3;
    case CLEAR:
      return 0;
    default:
      return state;
  }
};

export default countReducer;