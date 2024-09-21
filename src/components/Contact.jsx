// src/components/Contact.jsx
import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';

const Contact = () => {
  return (
    <Container sx={{ p: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Contact Me
      </Typography>
      <Box sx={{ textAlign: 'center', maxWidth: '600px', mx: 'auto', mt: 3 }}>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Your Name"
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Your Email"
            type="email"
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Your Message"
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
            required
          />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Send Message
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;
