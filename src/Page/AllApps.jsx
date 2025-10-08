import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { NavLink } from 'react-router';

const AllApps = ({ app }) => {
    const { id,image, ratingAvg, downloads, title } = app
    return (
        <NavLink to={`/apps/${id}`}><div className='w-[348px] h-[425px] border-1 shadow rounded-2xl border-gray-500'>
            <div className='flex justify-center m-4'>
                <div className='w-[316px] h-[316px]  flex'>
                    <img className='rounded-2xl' src={image} alt="" />
                </div>
            </div>
            <div>
                <h1 className='mx-5 font-bold text-xl'>{title}</h1>
            </div>
            <div className='flex justify-between  mx-3 items-center'>
                <button className='flex items-center gap-1 rounded-xl p-2 bg-green-400 text-green-800'><FaStar />{ratingAvg}</button>
                <button className='flex items-center gap-1 rounded-xl p-2 bg-yellow-400 text-yellow-800'><FaArrowAltCircleDown />{downloads}</button>
            </div>
        </div></NavLink>
    );
};

export default AllApps;