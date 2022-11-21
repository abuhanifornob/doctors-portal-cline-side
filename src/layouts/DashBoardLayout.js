import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shareds/Navbar/Navbar';

const DashBoardLayout = () => {
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
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;
