import React from 'react';
import Navdar from '../Component/FixComponent/Navdar';
import { Outlet } from 'react-router';
import Footer from '../Component/FixComponent/Footer';

const Root = () => {
    return (
        <div>
            <Navdar></Navdar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;