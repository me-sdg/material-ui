/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import CustomSoftware from './CustomSoftware';
import Estimate from './ui/Estimate';
import '../assets/css/styles.css';

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelecteIndex={setSelectedIndex}
        />
        <div style={{ paddingTop: '80px' }}>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/services' element={<Services />} />
            <Route
              exact
              path='/customSoftware'
              element={
                <CustomSoftware
                  setSelecteIndex={setSelectedIndex}
                  setValue={setValue}
                  selectedIndex={selectedIndex}
                />
              }
            />
            <Route
              exact
              path='/about'
              element={
                <About
                  setSelecteIndex={setSelectedIndex}
                  setValue={setValue}
                  selectedIndex={selectedIndex}
                />
              }
            />
            <Route
              exact
              path='/contact'
              element={
                <Contact
                  setSelecteIndex={setSelectedIndex}
                  setValue={setValue}
                  selectedIndex={selectedIndex}
                />
              }
            />
            <Route
              exact
              path='/estimate'
              element={
                <Estimate
                  setSelecteIndex={setSelectedIndex}
                  setValue={setValue}
                  selectedIndex={selectedIndex}
                />
              }
            />
            <Route
              exact
              path='/submenu1'
              element={<div style={{ height: '900px' }}>submenu1 content</div>}
            />
            <Route
              exact
              path='/submenu2'
              element={<div style={{ height: '900px' }}>submenu2 content</div>}
            />
            <Route
              exact
              path='/submenu3'
              element={<div style={{ height: '900px' }}>submenu3 content</div>}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
