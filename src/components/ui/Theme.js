import { createTheme } from '@mui/material/styles';
import { blueGrey, blue, orange } from '@mui/material/colors';

const blueGrey50 = blueGrey[50];
const darkBlue = blue[100];
const orange600 = orange[600];
export default createTheme({
  palette: {
    common: {
      arcBlue: `${darkBlue}!important`,
      arcOrange: `${orange600}`,
    },
    secondary: {
      main: `${blueGrey50}`,
    },
  },
  typography: {
    h2: {
      color: 'red !important',
      fontWeight: 600,
    },
    tab: {
      textTransform: 'none !important',
    },
  },
});
