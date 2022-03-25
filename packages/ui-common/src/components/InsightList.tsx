import * as React from 'react';
import LineChartIcon from '@mui/icons-material/ShowChart';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const List = styled('ol')({
  marginTop: 8,
  marginBottom: 8,
});

export function InsightList() {
  return (
    <Box sx={{ p: 2, height: '100%' }}>
      <Typography variant="h6" component="h2" sx={{ fontSize: '1rem' }}>
        Insights
      </Typography>

      <Box sx={{ display: 'flex', mt: 2 }}>
        <LineChartIcon />
        <Box sx={{ paddingLeft: '0.5em' }}>
          <Typography>
            Increase the likelihood of your success for Retirement Goal from 60%
            to 95% by:
          </Typography>
          <List>
            <li>
              <Typography>
                Increasing your savings rate to $3000/month
              </Typography>
            </li>
            <li>
              <Typography>
                Changing your allocation to a slightly more aggressive model
              </Typography>
            </li>
          </List>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', mt: 3 }}>
        <DonutLargeOutlinedIcon />
        <Box>
          <Typography sx={{ paddingLeft: '0.5em' }}>
            Your alternative investments underperformed by 70% compared to your
            equities. Consider allocating more of your money to equities to
            maximize your growth.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
