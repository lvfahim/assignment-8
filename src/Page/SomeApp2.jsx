import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

const SomeApp2 = ({ app }) => {
    const { image, ratingAvg, downloads,title } = app
    return (
        <div className='w-[348px] h-[405px] border-1 shadow rounded-2xl border-gray-500'>
            <div className='flex justify-center m-4'> 
                <div className='w-[316px] h-[316px]  flex'>
                    <img className='rounded-2xl' src={image} alt="" />
                </div>
            </div>
            <div>
                <h1 className='mx-5 font-bold text-xl'>{title}</h1>
            </div>
            <div className='flex justify-between  mx-3 items-center'>
                <button className='flex items-center gap-1 text-green-400'><FaStar />{ratingAvg}</button>
                <button className='flex items-center gap-1 text-yellow-400'><FaArrowAltCircleDown />{downloads}</button>
            </div>
        </div>
    );
};

export default SomeApp2;