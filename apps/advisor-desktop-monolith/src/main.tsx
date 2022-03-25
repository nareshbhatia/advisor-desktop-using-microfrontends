import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { createApolloClient } from 'graphql-utils';
import { ClientContextProvider, setChartOptions, theme } from 'ui-common';
import { App } from './App';

// Initialize charts
setChartOptions();

// Create Apollo Client
const apolloClient = createApolloClient(import.meta.env.VITE_API_URL as string);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <ClientContextProvider>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <App />
        </ThemeProvider>
      </ClientContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
