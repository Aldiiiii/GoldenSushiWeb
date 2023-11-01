import { FETCH_ITEMS_SUCCESS } from "../actions/actionTypes";

const initialState = {
  items: [],
};

export default function itemsReducer(state = initialState, actions) {
  if (FETCH_ITEMS_SUCCESS) {
    return { ...state, items: actions.payload };
  } else {
    return state;
  }
}
