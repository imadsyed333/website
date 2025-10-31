import './App.css';
import { Navbar } from './ui/components/Navbar';
import { ThemeProvider } from '@emotion/react';
import { theme } from './themes';
import { Box } from '@mui/material';
import { Route, Routes, useLocation } from 'react-router';
import { routes } from './constants';
import { useEffect, useState } from 'react';

function App() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box sx={{
          display: 'flex',
          height: '100vh',
          width: '100vw',
          justifyContent: 'center'
        }}>
          <Navbar />
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            mt: '70px',
          }}>
            <div className={`page-transition ${transitionStage}`}
              onAnimationEnd={() => {
                if (transitionStage === "fadeOut") {
                  setTransitionStage("fadeIn");
                  setDisplayLocation(location);
                }
              }}>
              <Routes location={displayLocation}>
                {
                  routes.map((page, key) => (
                    <Route key={key} index={'/' === page.path} path={page.path} element={page.element()} />
                  ))
                }
              </Routes>
            </div>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
