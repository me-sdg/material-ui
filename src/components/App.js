/* eslint-disable prettier/prettier */
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import '../assets/css/styles.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <div style={{ paddingTop: '80px' }}>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/services' element={<div style={{ height: '900px' }}>Services</div>} />
            <Route exact path='/about' element={<div style={{ height: '900px' }}>About Us</div>} />
            <Route exact path='/contact' element={<div style={{ height: '900px' }}>Contact Us</div>} />
            <Route exact path='/submenu1' element={<div style={{ height: '900px' }}>submenu1 content</div>} />
            <Route exact path='/submenu2' element={<div style={{ height: '900px' }}>submenu2 content</div>} />
            <Route exact path='/submenu3' element={<div style={{ height: '900px' }}>submenu3 content</div>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
