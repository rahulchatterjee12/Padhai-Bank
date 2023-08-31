import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CheckIcon from '@mui/icons-material/Check';
import { Paper } from '@mui/material';


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
            <h3 className='text-center text-[#333] my-3 mb-5'>Choose from the wide range of skillful courses to crack the ultimate code of success in the social media world.</h3>
        </>
    )
}

const courseData = [
    {
        'id': 1,
        'title': 'Marketing Mastery',
        'desc': 'They say that good marketing makes the company look smart and great marketing makes the customer feel smart.This bundle shall teach you how to master this very important skill. In this age of digital content creation digital marketing is what you need to put yourself or your clients on the map.',
        'courseCount': '01 Course',
        'time': '15+ Hours',
        'features': [
            'Live Q&A Support',
            '13k+ Students Enrolled',
            'Bizgurukul Certificate'
        ],
        'img': 'images/Home/Coureses/img1.jpg',
    },
    {
        'id': 2,
        'title': 'Branding Mastery',
        'desc': "There is an amazing quote that goes, ‘Brands exist because people exist’ and to establish that, there are specific skills we can master. This bundle will help you learn and apply how to project your or your customer’s persona into a brand that shall help scale up your career.",
        'courseCount': '08 Courses',
        'time': '67+ Hours',
        'features': [
            'Live Q&A Support',
            '13k+ Students Enrolled',
            'Bizgurukul Certificate'
        ],
        'img': 'images/Home/Coureses/img2.jpg'
    },
    {
        'id': 3,
        'title': 'Traffic Mastery',
        'desc': 'Digital content consumption is a constant affair but consumption of your content is what counts. Hence, digital traffic management comes into play. Through a set of techniques, tools and basic routines, this bundle teaches you to manage and divert the traffic towards your brand and help maximum conversions.',
        'courseCount': '17 Courses',
        'time': '117+ Hours',
        'features': [
            'Live Q&A Support',
            '13k+ Students Enrolled',
            'Bizgurukul Certificate'
        ],
        'img': 'images/Home/Coureses/img3.jpg'
    },
    {
        'id': 4,
        'title': 'Influence Mastery',
        'desc': 'Influencing traffic to buy your products or services comes with a promise of quality of content. To learn specific skills and master them. This bundle helps you learn specific high paying skills that with practice will ensure more conversions and allow you to start your journey as a professional super fast.',
        'courseCount': '24 Courses',
        'time': '171+ Hours',
        'features': [
            'Live Q&A Support',
            '13k+ Students Enrolled',
            'Bizgurukul Certificate'
        ],
        'img': 'images/Home/Coureses/img4.jpg'
    },
    {
        'id': 5,
        'title': 'Finance Mastery',
        'desc': 'What use is money if you have tons of it but lack the skill to manage it? This is a skill that interestingly you can start with a minimum balance and scale up. This detailed course gives you step wise knowledge of not only how to manage your capital but also how to multiply the same. Balance your day today finances and you shall be great!        ',
        'courseCount': '26 Courses',
        'time': '190+ Hours',
        'features': [
            'Live Q&A Support',
            '13k+ Students Enrolled',
            'Bizgurukul Certificate'
        ],
        'img': 'images/Home/Coureses/img5.jpg'
    },
]


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

const CouresMenu = () => {
    const [activeSection, setActiveSection] = useState(1);

    function scrollToSection(sectionId) {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }


    const handleScroll = () => {
        const sections = [1, 2, 3, 4, 5];
        const scrollPosition = window.scrollY;

        for (const sectionId of sections) {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    setActiveSection(sectionId);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Paper sx={{ width: 320, maxWidth: '100%', marginY: .5 }}>
                {courseData.map(({ title, id }) => (
                    <Box
                        key={id}
                        onClick={() => scrollToSection(id)}
                        sx={{
                            ':hover': {
                                border: .5,
                                borderColor: "#ff783d",
                                borderRadius: 2,
                                boxShadow: '10px 10px 2px -4px #ffc4aa',
                                cursor: 'pointer',
                                transition: 1
                            },
                            border: activeSection === id ? .5 : '',
                            borderColor: activeSection === id ? "#ff783d" : '',
                            borderRadius: activeSection === id ? 2 : '',
                            boxShadow: activeSection === id ? '10px 10px 2px -4px #ffc4aa' : '',
                            cursor: activeSection === id ? 'pointer' : '',
                            background: activeSection === id ? '#fff0eb' : '',
                            paddingX: 2,
                            paddingY: 2,
                            marginY: 1,
                        }}
                    >{title}
                    </Box>
                ))}
            </Paper >
        </>
    )
}

const TopFiveCourses = () => {
    return (
        <div className='mt-5'>
            <Title />
            <div className='flex justify-around'>
                <Box
                    sx={{
                        width: '200px',
                        minHeight: '400px'
                    }}
                >
                    <CouresMenu />
                </Box>
                <Box
                    sx={{
                        width: '1000px',
                        maxHeight: '600px',
                        overflow: 'scroll'
                    }}
                >
                    <CoursesCard />
                </Box>
            </div>
        </div>
    )
}

export default TopFiveCourses