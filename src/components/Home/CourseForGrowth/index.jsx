import React from 'react'
import SectionTitle from '../../common/SectionTitle'
import { Box } from '@mui/material';
import ScrollCard from './ScrollCard';

const CourseForGrowth = () => {
    return (
        <div className='my-5'>
            <div className='mx-28'>
                <SectionTitle
                    titelOne={'Courses For'}
                    titleTwo={'Career Growth'}
                    subTitle={'PROFESSIONAL COURSES IN YOUR FIELD OF STUDY TO EXPEDITE CAREER GROWTH'}
                />
            </div>
            <Box>
                <ScrollCard />
            </Box>
        </div>
    )
}


export default CourseForGrowth;
