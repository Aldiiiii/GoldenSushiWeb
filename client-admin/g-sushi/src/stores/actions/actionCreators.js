import { LOGIN_SUCCESS } from "./actionTypes"
import { toast } from 'react-toastify';

const baseUrl = "http://localhost:3000"

// export const getLoginSuccess = payload => {
//     return {type: LOGIN_SUCCESS}
// }

export const getLoginStart = (payload, navigate) => {
    return async () => {
        try {
            let response = await fetch(baseUrl + '/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(payload)
            })
            if(!response.ok){
                response = await response.json()
                throw {message: response.message}
            }
            response = await response.json()
            toast.success("Login success", {
                position: toast.POSITION.TOP_RIGHT
            })
            localStorage.access_token = response.access_token
            navigate('/')            
        } catch (error) {
            console.log(error)
            toast.error(error.message, {
                position: toast.POSITION.TOP_RIGHT
              });
        }
    }
}