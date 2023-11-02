import { FETCH_ITEMS_SUCCESS } from "../actions/actionTypes";

const initialState = {
  data: [],
};

export default function itemsReducer(state = initialState, action) {
  if (action.type === FETCH_ITEMS_SUCCESS) {
    return { ...state, data: action.payload };
  } else {
    return state;
  }
}
