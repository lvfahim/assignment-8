import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import DoImg from '../assets/icon-downloads.png';
import StarImg from '../assets/icon-ratings.png';
import RevImg from '../assets/icon-review.png'
const AppDetails = () => {
    const {Id} =useParams();
    const Ids=parseInt(Id)
    const data =useLoaderData()
    const app =data.find(apps => apps.id === Ids)
    const { image, ratingAvg, downloads, title,companyName,reviews,size } = app
    return (
        <div className='max-w-[1440px] mx-auto mt-[80px]'>
            <div className='flex gap-[40px]'>
                <div>
                    <img className='w-[350px] h-[350px] rounded-xl' src={image} alt="" />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold '>App Name : {title}</h1>
                    <p className='mt-[10px]'>Developed by : <span className='text-[#632ee3]'>{companyName}</span></p>
                    <div className='flex gap-5 mt-[60px] items-center'>
                        <div>
                            <img src={DoImg} alt="" />
                          <h5>Downloads</h5>
                          <h1 className='text-2xl font-bold'> {downloads}</h1>
                        </div>
                        <div>
                            <img src={StarImg} alt="" />
                            <h5>Average Ratings</h5>
                           <h1 className='text-2xl font-bold'> {ratingAvg}</h1>
                        </div>
                        <div>
                            <img src={RevImg} alt="" />
                            <h5>Total Reviews</h5>
                            <h1 className='text-2xl font-bold'>{reviews}</h1>
                        </div>
                    </div>
                    <button className='btn p-4 bg-[#00D390] mt-[20px]'>Install Now {size} MB</button>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;