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
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 2,
                    marginTop: '36px',
                    height: { xs: '415px', md: 'auto' },
                    overflow: 'scroll',
                    marginX: { xs: '10px', md: 0 }
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