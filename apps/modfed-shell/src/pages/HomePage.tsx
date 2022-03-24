import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage:
          'radial-gradient(circle, #ffffff 0%, #eeeeee 50%, #bdbdbd 100%)',
      }}
    >
      <Box sx={{ width: 600 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Financial Wellness
        </Typography>
        <Typography variant="h5">One client at a time!</Typography>

        <Button
          variant="contained"
          sx={{ mt: 4 }}
          onClick={() => {
            navigate('/clients');
          }}
        >
          Show my clients
        </Button>
      </Box>
    </Box>
  );
};
