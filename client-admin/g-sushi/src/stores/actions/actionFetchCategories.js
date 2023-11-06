import { FETCH_CATEGORIES_SUCCESS } from "./actionTypes";

export function fetchCategoriesSuccess(payload){
    return {type: FETCH_CATEGORIES_SUCCESS, payload}
}

export const fetchCategoriesStart = () => {
    return async dispatch => {
        try {
            const response = await fetch("http://localhost:3000/categories", {
                headers: {
                    "Content-Type": "application/json",
                    "access_token": localStorage.access_token
                }
            })
            const responseBody = await response.json()
            dispatch(fetchCategoriesSuccess(responseBody))
        } catch (error) {
            console.log(error)
        }
    }
}