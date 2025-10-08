import React, { Suspense, useState } from 'react';
import { useLoaderData } from 'react-router';
import AllApps from './AllApps';
import AppsNotFound from '../Component/FixComponent/AppsNotFound';

const Apps = () => {
    const data = useLoaderData();
    const [searchText, setSearchText] = useState('');
    const filteredApps = data.filter(app =>app.title.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <div>
            <h1 className='text-center font-bold text-2xl md:text-3xl mt-[20px] md:mt-[50px]'>
                Our All Applications
            </h1>
            <p className='text-[#627382] text-center mt-[15px]'>
                Explore All Apps on the Market developed by us. We code for Millions
            </p>

            <div className="navbar w-[90%] md:w-[1440px] mx-auto shadow-sm mt-6">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Apps Found {filteredApps.length}</a>
                </div>
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search apps..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="input input-bordered w-32 md:w-64"
                    />
                </div>
            </div>

            <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[30px] place-items-center'>
                <Suspense fallback='Loading ....'>
                    {
                        filteredApps.length > 0 ? (filteredApps.map(app => <AllApps key={app.id} app={app} />))
                         : (
                            <AppsNotFound></AppsNotFound>
                           )
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Apps;
