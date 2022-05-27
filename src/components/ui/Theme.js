import { createTheme } from '@mui/material/styles';
import { blueGrey, blue, orange } from '@mui/material/colors';

const blueGrey50 = blueGrey[50];
const darkBlue = blue[300];
const orange600 = orange[600];
const arcGrey = '#888';
export default createTheme({
  palette: {
    common: {
      arcBlue: `${darkBlue}!important`,
      arcOrange: `${orange600}!important`,
    },
    secondary: {
      main: `${blueGrey50}!important`,
    },
  },
  typography: {
    h2: {
      color: `${orange600}`,
      fontWeight: 600,
      fontSize: '30px',
      display: 'block',
      marginBottom: '20px',
    },
    h4: {
      fontSize: '25px',
      fontWeight: '600',
      color: `${orange600}`,
    },
    subtitle1: {
      color: `${arcGrey}`,
    },
    tab: {
      textTransform: 'none !important',
    },
  },
});
