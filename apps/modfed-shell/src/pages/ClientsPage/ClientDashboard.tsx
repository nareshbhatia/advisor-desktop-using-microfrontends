import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Card } from 'ui';

export function ClientDashboard() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>Client Profile</Card>
      </Grid>
      <Grid item xs={12}>
        <Card>Net Worth</Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>Asset Allocation</Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>Performance</Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>Accounts</Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>Insights</Card>
      </Grid>
    </Grid>
  );
}
