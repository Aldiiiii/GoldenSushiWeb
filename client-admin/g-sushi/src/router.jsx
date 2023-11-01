import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import RegisterAdmin from "./pages/RegisterAdmin";
import Form from "./pages/Form";
import ListItems from "./pages/ItemList";

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
            ]            
        },
        {
            path: "login",
            element: <Login />
        },
    ]
  },
]);

export default router
