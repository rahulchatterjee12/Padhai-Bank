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
                        paddingX: 5,
                        paddingY: 5,
                        margin: 5,
                        color: '#333',
                        boxShadow: 2,
                        display: 'flex',
                        justifyContent: 'space-around',
                        borderRadius: 3,
                    }}>
                    <Box
                        sx={{
                            maxWidth: 550
                        }}
                    >
                        <Typography variant='h5' sx={{ fontSize: 30, fontWeight: 600 }} component={'h3'}>{item.title}</Typography>
                        <Typography variant='body1' sx={{ maxWidth: '60%', fontSize: 15 }} component={'p'}>{item.desc}</Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 5,
                                marginTop: 2
                            }}>
                            <div className='flex  gap-3'>
                                <MenuBookIcon sx={{ color: "#ff783d" }} />
                                <Typography variant='body2' component={'p'}>{item.courseCount}</Typography>
                            </div>
                            <div className='flex  gap-3'>
                                <QueryBuilderIcon sx={{ color: "#ff783d" }} />
                                <Typography variant='body2' component={'p'}>{item.time}</Typography>
                            </div>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 5,
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
                                background: "#ff783d", marginTop: 4,
                                ":hover": { background: 'white', border: 1, borderColor: "#ff783d", color: "#ff783d" }
                            }} >
                            Know More
                        </Button>
                    </Box>
                    <Box>
                        <img src={item.img} className='object-scale-down w-[320px] h-[444px] rounded-sm' alt="" />
                    </Box>
                </Card >
            ))}

        </>
    )
}

export default CoursesCard;