import React from 'react';
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import BanarImg from '../../assets/hero.png'

const Barnar = () => {
    return (
        <div>
            <h1 className='text-7xl text-center mt-[80px] font-bold'>We Build <br /><span className='text-[#632ee3]'>Productive</span> Apps</h1>
            <p className='text-[#627382] text-center mt-4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex justify-center gap-4 mt-4'>
                <button onClick={()=>{window.open('https://play.google.com/store/games?hl=en','_blank')}} className='btn'><FaGooglePlay />Google Play</button>
                <button onClick={()=>{window.open('https://www.apple.com/app-store/','_blank')}} className='btn'><FaAppStoreIos />App Store</button>
            </div>
            <div className='mt-[40px] flex justify-center px-[50px]'>
                <img className='' src={BanarImg} alt="" />
            </div>
            <div className='h-[220px] md:h-[400px] bg-gradient-to-l to-[#632ee3] from-[#9f62f2]'>
                <h1 className='text-white font-bold text-xl md:text-[42px] text-center pt-[20px] md:pt-[80px]'>Trusted by Millions, Built for You</h1>
                <div className='text-white flex justify-evenly mt-[25px] md:mt-[40px]'>
                    <div className='text-center'>
                        <p className='md:text-[20px] md:font-semibold'>Total Downloads</p>
                        <h1 className='text-xl md:text-6xl font-bold'>29.6M</h1>
                        <p className='md:text-[20px] md:font-semibold'>21% more than last month</p>
                    </div>
                    <div className='text-center'>
                        <p className='md:text-[20px] md:font-semibold'>Total Reviews</p>
                        <h1 className='text-xl md:text-6xl font-bold'>906K</h1>
                        <p className='md:text-[20px] md:font-semibold'>46% more than last month</p>
                    </div>
                    <div className='text-center'>
                        <p className='md:text-[20px] md:font-semibold'>Active Apps</p>
                        <h1 className='text-xl md:text-6xl font-bold'>29.6M</h1>
                        <p className='md:text-[20px] md:font-semibold'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Barnar;