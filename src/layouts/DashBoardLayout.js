import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import Navbar from '../pages/Shareds/Navbar/Navbar';

const DashBoardLayout = () => {
    const{user}=useContext(AuthContext);
    
    const[isAdmin]=useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashBoardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                     <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashBoardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        <li><Link to="/dashboard">My Appointment</Link></li>
                        {
                            isAdmin && 
                            <>
                            <li><Link to="/dashboard/users">All Users</Link></li>
                            <li><Link to="/dashboard/adddoctor">Add a Doctor</Link></li>
                            <li><Link to="/dashboard/manageDoctors">Manage Doctors</Link></li>
                            </>
                            
                        }
                        
                     
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;
