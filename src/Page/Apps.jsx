import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import AllApps from './AllApps';

const Apps = () => {
    const data =useLoaderData();
    return (
        <div>
            <h1 className='text-center font-bold text-2xl md:text-3xl mt-[20px] md:mt-[50px]'>Our All Applications</h1>
            <p className='text-[#627382] text-center mt-[15px]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[30px] place-items-center'>
                <Suspense fallback='Loading ....'>
                    {
                        data.map(app => <AllApps key={app.id} app={app}></AllApps>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Apps;