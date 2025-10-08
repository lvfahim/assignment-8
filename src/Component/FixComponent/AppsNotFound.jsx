import React from 'react';
import Not from '../../assets/App-Error.png'

const AppsNotFound = () => {
    return (
        <div className='p-[50px]'>
            <div className='flex justify-center '> 
                <img src={Not} alt="" />
            </div>
            <div>
                <h1 className='text-center text-2xl font-semibold'>OPPS!! APP NOT FOUND</h1>
            </div>
        </div>
    );
};

export default AppsNotFound;