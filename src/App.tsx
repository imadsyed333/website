import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './ui/components/Navbar';
import { ThemeProvider } from '@emotion/react';
import { theme } from './themes';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HomePage } from './ui/pages/HomePage';
import { AboutPage } from './ui/pages/AboutPage';
import { ProjectsPage } from './ui/pages/ProjectsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box sx={{
          display: 'flex',
          height: '100vh',
          width: '100vw',
          justifyContent: 'center'
        }}>
          <BrowserRouter>
            <Navbar />
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              mt: '70px',
            }}>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/projects' element={<ProjectsPage />} />
              </Routes>
            </Box>
          </BrowserRouter>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
