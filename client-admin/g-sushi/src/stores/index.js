import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose
} from "redux";
import thunk from 'redux-thunk'


import itemsReducer from "./reducer/itemsReducer";
import categoriesReducer from "./reducer/categoriesReducer";

const reducer = combineReducers({
    items: itemsReducer,
    categories: categoriesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
