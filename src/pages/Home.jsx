import React from 'react';
import Carousel from '../components/Home/Carousel';
import Highlights from '../components/Home/Highlights';
import TopFiveCourses from '../components/Home/TopFiveCourses';
const Home = () => {
    return (
        <div>
            <Carousel />
            <Highlights />
            <TopFiveCourses />
        </div>
    )
}

export default Home