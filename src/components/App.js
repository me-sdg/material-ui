/* eslint-disable no-unused-vars */
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme';
import Header from './ui/Header';
import '../assets/css/styles.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<div>Home</div>} />
          <Route exact path='/services' element={<div>Services</div>} />
          <Route exact path='/about' element={<div>About Us</div>} />
          <Route exact path='/contact' element={<div>Contact Us</div>} />
          <Route exact path='/submenu1' element={<div>submenu1 content</div>} />
          <Route exact path='/submenu2' element={<div>submenu2 content</div>} />
          <Route exact path='/submenu3' element={<div>submenu3 content</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
