import React, { useEffect, useState } from 'react';
import { Box, Paper } from '@mui/material';
import courseData from './data';

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

export default CouresMenu;