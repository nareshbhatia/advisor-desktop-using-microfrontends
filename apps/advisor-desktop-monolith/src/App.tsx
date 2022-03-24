import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import {
  Card,
  ClientAccountsContainer,
  ClientAssetAllocationChartContainer,
  ClientInsightsContainer,
  ClientListSidebarContainer,
  ClientNetWorthContainer,
  ClientPerformanceChartContainer,
  ClientProfileContainer,
  Header,
  SelectClientMessage,
  useClientContext,
} from 'ui';

export function App() {
  const { clientId } = useClientContext();
  const isClientSelected = clientId && clientId.length >= 0;

  return (
    <Box sx={{ display: 'flex' }}>
      <Header title="Advisor Desktop" />
      <ClientListSidebarContainer />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {!isClientSelected && <SelectClientMessage />}
        {isClientSelected && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card>
                <ClientProfileContainer />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <ClientNetWorthContainer />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <ClientAssetAllocationChartContainer />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <ClientPerformanceChartContainer />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <ClientAccountsContainer />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <ClientInsightsContainer />
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}
