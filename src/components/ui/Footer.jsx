/* eslint-disable no-unused-vars */
import { makeStyles, useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Hidden } from '@mui/material';
import footerAdornment from '../../assets/images/FooterAdornment.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import Twitter from '../../assets/images/twitter.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.arcBlue,
    width: '100%',
    zIndex: 1298,
    position: 'relative',
  },
  adorment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '20em',
    },
    [theme.breakpoints.down('sm')]: {
      width: '14em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em !important',
  },
  icon: {
    height: '2em',
    width: '2em',
  },
  socialContainer: {
    position: 'absolute',
    right: '1.5em',
    bottom: '1.5em',
    [theme.breakpoints.down('sm')]: {
      right: '0.6em',
    },
  },
}));

function Footer({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justifyContent='center' className={classes.mainContainer}>
          {/* Home */}
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setValue(0)}
                to='/'
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          {/* services */}
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                to='/services'
                className={classes.link}
              >
                Services
              </Grid>

              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                to='/customsoftware'
                className={classes.link}
              >
                Custom software development
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                to='/mobileapps'
                className={classes.link}
              >
                ios/ Android App development
              </Grid>
              <Grid
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
                to='/websites'
                item
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>

          {/*  Revolortion */}
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
                to='/revolution'
                className={classes.link}
              >
                The Recolotion
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
                to='/revolution'
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
                to='/revolution'
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
                to='/revolution'
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          {/*  About us  */}
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to='/about'
                className={classes.link}
              >
                About us
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to='/about'
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                component={Link}
                onClick={() => setValue(3)}
                to='/about'
                className={classes.link}
              >
                Our Team
              </Grid>
            </Grid>
          </Grid>
          {/* Contact Us */}
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                component={Link}
                onClick={() => setValue(4)}
                to='/contact'
                className={classes.link}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img alt='black decorative' src={footerAdornment} className={classes.adorment} />

      <Grid container justifyContent='flex-end' className={classes.socialContainer} spacing={2}>
        <Grid
          item
          component='a'
          href='https://www.facebook.com'
          rel='noopenr noreferrer'
          target='_blank'
        >
          <img src={facebook} alt='facebook logo' className={classes.icon} />
        </Grid>
        <Grid
          item
          component='a'
          href='https://www.twitter.com'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img src={Twitter} alt='Twitter logo' className={classes.icon} />
        </Grid>
        <Grid item href='https://www.instagram.com' rel='noopenr noreferrer' target='_blank'>
          <img src={instagram} alt='instagram logo' className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
