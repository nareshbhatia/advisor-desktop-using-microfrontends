import * as React from 'react';
import Box from '@mui/material/Box';

const boxShadow =
  '0px 11px 4px rgba(0, 0, 0, 0.01), 0px 6px 4px rgba(0, 0, 0, 0.05), 0px 3px 3px rgba(0, 0, 0, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.09), 0px 0px 0px rgba(0, 0, 0, 0.1)';

const border = '1px solid #F0F0F0';

export const Card: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        height: '100%',
        boxShadow,
        border,
        borderRadius: '0.5rem',
      }}
    >
      {children}
    </Box>
  );
};
