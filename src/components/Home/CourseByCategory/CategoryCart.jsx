import React from 'react';
import { Box, Typography } from '@mui/material';

const CategoryCart = () => {
    return (
        <div>
            <Box
                sx={{
                    background: 'url("images/Home/live-classes/course-category-bg.png") center',
                    borderRadius: '10px',
                    border: '1px solid #dadada',
                    minHeight: '120px',
                    minWidth: '364px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    ':hover': {
                        cursor: 'pointer',
                        boxShadow: 'inset 0 -5px #3785d7',
                    },
                    display: 'flex',
                    alignItems: 'stretch',
                    gap: '1rem',
                    marginX: 'auto',
                }}
            >
                <img src="images/Home/live-classes/image.webp" className='w-[70px] h-[70px] rounded-[5px] m-2 box-border' alt="Course" />
                <Box>
                    <Typography
                        sx={{
                            color: '#012478',
                            fontSize: '18px',
                            fontWeight: 600,
                            marginTop: 2,
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                            marginBottom: '38px'
                        }}
                    >
                        Live Training
                    </Typography>
                    {/* <Typography
                        sx={{
                            background: 'white',
                            textAlign: 'center',
                            fontSize: '12px',
                            fontWeight: 600,
                            border: '1px solid #a6d1ff',
                            borderRadius: '20px',
                            color: '#012478',
                            marginBottom: 2,
                            paddingX: '8px',
                            marginTop: 'auto',
                            justifyContent: 'start'
                        }}
                    >
                        7 Courses
                    </Typography> */}
                    <span
                        style={{
                            background: '#fff',
                            borderRadius: '20px',
                            color: '#012478',
                            border: '1px solid #a6d1ff',
                            fontSize: '12px',
                            lineHeight: '16px',
                            fontWeight: '600'
                        }}
                        className='px-2 mt-auto  justify-content-start'>
                        7 Courses
                    </span>
                </Box>
            </Box>
        </div >
    )
}

export default CategoryCart
