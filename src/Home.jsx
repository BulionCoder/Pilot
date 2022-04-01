import React from 'react';
import Banner from './Banner/Banner';
import {BackTop} from 'antd';
import Pilots from './Pilots/Pilots';
import './style/generic.scss';
const Home = () => (
    <>
        <Banner />
        <Pilots />
        <BackTop>
            <div className='back-top'>UP</div>
        </BackTop>
    </>

)

export default Home;