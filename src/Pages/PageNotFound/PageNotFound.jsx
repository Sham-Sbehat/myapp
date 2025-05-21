// src/pages/NotFound.jsx
import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ mt: 10, p: 6, textAlign: 'center', width:'100%',marginLeft:'300px' }}>
        <Typography variant="h1" color="error" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Pagge Not Found
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          Sorry , Page Not Exist
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/')}>
         Return Back 
        </Button>
      </Paper>
    </Container>
  );
};

export default NotFound;
