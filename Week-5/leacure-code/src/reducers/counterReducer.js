const countReducer = (state, action) => {
  const INCREMENT = "INCREMENT";
  const DECREMENT = "DECREMENT";
  const CLEAR = "CLEAR";

  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      break;
    case CLEAR:
      return 0;
    default:
      return state;
  }
};
export default countReducer;