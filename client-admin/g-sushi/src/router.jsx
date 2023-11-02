import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import RegisterAdmin from "./pages/RegisterAdmin";
import Form from "./pages/Form";
import ListItems from "./pages/ItemList";

function authenticatedUserOnly() {
    if (!localStorage.access_token) {
        return redirect('/login')
    } else {
        return null // lanjut ke routenya
    }
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path: "",
            element: <Dashboard />,
            children: [
                {
                    path: "",
                    element: <ListItems />,                    
                },
                {
                    path: "categories",
                    element: <Categories />
                },
                {
                    path: "register",
                    element: <RegisterAdmin />
                },
                {
                    path: "create",
                    element: <Form />
                }
            ],
            loader: authenticatedUserOnly
        },        
        {
            path: "login",
            element: <Login />,
            loader: function isLogin(){
                if(localStorage.access_token){
                    return redirect("/")
                }else{
                    return null
                }
            }
        },
    ],
    
  },
]);

export default router
