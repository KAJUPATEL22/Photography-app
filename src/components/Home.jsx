import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import '@fontsource/lato'; // Importing font for body text
import '@fontsource/playfair-display'; // Importing font for headings

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundImage: 'url("/images/home1.jpg")', // Replace with your photo path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Makes the background image fixed
        position: 'relative',
        textAlign: 'center',
        padding: 2,
        overflow: 'hidden',
      }}
    >
      {/* Shadow Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
          zIndex: 1,
        }}
      />

      {/* Centered Text */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          color: '#fff', // Light brown shade for initial text color
          maxWidth: '80%',
          animation: `${fadeIn} 2s ease-out forwards`, // Fade-in animation for text
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            letterSpacing: '0.05em',
            mb: 2,
            opacity: 0,
            animation: `${fadeIn} 1.5s ease-out forwards`, // Slide and fade-in animation
            animationDelay: '0.5s',
            '&:hover': {
              color: '#ffccbc', // Slightly lighter color on hover
              transition: 'color 0.3s ease-in-out',
            },
          }}
          gutterBottom
        >
          Welcome to My Photography Portfolio
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "'Lato', sans-serif",
            fontSize: { xs: '1rem', sm: '1rem', md: '1.25rem' },
            letterSpacing: '0.02em',
            lineHeight: 1.5,
            opacity: 0,
            animation: `${fadeIn} 1.5s ease-out forwards`,
            animationDelay: '1s',
            '&:hover': {
              color: '#ffccbc', // Slightly lighter color on hover
              transition: 'color 0.3s ease-in-out',
            },
          }}
        >
         Your Window to Nature’s Wonders.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
