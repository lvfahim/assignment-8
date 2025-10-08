import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import DoImg from '../assets/icon-downloads.png';
import StarImg from '../assets/icon-ratings.png';
import RevImg from '../assets/icon-review.png';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer} from 'recharts';

const AppDetails = () => {
  const { Id } = useParams();
  const Ids = parseInt(Id);
  const data = useLoaderData();
  const app = data.find(apps => apps.id === Ids);
  const { image, ratingAvg, downloads, title, companyName, reviews, size, ratings,description } = app;

  return (
    <div className='max-w-[1440px] mx-auto mt-[80px]'>
      <div className='flex gap-[40px]'>
        <div>
          <img className='w-[350px] h-[350px] rounded-xl' src={image} alt="" />
        </div>
        <div>
          <h1 className='text-2xl font-semibold '>App Name : {title}</h1>
          <p className='mt-[10px]'>
            Developed by : <span className='text-[#632ee3]'>{companyName}</span>
          </p>

          <div className='flex gap-5 mt-[60px] items-center'>
            <div>
              <img src={DoImg} alt="" />
              <h5>Downloads</h5>
              <h1 className='text-2xl font-bold'>{downloads}</h1>
            </div>
            <div>
              <img src={StarImg} alt="" />
              <h5>Average Ratings</h5>
              <h1 className='text-2xl font-bold'>{ratingAvg}</h1>
            </div>
            <div>
              <img src={RevImg} alt="" />
              <h5>Total Reviews</h5>
              <h1 className='text-2xl font-bold'>{reviews}</h1>
            </div>
          </div>

          <button className='btn p-4 bg-[#00D390] mt-[20px]'>
            Install Now {size} MB
          </button>
        </div>
      </div>
      <div className='w-[1440px] mx-auto border-gray-500 border-1 border-dashed mt-[50px]'>
      </div>
      <div className='mt-[80px] bg-[#f7f7f7] p-6 rounded-xl shadow'>
        <h2 className='text-xl font-semibold mb-4'>Ratings</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            layout="vertical"
            data={ratings}
            margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#FF9900" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className='w-[1440px] mx-auto border-gray-500 border-1 border-dashed mt-[50px]'>
      </div>
      <div>
        <h1 className='text-xl font-semibold mt-[30px] mb-4'>Description</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
