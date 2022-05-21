import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    common: {
      arcBlue: '#0b72b9',
      arcOrange: '#ffba60',
    },
    secondary: {
      main: '#000',
    },
  },
  typography: {
    h2: {
      color: 'red',
      fontWeight: 600,
      fontSize: '16px',
    },
  },
});
