import React, { useContext, useState } from 'react';
import { AppsContext } from '../Root/Root';
import Installation2 from './Installation2';



const Installation = () => {
    const [apps, setApps] = useContext(AppsContext);
    const [sort, setSort] = useState("");
    const handleSort = (type) => {
        setSort(type);
        let sortedApps = [...apps];

        if (type === 'Size') {
            sortedApps.sort((a, b) => a.size - b.size);
        }
        else if (type === 'RatingAvg') {
            sortedApps.sort((a, b) => b.ratingAvg - a.ratingAvg); 
        }
        else if (type === 'Downloads') {
            sortedApps.sort((a, b) => b.downloads - a.downloads); 
        }

        setApps(sortedApps);

    }
    return (
        <div>
            <h1 className='text-center text-3xl md:text-5xl mt-[50px] font-bold'>
                Your Installed Apps
            </h1>
            <p className='text-xl text-center mt-2.5'>
                Explore All Installed Apps
            </p>
            <div className='w-[1440px] mx-auto flex justify-between'>
                <div className='text-2xl'>
                    <h1>{apps.length} Apps Found</h1>
                </div>
                <div>
                    <details className="dropdown">
                        <summary className="btn m-1">Sort By : {sort ? sort : ''} </summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSort('Size')}>Sort By Size</a></li>
                            <li><a onClick={() => handleSort('RatingAvg')}>Sort By RatingAvg</a></li>
                            <li><a onClick={() => handleSort('Downloads')}>Sort By Downloads</a></li>
                        </ul>
                    </details>
                </div>
            </div>
            <div>
                {
                    apps.map(app => <Installation2 key={app.id} app={app}></Installation2>)
                }
            </div>
        </div>
    );
};

export default Installation;
