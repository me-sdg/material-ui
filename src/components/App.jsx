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
import Revolution from './Revolution';
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
            <Route exact path='/revolution' element={<Revolution />} />
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
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;