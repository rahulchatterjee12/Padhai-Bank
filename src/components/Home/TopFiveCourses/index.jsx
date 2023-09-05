import React from 'react'
import Box from '@mui/material/Box';
import CoursesCard from './CoursesCard';
import CouresMenu from './CouresMenu';

const Title = () => {
    return (
        <>
            <h2 className='text-center text-4xl font-bold text-[#333] my-2'>Digital Entrepreneurship Bundles</h2>
            <div className='flex justify-center'>
                <div
                    style={{
                        background: '#ff783d',
                        height: '2px',
                        width: '7%'
                    }}
                />
            </div>
            <h3 className='text-center text-[#333] my-3 mb-5'>Choose from the wide range of skillful courses to crack the ultimate code of success in the social media world.</h3>
        </>
    )
}




const TopFiveCourses = () => {
    return (
        <div className='mt-5'>
            <Title />
            <div className='flex justify-around'>
                <div className='sm:block hidden'>
                    <Box
                        sx={{
                            width: '200px',
                            minHeight: '400px'
                        }}
                    >
                        <CouresMenu />
                    </Box>
                </div>
                <Box
                    sx={{
                        width: '1000px',
                        maxHeight: { xs: 'full', md: '600px' },
                        overflow: 'scroll'
                    }}
                >
                    <CoursesCard />
                </Box>
            </div>
        </div>
    )
}

export default TopFiveCourses