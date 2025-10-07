import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import NavImg from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
        const LinkList =<>
        <NavLink to='/'><li className='font-semibold mx-4'>Home</li></NavLink>
        <NavLink to='/apps'><li className='font-semibold mx-4'>Apps</li></NavLink>
        <NavLink to='/installation'><li className='font-semibold mx-4'>Installation</li></NavLink>
        </>

const Navdar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {LinkList}
                    </ul>
                </div>
                <div className='flex items-center gap-1 md:mx-[80px]'>
                    <img className='w-[40px] h-[40px]' src={NavImg} alt="" />
                    <Link><h1 className="text-xl text-[#632ee3]">HERO.IO</h1></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {LinkList}
                </ul>
            </div>
            <div className="navbar-end md:mx-[80px]">
                <button onClick={()=>{window.open('https://github.com/lvfahim','_blank')}} className="btn bg-gradient-to-l to-[#632ee3] from-[#9f62f2] text-white font-semibold"><FaGithub /> Contribute</button>
            </div>
        </div>
    );
};

export default Navdar;