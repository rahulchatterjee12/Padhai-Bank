import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CheckIcon from '@mui/icons-material/Check';
import { Box } from '@mui/material';
import courseData from './data';

const CoursesCard = () => {
    return (
        <>
            {courseData.map((item, i) => (
                <Card
                    key={i}
                    id={item.id}
                    sx={{
                        border: .5,
                        borderColor: '#ff783d',
                        paddingX: { xs: '10px', md: 5 },
                        paddingY: { xs: '10px', md: 5 },
                        margin: { xs: '20px', md: 5 },
                        color: '#333',
                        boxShadow: 2,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-around',
                        borderRadius: 3,
                    }}>
                    <div className='md:hidden block'>
                        <img src={item.img} className='object-scale-down w-[220px] h-[305px] rounded-sm' alt="" />
                    </div>
                    <Box
                        sx={{
                            maxWidth: { xs: 'full', md: 550 }
                        }}
                    >
                        <Typography variant='h5' sx={{ fontSize: { xs: '20px', md: '30px' }, fontWeight: 600, textAlign: 'start' }} component={'h3'}>{item.title}</Typography>
                        <Typography variant='body1' sx={{ maxWidth: { xs: 'full', md: '60%' }, fontSize: { xs: '15px', md: 15 }, textAlign: 'start', marginTop: '5px' }} component={'p'}>{item.desc}</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 5,
                                marginTop: 2,
                                alignItems: 'start'
                            }}>
                            <div className='flex  gap-3'>
                                <MenuBookIcon sx={{ color: "#ff783d" }} />
                                <Typography variant='body2' component={'p'}>{item.courseCount}</Typography>
                            </div>
                            <div className='flex  gap-3 flex-nowrap'>
                                <QueryBuilderIcon sx={{ color: "#ff783d" }} />
                                <Typography variant='body2' component={'p'}>{item.time}</Typography>
                            </div>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: { xs: '10px', md: 5 },
                                marginTop: 1,
                                maxWidth: '600px',
                                flexWrap: 'wrap'
                            }}>
                            {item.features.map(((feature, i) => (
                                <div key={i} className='flex'>
                                    <CheckIcon sx={{ color: "#ff783d", marginRight: 2 }} />
                                    <Typography variant='body2' component={'p'}> {feature}</Typography>
                                </div>
                            )))}
                        </Box>
                        <Button
                            variant='contained'
                            sx={{
                                background: "#ff783d", marginTop: { xs: '10px', md: 4 },
                                ":hover": { background: 'white', border: 1, borderColor: "#ff783d", color: "#ff783d" }
                            }} >
                            Know More
                        </Button>
                    </Box>
                    <div className='hidden md:block'>
                        <img src={item.img} className='object-scale-down w-[320px] h-[444px] rounded-sm' alt="" />
                    </div>
                </Card >
            ))}

        </>
    )
}

export default CoursesCard;