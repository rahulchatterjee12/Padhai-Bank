import { Box, Typography } from '@mui/material'
import React from 'react'

const CategoryCart = () => {
    return (
        <div>
            <Box
                sx={{
                    background: 'url("images/Home/live-classes/course-category-bg.png")',
                    borderRadius: '10px',
                    border: '1px solid #dadada',
                    height: '120px',
                    width: '355px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    ':hover': {
                        cursor: 'pointer',
                        borderBottom: '5px solid #3785d7'
                    },
                    display: 'flex',
                    gap: 2,

                }}
            >
                <img src="images/Home/live-classes/image.webp" className='w-[70px] h-[70px] rounded-[5px] m-2' alt="Course" />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column'
                    }}>
                    <Typography
                        sx={{
                            color: '#012478',
                            fontSize: '18px',
                            fontWeight: 600,
                            marginTop: 2,
                        }}
                    >
                        Live Training
                    </Typography>
                    <Typography
                        sx={{
                            background: 'white',
                            textAlign: 'center',
                            fontSize: '12px',
                            fontWeight: 600,
                            border: '1px solid #a6d1ff',
                            borderRadius: '20px',
                            color: '#012478',
                            marginBottom: 2
                        }}
                    >
                        7 Courses
                    </Typography>
                </Box>
            </Box>
        </div >
    )
}

export default CategoryCart
