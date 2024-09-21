import React, { useState } from 'react';
import { Grid, Box, Card, CardMedia, Typography, Dialog, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const photos = [
    { id: 1, src: '/images/4348.jpg', title: 'Mountain View' },
    { id: 2, src: '/images/11547.jpg', title: 'Forest Path' },
    { id: 3, src: '/images/15557.jpg', title: 'City Skyline' },
    { id: 4, src: '/images/19180.jpg', title: 'Ocean Sunset' },
    { id: 5, src: '/images/32966.jpg', title: 'Desert Dunes' },
    { id: 6, src: '/images/48064.jpg', title: 'Snowy Peaks' },
    { id: 7, src: '/images/60328.jpg', title: 'Snowy Peaks' },
    { id: 8, src: '/images/63774.jpg', title: 'Snowy Peaks' },
    { id: 9, src: '/images/68389.jpg', title: 'Snowy Peaks' },
    { id: 10, src: '/images/70618.jpg', title: 'Snowy Peaks' },
    { id: 11, src: '/images/73276.jpg', title: 'Snowy Peaks' },
    { id: 12, src: '/images/79566.jpg', title: 'Snowy Peaks' },
    { id: 13, src: '/images/86135.jpg', title: 'Snowy Peaks' },
    { id: 14, src: '/images/94809.jpg', title: 'Snowy Peaks' },
    { id: 15, src: '/images/Homeimg.jpg', title: 'Snowy Peaks' },
];

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handleClickOpen = (photo) => {
        setSelectedPhoto(photo);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => setSelectedPhoto(null), 300); // Delay clearing the photo for animation
    };

    return (
        <Box sx={{ p: 3, position: 'relative', minHeight: '100vh' }}>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(249, 245, 235, 0.8)', // Faded background effect
                    zIndex: 0,
                }}
            />
            <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ zIndex: 1, position: 'relative', fontWeight: 'bold' }}>
                Photo Gallery
            </Typography>
            <Grid container spacing={3} sx={{ zIndex: 1, position: 'relative' }}>
                {photos.map((photo) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
                        <Card
                            sx={{
                                boxShadow: 3,
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 6,
                                },
                            }}
                            onClick={() => handleClickOpen(photo)}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={photo.src}
                                alt={photo.title}
                                sx={{ borderRadius: '8px' }} // Rounded corners
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Modal for displaying the selected photo */}
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                fullWidth
                sx={{
                    '& .MuiDialog-paper': {
                        transition: 'transform 0.5s ease-in-out',
                        transform: open ? 'scale(1)' : 'scale(0)',
                    },
                }}
            >
                <Box sx={{ position: 'relative', backgroundColor: '#f9f5eb', padding: 2, borderRadius: 2 }}>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {selectedPhoto && (
                        <Box
                            sx={{
                                maxHeight: '90vh',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                opacity: open ? 1 : 0,
                                transition: 'opacity 0.5s ease-in-out',
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={selectedPhoto.src}
                                alt={selectedPhoto.title}
                                sx={{
                                    maxHeight: '90vh',
                                    objectFit: 'contain',
                                }}
                            />
                        </Box>
                    )}
                </Box>
            </Dialog>
        </Box>
    );
};

export default Gallery;
