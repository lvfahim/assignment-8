import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DoImg from '../assets/icon-downloads.png';
import StarImg from '../assets/icon-ratings.png';
import RevImg from '../assets/icon-review.png';
import Err from '../assets/App-Error.png'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { addToLS, getStoryApps } from '../StoreData/Store';
import { AppsContext } from '../Root/Root';


const MySwal = withReactContent(Swal)
const AppDetails = () => {

  const [instal, setInstal] = useState(false)
  const [apps, setApps] = useContext(AppsContext)
  const { Id } = useParams();
  const Ids = parseInt(Id);
  const data = useLoaderData();
   
  const app = data.find(apps => apps.id === Ids);
  const { id, image, ratingAvg, downloads, title, companyName, reviews, size, ratings, description } = app;
  useEffect(() => {
    const instaillApp = getStoryApps();
    if (instaillApp.includes(id)) {
      setInstal(true)
    }
  }, [id]);
  if (app === undefined) {
    return <div>
      <div className='flex justify-center mt-[100px]'>
        <img src={Err} alt="" />
      </div>
      <h1 className='text-center md:text-5xl text-2xl font-semibold'>OPPS!! APP NOT FOUND</h1>
      <p className='text-center text-xl mt-1.5'>The App you are requesting is not found on our system.  please try another apps</p>
    </div>;
  }
  


  const heandleButton = (id) => {
    setInstal(true)
    MySwal.fire({
      title: "Installed",
      text: "You clicked the button!",
      icon: "success"
    });
    addToLS(id);
    setApps([...apps, app]);

  }


  return (
    <div className='max-w-[1440px] mx-auto mt-[80px]'>
      <div className='md:flex block gap-[40px] '>
        <div className='flex justify-center'>
          <img className='w-[350px] h-[350px] rounded-xl ' src={image} alt="" />
        </div>
        <div className='ml-[50px] md:ml-0 mt-4 md:mt-0'>
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
            <button onClick={() => { heandleButton(id) }} disabled={instal} className='btn p-4 bg-[#00D390] mt-[20px]'>
              {instal ? ' Installed' : `Install Now ${size} MB`}
            </button>

        </div>
      </div>
      <div className='md:w-[1440px] w-full mx-auto border-gray-500 border-1 border-dashed mt-[50px]'>
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
      <div className='md:w-[1440px] w-full mx-auto border-gray-500 border-1 border-dashed mt-[50px]'>
      </div>
      <div className='ml-[50px] mr-3 md:ml-0 md:mr-0'>
        <h1 className='text-xl font-semibold mt-[30px] mb-4'>Description</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;

