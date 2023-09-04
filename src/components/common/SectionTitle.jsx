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
                    justifyContent: 'start',
                    marginBottom: '16px'
                }}>
                <Typography
                    sx={{
                        color: '#012478',
                        fontSize: '46px',
                        fontWeight: 600,
                    }}
                >
                    {titelOne}
                </Typography>
                <Typography
                    sx={{
                        color: '#3785D7',
                        fontSize: '46px',
                        fontWeight: 600
                    }}
                >
                    {titleTwo}
                </Typography>
            </Box>
            {subTitle &&
                <Box>
                    <Typography
                        sx={{
                            color: '#012478',
                            fontWeight: 550,
                            fontSize: '20px',
                            marginBottom: '16px'
                        }}
                    >
                        {subTitle}</Typography>
                </Box>
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