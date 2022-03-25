import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from 'ui-common';
import { HomePage, NotFoundPage } from './pages';

function App() {
  return (
    <React.StrictMode>
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
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
