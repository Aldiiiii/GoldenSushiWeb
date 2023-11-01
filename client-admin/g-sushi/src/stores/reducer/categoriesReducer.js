import { FETCH_CATEGORIES_SUCCESS } from "../actions/actionTypes";

const initialState = {
  categories: [],
};

export default function categoriesReducer(state = initialState, actions) {
  if (FETCH_CATEGORIES_SUCCESS) {
    return { ...state, categories: actions.payload };
  } else {
    return state;
  }
}
