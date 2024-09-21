// src/components/About.jsx
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { keyframes } from '@mui/system';

const openDiary = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const About = () => {
  return (
    <Container sx={{ pt: 5, pb: 5 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
          flexDirection: 'column',
          overflowY: 'auto',
          maxHeight: '90vh',
          p: 3,
          borderRadius: '8px',
          backgroundColor: '#ffffff',
          boxShadow: 3,
          animation: `${openDiary} 1s ease-out forwards`, // Slower animation
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 2, fontWeight: 700 }}>
          About Me
        </Typography>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              src="/images/Aboutimg.jpg" // Replace with your photo path
              alt="About Me"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: 2,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: 'left', maxWidth: '600px', mx: 'auto', ml: { sm: 4 }, p: 2, borderRadius: '8px', boxShadow: 1 }}>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
                Hi! I'm <strong>Dhruvil Patel</strong>, a doctor by profession and a photographer by passion. While my days are spent caring for patients, my free time is dedicated to capturing the beauty of the world around us. My photography primarily focuses on landscapes, birds, and animals, where I find tranquility and inspiration. 
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
              Photography has been a significant part of my life for over a decade, and I am always eager to explore new places, meet new people, and create unique memories. Through my lens, I aim to bring the serenity of nature into everyday life, sharing moments that often go unnoticed. Whether it's the vibrant colors of a sunset or the grace of a bird in flight, each image tells a story of nature’s quiet majesty. I believe whether it's the vibrant colors of a sunset or the grace of a bird in flight, each image tells a story of nature’s quiet majesty.
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.6, cursor : 'pointer' }}>
                <strong>Email:</strong> dhruvil707.dp@gmail.com
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 , cursor : 'pointer'}}>
                <strong>Contact No:</strong> +91 95370 84639
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
