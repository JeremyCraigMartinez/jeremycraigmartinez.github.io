import type { ActionTypes } from "./actions";

const initialState = {
  count: 0,
};

export default function home(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
