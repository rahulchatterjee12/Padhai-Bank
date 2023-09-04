import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'

const ScrollCard = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Box sx={{ marginBottom: 5 }}>
                <Tabs
                    value={value}
                    sx={{
                        width: '100%'
                    }}
                    centered
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    TabIndicatorProps={{
                        style: {
                            width: '10px',
                            height: '10px',
                            marginLeft: '105px',
                            borderRadius: '50px'
                        }
                    }}
                >
                    <Box
                        sx={{
                            padding: '10px',
                            background: '#A6D1FF',
                            width: '230px',
                            height: '125px',
                            borderRadius: '20px'
                        }}
                    >
                        hello
                    </Box>
                </Tabs>
            </Box>
        </div>
    )
}

export default ScrollCard
