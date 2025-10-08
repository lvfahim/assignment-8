import React, { Suspense } from 'react';
import SomeApp2 from './SomeApp2';
import { Link } from 'react-router-dom';

const SomeApp = ({ data }) => {
    // console.log(data.length)
    return (
        <div>
            <h1 className='font-bold text-center text-4xl mt-[20px]'>Trending Apps</h1>
            <p className='text-center mt-2.5'>Explore All Trending Apps on the Market developed by us</p>
            <div className='max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[30px] place-items-center'>
                <Suspense fallback='Loding....'> 
                    {
                        data.map(app => <SomeApp2 key={app.id} app={app}></SomeApp2>)
                    }
                </Suspense>
            </div>
            <div className='mt-[30px] flex justify-center'>
                <Link to='/apps'><button className="btn bg-gradient-to-l to-[#632ee3] from-[#9f62f2] text-white font-semibold">Show All</button></Link>
            </div>
        </div>
    );
};

export default SomeApp;