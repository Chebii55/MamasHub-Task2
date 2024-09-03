import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get('name') || 'User';
  const age = params.get('age') || 'N/A';

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
          mt: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome, {name}
        </Typography>
        <Typography variant="h6">
          Your age is: {age}
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
