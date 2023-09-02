import { Box, Typography } from '@mui/material';
import React from 'react';
import CategoryCart from './CategoryCart';

const Title = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    textAlign: 'center',
                    gap: 1,
                    justifyContent: 'start',
                    marginBottom: '15px'
                }}>
                <Typography
                    sx={{
                        color: '#012478',
                        fontSize: '48px',
                        fontWeight: 700
                    }}
                >
                    Courses By
                </Typography>
                <Typography
                    sx={{
                        color: '#3785D7',
                        fontSize: '48px',
                        fontWeight: 700
                    }}
                >
                    Category
                </Typography>
            </Box>
            <Box>
                <Typography
                    sx={{
                        color: '#012478',
                        fontWeight: 550,
                        fontSize: '20px',
                        marginBottom: '30px'
                    }}
                >COURSES DESIGNED FOR CONTINUOUS LEARNING TO EXCELL IN ANY FIELD</Typography>
            </Box>
        </>
    )
}


const CourseByCategory = () => {
    return (
        <div className='mx-28'>
            <Title />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: 'auto',
                    gap: 2,
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