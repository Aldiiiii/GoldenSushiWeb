import { FETCH_ITEMS_SUCCESS } from "./actionTypes";

export const fetchItemsSuccess = payload  => {
    return {type: FETCH_ITEMS_SUCCESS, payload}
}

export const fetchItemsStart = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3000/items", {
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