import { toast } from "react-toastify";
import { fetchItemsStart } from "./actionFetchItems";
import { fetchCategoriesStart } from "./actionFetchCategories";

// const baseUrl = "http://localhost:3000";
const baseUrl = "https://sushi.amrinaldi.site"

// login
export const getLoginStart = (payload, navigate) => {
  return async () => {
    try {
      let response = await fetch(baseUrl + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        response = await response.json();
        throw { message: response.message };
      }
      response = await response.json();
      toast.success("Login success", {
        position: toast.POSITION.TOP_RIGHT,
      });
      localStorage.access_token = response.access_token;
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};

// create item
export const createItem = (payload, handleClose) => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        response = await response.json();
        console.log(response);
        throw { name: response.message };
      }

      response = await response.json();
      toast.success(`Add Item ${response.item.name} Success`);
      handleClose();
      dispatch(fetchItemsStart());
    } catch (error) {
      toast.error(error.name, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};

// update item
export const updateItem = (payload, handleClose) => {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/items", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw { name: "Edit failed" };
      }

      response = await response.json()
      toast.success("Update Success", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(fetchItemsStart());
      handleClose();
    } catch (error) {
      console.log(error)
      toast.error(error.name, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};

// delete item
export function actDeleteItem(payload) {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/items", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify({id: payload}),
      });
      console.log(response,`<<<<`)
      if(!response.ok){
        throw {name: "Delete failed"}
      }

      response = await response.json()
      toast.success(`Success delete item ${response.name}`, {
        position: toast.POSITION.TOP_RIGHT
      })
      dispatch(fetchItemsStart())
    } catch (error) {
      console.log(error)
      toast.error(error.name, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
}

// create category
export function createCategory(payload, handleClose){
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(payload)
      })
      if(!response.ok){
        throw {name: "Create failed", response}
      }
      response = await response.json()
      toast.success(`Succes add category ${response.name}`, {
        position: toast.POSITION.TOP_RIGHT
      })
      dispatch(fetchCategoriesStart())
      handleClose()
    } catch (error) {
      let response = await error.response.json()
      console.log(error, response)
      toast.error(error.name, {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }
}

// delete category
export function actDeleteCategory(payload) {
  return async (dispatch) => {
    try {
      let response = await fetch(baseUrl + "/categories", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify({id: payload}),
      });

      if(!response.ok){
        throw {name: "Delete failed"}
      }

      response = await response.json()
      toast.success(`Success delete category ${response.name}`, {
        position: toast.POSITION.TOP_RIGHT
      })
      dispatch(fetchCategoriesStart())
    } catch (error) {
      toast.error(error.name, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
}

export function createAdmin(payload, navigate){
  return async () => {
    try {
      let response = await fetch(baseUrl + "/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(payload)
      })
      if(!response.ok){
        throw {name: "Create admin failed", response}
      }
      response = await response.json()
      toast.success(`Create admin success`, {
        position: toast.POSITION.TOP_RIGHT
      })
      navigate("/")
    } catch (error) {
      console.log(error)
      let response = error.response
      response = await response.json()
      toast.error(response.message, {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }
}