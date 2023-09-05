import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const SectionTitle = ({ titelOne, titleTwo, subTitle = null }) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    gap: 1,
                    justifyContent: { xs: 'center', md: 'start' },
                    marginBottom: '16px',
                }}>
                <Typography
                    sx={{
                        color: '#012478',
                        fontSize: { sx: '28px', md: '46px' },
                        fontWeight: 600,
                    }}
                >
                    {titelOne}
                </Typography>
                <Typography
                    sx={{
                        color: '#3785D7',
                        fontSize: { sx: '28px', md: '46px' },
                        fontWeight: 600
                    }}
                >
                    {titleTwo}
                </Typography>
            </Box>
            {subTitle &&
                <div className='md:block hidden'>
                    <Typography
                        sx={{
                            color: '#012478',
                            fontWeight: 550,
                            fontSize: '20px',
                            marginBottom: '16px'
                        }}
                    >
                        {subTitle}</Typography>
                </div>
            }
        </>
    )
}

SectionTitle.prototype = {
    titelOne: PropTypes.string,
    titleTwo: PropTypes.string,
    subTitle: PropTypes.string
}

export default SectionTitle;