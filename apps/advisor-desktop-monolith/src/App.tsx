import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import {
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

const boxShadow =
  '0px 11px 4px rgba(0, 0, 0, 0.01), 0px 6px 4px rgba(0, 0, 0, 0.05), 0px 3px 3px rgba(0, 0, 0, 0.08), 0px 1px 1px rgba(0, 0, 0, 0.09), 0px 0px 0px rgba(0, 0, 0, 0.1)';

const border = '1px solid #F0F0F0';

const Panel: React.FC = ({ children }) => {
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
              <Panel>
                <ClientProfileContainer />
              </Panel>
            </Grid>
            <Grid item xs={12}>
              <Panel>
                <ClientNetWorthContainer />
              </Panel>
            </Grid>
            <Grid item xs={12} md={6}>
              <Panel>
                <ClientAssetAllocationChartContainer />
              </Panel>
            </Grid>
            <Grid item xs={12} md={6}>
              <Panel>
                <ClientPerformanceChartContainer />
              </Panel>
            </Grid>
            <Grid item xs={12} md={6}>
              <Panel>
                <ClientAccountsContainer />
              </Panel>
            </Grid>
            <Grid item xs={12} md={6}>
              <Panel>
                <ClientInsightsContainer />
              </Panel>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}
