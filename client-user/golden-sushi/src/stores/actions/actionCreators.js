import { FETCH_ITEMS_SUCCESS } from "./actionTypes";

export const fetchItemsSuccess = payload => {
    return {type: FETCH_ITEMS_SUCCESS, payload}
}
const baseUrl = "https://sushi.amrinaldi.site"
export const fetchItemsStart = () => {
    return async dispatch => {
        try {
            const response = await fetch(baseUrl + "/pub/items")
            const responseBody = await response.json()

            dispatch(fetchItemsSuccess(responseBody))
        } catch (error) {
            console.log(error)
        }
    }
}