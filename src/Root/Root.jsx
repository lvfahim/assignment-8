import React from 'react';
import Navdar from '../Component/FixComponent/Navdar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navdar></Navdar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;