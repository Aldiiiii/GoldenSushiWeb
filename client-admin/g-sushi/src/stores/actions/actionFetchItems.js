import { FETCH_ITEMS_SUCCESS } from "./actionTypes";

export function fetchItemsSuccess(){
    return {type: FETCH_ITEMS_SUCCESS}
}

export const fetchItemsStart = () => {
    return async dispatch => {
        try {
            const response = await fetch("http://localhost:3000/items")
            const responseBody = await response.json()

            dispatch(fetchItemsSuccess(responseBody))
        } catch (error) {
            console.log(error)
        }
    }
}