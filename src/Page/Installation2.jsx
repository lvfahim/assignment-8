import React, { useContext } from 'react';
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { removeFfromsLS } from '../StoreData/DeletData';
import { AppsContext } from '../Root/Root';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Installation2 = ({ app }) => {
    const { id, image, downloads, title, size, ratingAvg } = app || {}
    const [apps, setApps] = useContext(AppsContext)
    // console.log(app)
    const handleInstall = () => {
        removeFfromsLS(id);
        const filterData = apps.filter(app => app.id !== id)
        setApps(filterData)
        MySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }


    return (
        <div className='w-[1440px] mx-auto'>
            <div className='flex justify-between items-center shadow p-2 w-[1440px] mx-auto mt-[20px] rounded-xl'>
                <div className='flex gap-4 '>
                    <div className='flex justify-center '>
                        <img className='w-[80px] h-[80px] rounded-2xl' src={image} alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>App Name: {title}</h1>
                        <div className='flex gap-3 mt-1'>
                            <h1 className='text-xl flex items-center gap-1'><FaArrowAltCircleDown /> {downloads}</h1>
                            <p className='text-xl flex items-center gap-1'><FaStar /> {ratingAvg}</p>
                            <h2 className='text-xl'>{size} MB</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleInstall(id)} className='btn text-xl bg-green-400'>Unistaill</button>
                </div>
            </div>
        </div>
        // <div></div>
    );
};

export default Installation2;