import { Box } from '@mui/material';
import React from 'react';
import CategoryCart from './CategoryCart';
import SectionTitle from '../../common/SectionTitle';


const CourseByCategory = () => {
    return (
        <div className='sm:mx-2 md:mx-[117px]'>
            <SectionTitle
                titelOne={'Courses By'}
                titleTwo={'Category'}
                subTitle={'COURSES DESIGNED FOR CONTINUOUS LEARNING TO EXCELL IN ANY FIELD'}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: 'auto',
                    gap: 2,
                    marginTop: '36px'
                }}
            >
                <CategoryCart />
                <CategoryCart />
                <CategoryCart />
                <CategoryCart />
                <CategoryCart />
                <CategoryCart />
                <CategoryCart />
                <CategoryCart />
                <CategoryCart />
                <CategoryCart />
                <CategoryCart />
                <CategoryCart />
            </Box>
        </div>
    )
}

export default CourseByCategory;