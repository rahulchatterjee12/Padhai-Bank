import { Box, Typography } from '@mui/material';
import React from 'react'
import TrainingCart from './TrainingCart';


const Title = () => {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1
            }} >
                <Typography
                    sx={{
                        color: '#012478',
                        fontSize: '48px',
                        fontWeight: 600
                    }}
                >
                    Sunday
                </Typography>
                <img src={'images/Home/live-classes/live.png'} className='object-scale-down' width={86} height={39} />
                <Typography
                    sx={{
                        color: '#012478',
                        fontSize: '48px',
                        fontWeight: 600
                    }}
                >
                    Training
                </Typography>
            </Box>
            <Typography
                sx={{
                    color: '#012478',
                    fontSize: '20px',
                    fontWeight: 600,
                    textAlign: 'center'
                }}
            >
                BY INDUSTRY EXPERTS
            </Typography>
        </Box>
    )
}

const LiveClasses = () => {
    return (
        <div>
            <Box>
                <Title />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                        marginTop: 5,
                        marginBottom: 7
                    }}
                >
                    <TrainingCart />
                    <TrainingCart />
                    <TrainingCart />
                </Box>
            </Box>
        </div>
    )
}

export default LiveClasses;
