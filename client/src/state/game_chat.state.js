import IO from "../socket";

export const ADD_MESSAGE = "ADD_MESSAGE";

//
// ============ Reducer ============
//

export default function(state = [], { type, payload }) {
  switch (type) {
    case ADD_MESSAGE:
      return [...state, payload];
    default:
      return state;
  }
}

//
// ============ Actions ============
//

export function addMessage(payload) {
  return dispatch => {
    dispatch({ type: ADD_MESSAGE, payload });
  };
}

export function sendMessage(msg, name, date) {
  return dispatch => {
    IO().gameIO.sendMessage(msg, name, date);
    addMessage({ msg, name, date })(dispatch);
  };
}