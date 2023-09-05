import React from 'react';
import Carousel from '../components/Home/Carousel';
import Highlights from '../components/Home/Highlights';
import TopFiveCourses from '../components/Home/TopFiveCourses';
import LiveClasses from '../components/Home/LiveClasses';
import CourseByCategory from '../components/Home/CourseByCategory';
import CourseForGrowth from '../components/Home/CourseForGrowth';

const Home = () => {
    return (
        <div>
            {/* Section 2 */}
            <Carousel />
            {/* Section 3 */}
            <div className='hidden md:block'>
                <Highlights />
            </div>
            {/*Section 4  */}
            <TopFiveCourses />
            {/* Section 5 */}
            <LiveClasses />
            {/* Section 6 */}
            <CourseByCategory />
            {/* Section 7 -  */}
            <CourseForGrowth />
        </div>
    )
}

export default Home