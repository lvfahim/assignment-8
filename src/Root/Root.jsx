import React, { createContext, useState } from 'react';
import Navdar from '../Component/FixComponent/Navdar';
import { Outlet } from 'react-router';
import Footer from '../Component/FixComponent/Footer';

export const AppsContext = createContext();

const Root = () => {
    const [apps, setApps] = useState([]);


    return (
        <div>
            <Navdar />
            <AppsContext.Provider value={[apps, setApps]}>
                <Outlet />
            </AppsContext.Provider>
            <Footer />
        </div>
    );
};

export default Root;

