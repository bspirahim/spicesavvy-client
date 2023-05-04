import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;
