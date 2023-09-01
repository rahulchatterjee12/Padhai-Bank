import React from 'react';
import Carousel from '../components/Home/Carousel';
import Highlights from '../components/Home/Highlights';
import TopFiveCourses from '../components/Home/TopFiveCourses';
import LiveClasses from '../components/Home/LiveClasses';

const Home = () => {
    return (
        <div>
            {/* Banner / Slider—Primeshala section 2 */}
            <Carousel />
            {/* Primeshala section 3 */}
            <Highlights />
            {/*Entrepreneurship Bundle—Primeshala section 4  */}
            <TopFiveCourses />
            {/* Sunday Training—Primeshala section 5 */}
            <LiveClasses />
        </div>
    )
}

export default Home