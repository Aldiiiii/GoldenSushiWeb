import { FETCH_CATEGORIES_SUCCESS } from "../actions/actionTypes";

const initialState = {
  data: [],
};

export default function categoriesReducer(state = initialState, action) {
    if (action.type === FETCH_CATEGORIES_SUCCESS) {
    return { ...state, data: action.payload };
  } else {
    return state;
  }
}
