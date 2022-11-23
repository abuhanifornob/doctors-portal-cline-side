import DashBoardLayout from "../layouts/DashBoardLayout";
import Appointment from "../pages/Appointment/Appointment/Appointment";
import AddDoctor from "../pages/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../pages/DashBoard/AllUsers";
import DashBoard from "../pages/DashBoard/DashBoard";
import ManageDoctors from "../pages/DashBoard/ManageDoctors/ManageDoctors";
import Myappointment from "../pages/DashBoard/Myappointment";
import Payment from "../pages/DashBoard/Payment/Payment";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
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
        element:<PrivetRoute><DashBoardLayout></DashBoardLayout></PrivetRoute>,
        children:[
            {
            path:"/dashboard",
            element:<Myappointment></Myappointment>
        },
        {
            path:"/dashboard/users",
            //element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            element:<AllUsers></AllUsers>
        },
        {
            path:"/dashboard/adddoctor",
            //element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            element:<AddDoctor></AddDoctor>
        },
        {
            path:"/dashboard/manageDoctors",
            //element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            element:<ManageDoctors></ManageDoctors>
        },
        {
            path:"/dashboard/payment/:id",
            //element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            element:<Payment></Payment>,
            loader:({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)
        },
      ]
    }
    
])