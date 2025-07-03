import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Events from "../pages/Events/Events";
import AddEvent from "../pages/AddEvent/AddEvent";
import MyEvents from "../pages/MyEvents/MyEvents";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        children:[
            {
                path:"login",
                element:<Login />
            },
            {
                path:"register",
                element:<Register />
            },
            {
                path:"events",
                element:<Events />
            },
            {
                path:"add-event",
                element:<AddEvent />
            },
            {
                path:"my-events",
                element:<MyEvents />
            }
        ]
    }
])