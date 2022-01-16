const contactReducer = (state, action) => {
  const SELECT = "SELECT";
  const DESELECT = "DESELECT";

  let newState;

  switch (action.type) {
    case SELECT:
      newState = [...state, action.payload];
      break;
    case DESELECT:
      newState = state.filter((contact) => contact.id !== action.payload.id);
      break;
    default:
      newState = [...state];
  }

  return newState;
};
export default contactReducer;;