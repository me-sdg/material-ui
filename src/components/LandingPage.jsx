/* eslint-disable object-shorthand */
import Lottie from 'react-lottie';

import { makeStyles, useTheme } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import animationData from '../animations/landinganimation/data';
import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/images/customSoftwareIcon.svg';
import mobileIcon from '../assets/images/mobile.svg';
import websiteIcon from '../assets/images/website.svg';

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
            <Typography variant='subtitle2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <span className={classes.specialText}>celebration</span>
            </Typography>
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
            <Typography variant='subtitle2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <span className={classes.specialText}>celebration</span>
            </Typography>
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
            <Typography variant='subtitle2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              <span className={classes.specialText}>celebration</span>
            </Typography>
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
    </Grid>
  );
};
export default LandingPage;
