import Appointment from "../pages/Appointment/Appointment/Appointment";
import DashBoard from "../pages/DashBoard/DashBoard";
import SignUp from "../pages/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/Main");
const { default: Home } = require("../pages/Home/Home/Home");
const { default: Login } = require("../pages/Login/Login");


 export const routs=createBrowserRouter([

    {
        path:"/",
        element:<Main></Main>,
        children:[{
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>

        },
        {
            path:"/appointment",
            element:<Appointment></Appointment>
        }
        ,{
            path:'/signup',
            element:<SignUp></SignUp>
        }
    ]
    },
    {
        path:"/dashboard",
        element:<PrivetRoute><DashBoard></DashBoard></PrivetRoute>
    }
    
])