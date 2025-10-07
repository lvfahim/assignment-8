import React from 'react';
import Barnar from '../Component/Limited/Barnar';
import { useLoaderData } from 'react-router';
import SomeApp from './SomeApp';

const Home = () => {
    const data=useLoaderData()
    return (
        <div>
            <Barnar></Barnar>
            <SomeApp data={data}></SomeApp>
        </div>
    );
};

export default Home;