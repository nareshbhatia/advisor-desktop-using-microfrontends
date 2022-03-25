import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const NotFoundPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" component="div">
        Page Not Found
      </Typography>
    </Box>
  );
};
