import { FETCH_CATEGORIES_SUCCESS } from "./actionTypes";

export function fetchCategoriesSuccess(payload){
    return {type: FETCH_CATEGORIES_SUCCESS, payload}
}

const baseUrl = "https://sushi.amrinaldi.site"

export const fetchCategoriesStart = () => {
    return async dispatch => {
        try {
            const response = await fetch( baseUrl + "/categories", {
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