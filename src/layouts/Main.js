import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shareds/Footer/Footer';
import Navbar from '../pages/Shareds/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;