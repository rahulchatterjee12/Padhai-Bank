
import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Button, Typography } from '@mui/material';
import "./Carousel.css";

const images = [
  {
    "src": 'images/Home/Carousel/img1.png',
    "alt": "Image 1 for carousel"
  },
]



const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };

  return (
    <div className='flex justify-center bg-[#F9FDFF]'>
      <div className="carousel">
        <Button
          sx={{
            position: 'absolute',
            top: 205,
            height: 100,
            left: 30
          }}
          startIcon={<ArrowBackIosNewIcon />}
          onClick={prevSlide}
        />
        {images.map((item, idx) => {
          return (
            <Box
              key={idx}
              sx={{
                width: '100%',
                height: { xs: '550px', md: '460px' },
                background: 'url("images/Home/Carousel/back-img.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              <Box>
                <div className='flex flex-col md:flex-row justify-between'>
                  <div className='my-auto ml-2  md:ml-[130px]'>
                    <Typography
                      sx={{
                        color: '#012478',
                        fontSize: { xs: '36px', md: '52px' },
                        fontWeight: 600,
                        lineHeight: '66px',
                        width: { xs: '325px', md: '522px' },
                        textAlign: { xs: 'center', md: 'start' },
                        marginX: { xs: '15px', md: '1px' }
                      }}
                    >
                      Learn Any Course for
                      <span
                        style={{
                          color: '#FD5464',
                          borderBottom: '12px solid yellow'
                        }}
                      >
                        &nbsp;Free &nbsp;
                      </span>
                      in your own Language
                    </Typography>
                    <div className='flex justify-center'>
                      <Button
                        variant='contained'
                        sx={{
                          background: '#3785D7',
                          borderRadius: '4px',
                          padding: '0.54vw 4vw',
                          boxShadow: '4px 4px 16px #A6D1FF',
                          fontSize: '20px',
                          marginTop: '23px'
                        }}
                      >
                        Join For Free</Button>
                    </div>
                  </div>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      marginTop: 5,
                      background: 'url("images/Home/Carousel/back-img.png")',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                      backgroundPosition: 'bottom'
                    }}
                  >
                    <h2 className='md:hidden block text-[#92AAE5] text-center align-bottom mt-auto pb-[50px] text-[12px]'> Available in</h2>
                    <Box
                      sx={{
                        width: { xs: '195px', md: '522px' },
                        height: { xs: '220px', md: '460px' },
                      }}>
                      <img
                        className='mx-[5px] md:mx-[25px] '
                        src="images/Home/Carousel/home-banner.png" alt="" />
                    </Box>
                  </Box>
                </div>
                <img src="images/Home/Carousel/langs.png" alt="Lang" className='md:hidden block md:mt-0 mt-[-49px]' />
              </Box>
            </Box>
          );
        })}

        <Button
          sx={{
            position: 'absolute',
            top: 205,
            height: 100,
            right: 30
          }}
          startIcon={< ArrowForwardIosIcon />}
          onClick={nextSlide}
        />

        <span className="indicators">
          {images.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    </div >
  )
}

export default Carousel;