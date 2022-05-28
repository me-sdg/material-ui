/* eslint-disable object-shorthand */
import { makeStyles, useTheme } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Button, Typography, Card, CardContent } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Lottie from 'react-lottie';
import CallToAction from './ui/CallToAction';
import animationData from '../animations/landinganimation/data';
import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/images/customSoftwareIcon.svg';
import mobileIcon from '../assets/images/mobile.svg';
import websiteIcon from '../assets/images/website.svg';
import revolutionBackground from '../assets/images/repeatingBackground.svg';
import infoBackground from '../assets/images/infoBackground.svg';

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    paddingTop: '2em',
    marginLeft: '10%',
  },
  estimateButton: {
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: '50px !important',
    marginRight: '10px !important',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: 10,
  },
  specialText: {
    fontStyle: 'italic',
    color: theme.palette.common.arcOrange,
    fontWeight: '600',
  },
  h4: {
    ...theme.typography.h4,
  },
  subtitle1: {
    marginBottom: '10px !important',
    fontStyle: 'italic',
  },
  boxIcon: {
    marginLeft: '1em',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: '1em',
    },
  },
  learnMoreBtn: {
    [theme.breakpoints.down('sm')]: {
      margin: '10px 0 !important',
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: '10px',
    borderRadius: '15px !important',
    padding: '5em 10em',
    [theme.breakpoints.down('sm')]: {
      padding: '3em 0 !important',
      borderRadius: '0!important',
      width: '100%',
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column'>
      <Grid item>
        {/* -----Hero block------ */}
        <Grid container justifyContent='center' alignItems='center' direction='row'>
          <Grid sm item>
            <Typography variant='h2' align='center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Grid container justifyContent='center' className={classes.buttonContainer}>
              <Grid item>
                <Button className={classes.estimateButton} variant='contained'>
                  Free estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant='outlined'>
                  <span style={{ marginRight: '10px' }}>Learn more</span>{' '}
                  <ButtonArrow width={20} height={20} fill='violet' />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} width='auto' height='auto' />
          </Grid>
        </Grid>
      </Grid>
      {/* -----services 1------ */}
      <Grid
        item
        style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}
      >
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justifyContent={matchesSM ? 'center' : undefined}
        >
          <Grid item>
            <Typography variant='h4'>Services 1</Typography>
            <Typography variant='subtitle1' className={classes.subtitle1}>
              caption description , caption description
            </Typography>
            <Typography variant='subtitle1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <br />
            <Button variant='outlined' className={classes.learnMoreBtn}>
              <span style={{ marginRight: '10px' }}>Learn more</span>{' '}
              <ButtonArrow width={20} height={20} fill='violet' />
            </Button>
          </Grid>
          <Grid item>
            <img src={customSoftwareIcon} alt='' className={classes.boxIcon} />
          </Grid>
        </Grid>
      </Grid>
      {/* -----services 2------ */}
      <Grid
        item
        style={{ marginRight: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}
      >
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justifyContent={matchesSM ? 'center' : 'flex-end'}
        >
          <Grid item>
            <Typography variant='h4'>Services 2</Typography>
            <Typography variant='subtitle1' className={classes.subtitle1}>
              caption description , caption description
            </Typography>
            <Typography variant='subtitle1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <br />
            <Button variant='outlined' className={classes.learnMoreBtn}>
              <span style={{ marginRight: '10px' }}>Learn more</span>{' '}
              <ButtonArrow width={20} height={20} fill='violet' />
            </Button>
          </Grid>
          <Grid item>
            <img src={mobileIcon} alt='' className={classes.boxIcon} />
          </Grid>
        </Grid>
      </Grid>
      {/* -----services 3------ */}
      <Grid
        item
        style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}
      >
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justifyContent={matchesSM ? 'center' : undefined}
        >
          <Grid item>
            <Typography variant='h4'>Services 3</Typography>
            <Typography variant='subtitle1' className={classes.subtitle1}>
              caption description , caption description
            </Typography>
            <Typography variant='subtitle1'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <br />
            <Button variant='outlined' className={classes.learnMoreBtn}>
              <span style={{ marginRight: '10px' }}>Learn more</span>{' '}
              <ButtonArrow width={20} height={20} fill='violet' />
            </Button>
          </Grid>
          <Grid item>
            <img src={websiteIcon} alt='' className={classes.boxIcon} />
          </Grid>
        </Grid>
      </Grid>
      {/* -----revolution section ------ */}

      <Grid item>
        <Grid
          container
          alignItems='center'
          justifyContent='center'
          style={{ height: '50em', marginTop: '10em' }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction='column' style={{ textAlign: 'center' }}>
                <Grid item>
                  <Typography variant='h3'>The revolution</Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </Typography>
                  <Button variant='outlined'>
                    <span style={{ marginRight: '10px' }}>Learn more</span>{' '}
                    <ButtonArrow width={20} height={20} fill='violet' />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      {/* -----information section ------ */}
      <Grid item>
        <Grid container direction='row' alignItems='center' style={{ height: '50em' }}>
          <Grid
            container
            style={{ position: 'absolute', textAlign: matchesSM ? 'center' : 'inherit' }}
            direction={matchesSM ? 'column' : 'row'}
          >
            <Grid
              item
              sm
              style={{
                marginLeft: matchesSM ? '0' : '5em',
                marginBottom: matchesSM ? '3em' : 'initial',
              }}
            >
              <Grid container direction='column'>
                <Typography variant='h2' style={{ color: 'white' }}>
                  About Us
                </Typography>
                <Typography variant='subtitle2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnMoreBtn}
                    style={{ borderColor: '#fff', color: '#fff' }}
                  >
                    <span style={{ marginRight: '10px' }}>Learn more</span>{' '}
                    <ButtonArrow width={20} height={20} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesSM ? '0' : '5em',
                textAlign: matchesSM ? 'center' : 'right',
              }}
            >
              <Grid container direction='column'>
                <Typography variant='h2' style={{ color: 'white' }}>
                  Contact Us
                </Typography>
                <Typography variant='subtitle2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnMoreBtn}
                    style={{ borderColor: '#fff', color: '#fff' }}
                  >
                    <span style={{ marginRight: '10px' }}>Learn more</span>{' '}
                    <ButtonArrow width={20} height={20} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <div className={classes.infoBackground} />
        </Grid>
      </Grid>
      {/* -----call to action section ------ */}
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};
export default LandingPage;
