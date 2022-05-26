/* eslint-disable prettier/prettier */

import { makeStyles } from '@mui/styles';
import {Link} from "react-router-dom";
import Grid from '@mui/material/Grid';
import footerAdornment from '../../assets/images/FooterAdornment.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.arcBlue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: '#fff',
    fontFamily: 'Tahoma',
    fontSize: '.75rem',
    fontWeight: 600,
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
  gridItem:{
    margin:"3em !important"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid container justifyContent='center' className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid item component={Link} to="/" className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid item className={classes.link} component={Link} to="/services">
              Services
            </Grid>
            <Grid item className={classes.link}>
              submenu 1
            </Grid>
            <Grid item className={classes.link}>
              submenu 2
            </Grid>
            <Grid item className={classes.link}>
              submenu 3
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid item className={classes.link} component={Link} to="/about">
              About us
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid item className={classes.link} component={Link} to="/contact">
              Contact us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img src={footerAdornment} alt='' className={classes.adornment} />
    </footer>
  );
};
export default Footer;
