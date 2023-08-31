import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CheckIcon from '@mui/icons-material/Check';

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
            <h3 className='text-center text-[#333] my-2'>Choose from the wide range of skillful courses to crack the ultimate code of success in the social media world.</h3>
        </>
    )
}

const CoursesCard = () => {
    return (
        <Card sx={{
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
            <Box>
                <Typography variant='h5' sx={{ fontSize: 30, fontWeight: 600 }} component={'h3'}>Marketing Mastery</Typography>
                <Typography variant='body1' sx={{ maxWidth: '40%', fontSize: 15 }} component={'p'}>They say that good marketing makes the company look smart and great marketing makes the customer feel smart.This bundle shall teach you how to master this very important skill. In this age of digital content creation digital marketing is what you need to put yourself or your clients on the map.</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 5,
                        marginTop: 2
                    }}>
                    <div className='flex  gap-3'>
                        <MenuBookIcon sx={{ color: "#ff783d" }} />
                        <Typography variant='body2' component={'p'}>01 Course</Typography>
                    </div>
                    <div className='flex  gap-3'>
                        <QueryBuilderIcon sx={{ color: "#ff783d" }} />
                        <Typography variant='body2' component={'p'}>15+ Hours</Typography>
                    </div>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: 5,
                        marginTop: 2

                    }}>
                    <div className='flex  gap-3'>
                        <CheckIcon sx={{ color: "#ff783d" }} />
                        <Typography variant='body2' component={'p'}>Live Q&A Support</Typography>
                    </div>
                    <div className='flex  gap-3'>
                        <CheckIcon sx={{ color: "#ff783d" }} />
                        <Typography variant='body2' component={'p'}>13k+ Students Enrolled</Typography>
                    </div>
                    <div className='flex  gap-3'>
                        <CheckIcon sx={{ color: "#ff783d" }} />
                        <Typography variant='body2' component={'p'}>Bizgurukul Certificate</Typography>
                    </div>
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
                <img src="images/Home/Coureses/img1.jpg" className='w-96' alt="" />
            </Box>
        </Card>
    )
}

const TopFiveCourses = () => {
    return (
        <div className='mt-5'>
            <Title />
            <div>
                <CoursesCard />
            </div>
        </div>
    )
}

export default TopFiveCourses