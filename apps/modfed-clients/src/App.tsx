import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { API_URL, createApolloClient } from 'graphql-utils';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClientContextProvider, theme } from 'ui-common';
import { HomePage, NotFoundPage } from './pages';

// Create Apollo Client
const apolloClient = createApolloClient(API_URL);

function App() {
  return (
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <ClientContextProvider>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Router>
          </ThemeProvider>
        </ClientContextProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
