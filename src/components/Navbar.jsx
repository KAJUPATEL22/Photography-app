import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Container, IconButton, Drawer, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import '@fontsource/playfair-display';
import '@fontsource/lato'; 

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const drawerList = (
    <Box
      sx={{
        width: 250,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#000', // Black background for drawer
        color: '#fff', // White text
        transition: '0.3s ease-in-out',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        <IconButton onClick={toggleDrawer(false)} sx={{ color: '#fff' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ backgroundColor: '#fff' }} />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {[
          { text: 'Home', path: '/' },
          { text: 'Gallery', path: '/gallery' },
          { text: 'About', path: '/about' },
        ].map(({ text, path }) => (
          <Button
            key={text}
            color="inherit"
            component={Link}
            to={path}
            onClick={toggleDrawer(false)}
            sx={{
              textAlign: 'center',
              color: '#fff',
              transition: '0.3s ease-in-out',
              '&:hover': {
                backgroundColor: '#444', // Darker shade on hover
                transform: 'scale(1.05)',
              },
            }}
          >
            {text}
          </Button>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#000', // Black background for navbar
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)', // Soft shadow for depth
          borderRadius: '0 0 20px 20px', // Curvy bottom corners
        }}
      >
        <Container>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ display: { xs: 'block', sm: 'none' }, transition: '0.3s' }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon sx={{ color: '#fff' }} />
              </IconButton>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  color: '#fff', // White text for the title
                  transition: 'color 0.3s',
                  marginLeft: '1rem', // Margin for spacing
                  '&:hover': { color: '#ffccbc' }, // Light color on hover
                  // display: { xs: 'block', sm: 'block' }, // Hide on small screens
                }}
              >
               DP Reflections
              </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
              {[
                { text: 'Home', path: '/' },
                { text: 'Gallery', path: '/gallery' },
                { text: 'About', path: '/about' },
              ].map(({ text, path }) => (
                <Button
                  key={text}
                  color="inherit"
                  component={Link}
                  to={path}
                  sx={{
                    fontFamily: "'Lato', sans-serif",
                    color: '#fff', // White text
                    transition: 'color 0.3s ease-in-out, transform 0.3s',
                    '&:hover': {
                      color: '#ffccbc',
                      transform: 'scale(1.1)',
                    },
                    marginLeft: '1rem', // Margin for spacing
                  }}
                >
                  {text}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: '#000', // Black background for drawer
            color: '#fff', // White text
            borderRight: 'none',
            transition: 'transform 0.3s ease',
            transform: open ? 'translateX(0)' : 'translateX(-100%)',
          },
        }}
      >
        {drawerList}
      </Drawer>
    </>
  );
};

export default Navbar;
