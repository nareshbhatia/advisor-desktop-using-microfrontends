import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import { ClientListContainer, ClientProfileContainer } from 'ui-clients';
import {
  Card,
  ClientAccountsContainer,
  ClientAssetAllocationChartContainer,
  ClientInsightsContainer,
  ClientNetWorthContainer,
  ClientPerformanceChartContainer,
  Header,
  SelectClientMessage,
  useClientContext,
} from 'ui-common';

const drawerWidth = 240;

export function App() {
  const { clientId } = useClientContext();
  const isClientSelected = clientId && clientId.length >= 0;

  return (
    <Box sx={{ display: 'flex' }}>
      <Header title="Advisor Desktop" />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <ClientListContainer />
        </Box>
      </Drawer>
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
