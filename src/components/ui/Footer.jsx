/* eslint-disable prettier/prettier */

import { makeStyles } from '@mui/styles';
import footerAdornment from '../../assets/images/FooterAdornment.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.arcBlue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('sm')]: {
      width: '15em',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <img src={footerAdornment} alt='' className={classes.adornment} />
    </footer>
  );
};
export default Footer;
