import { FETCH_ITEMS_SUCCESS } from "./actionTypes";

export const fetchItemsSuccess = payload  => {
    return {type: FETCH_ITEMS_SUCCESS, payload}
}

const baseUrl = "https://sushi.amrinaldi.site"

export const fetchItemsStart = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + "/items", {
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.access_token
                }
            })
            const responseBody = await response.json()
            console.log("ke trigger")
            dispatch(fetchItemsSuccess(responseBody))
        } catch (error) {
            console.log(error)
        }
    }
}