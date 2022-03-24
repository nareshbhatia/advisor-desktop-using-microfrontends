import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { Client } from 'advisor-models';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

interface ClientProfileProps {
  client: Client;
}

export function ClientProfile({ client }: ClientProfileProps) {
  const { photo, name, email, phone, dob, retirementAge } = client;

  return (
    <Box
      sx={{
        p: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'background.paper',
      }}
    >
      <Box sx={{ p: 1 }}>
        <Avatar alt={name} src={photo} sx={{ width: 80, height: 80 }} />
      </Box>
      <Box sx={{ ml: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="h2">
            {name}
          </Typography>
          <Chip
            size="small"
            label="On Track"
            sx={{ ml: 2, backgroundColor: '#DAFCF5' }}
          />
        </Box>
        <Box sx={{ display: 'flex', mt: 0.5 }}>
          <CakeOutlinedIcon sx={{ width: '0.75em', height: '0.75em' }} />
          <Typography sx={{ ml: 1 }}>
            {calculateAge(dob)} • Retirement Age at {retirementAge}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CallOutlinedIcon sx={{ width: '0.75em', height: '0.75em' }} />
          <Typography sx={{ ml: 1 }}>
            <Link href={`tel:${phone}`}>{phone}</Link>
          </Typography>
          <EmailOutlinedIcon
            sx={{ width: '0.75em', height: '0.75em', ml: 2 }}
          />
          <Typography sx={{ ml: 1 }}>
            <Link href={`mailto:${email}`}>{email}</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

function calculateAge(dateString: string) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
