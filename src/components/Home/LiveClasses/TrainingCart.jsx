import { Box, Typography } from '@mui/material'
import React from 'react'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
const TrainingCart = () => {
    return (
        <div>
            <Box
                sx={{
                    width: 240,
                    height: 240,
                    background: 'white',
                    borderRadius: 2,
                    boxShadow: 2
                }}
            >
                <img src='images/home/live-classes/test1.jpg' className='w-full' alt='live' />
                <Typography
                    sx={{
                        fontSize: 13.5,
                        fontWeight: 600,
                        padding: 1
                    }}
                >
                    The Art of Effective Communication Skills
                </Typography>
                <Typography
                    sx={{
                        fontSize: 10,
                        paddingX: 1,
                        color: '#ACACAC',
                        fontWeight: 600
                    }}
                >Bharti Motwani</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 3,
                        padding: 1
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 1
                        }}
                    >
                        <CalendarTodayIcon sx={{ fontSize: 14, color: '#ff783d' }} />
                        <Typography sx={{ fontSize: 12, color: '#ACACAC' }}>05 Mar,2023 </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 1
                        }}
                    >
                        <QueryBuilderIcon sx={{ fontSize: 14, color: '#ff783d' }} />
                        <Typography sx={{ fontSize: 12, color: '#ACACAC', }}>3 PM </Typography>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default TrainingCart
