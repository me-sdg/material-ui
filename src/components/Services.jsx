/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import { Button, Typography, Card, CardContent } from '@mui/material';
import ButtonArrow from './ui/ButtonArrow';
import customSoftwareIcon from '../assets/images/customSoftwareIcon.svg';
import mobileIcon from '../assets/images/mobile.svg';
import websiteIcon from '../assets/images/website.svg';

const useStyles = makeStyles((theme) => ({
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
      marginTop: '1em',
    },
  },
  learnMoreBtn: {
    [theme.breakpoints.down('sm')]: {
      margin: '10px 0 !important',
    },
  },
}));

const Services = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction='column'>
      <Grid
        item
        style={{ marginLeft: matchesSM ? '0' : '5em', marginTop: matchesSM ? '1em' : '2em' }}
      >
        <Typography align={matchesSM ? 'center' : undefined} variant='h2' gutterBottom>
          Services
        </Typography>
      </Grid>
      {/* -----services 1------ */}
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
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
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
      {/* -----services 2------ */}
      <Grid
        item
        style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}
      >
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justifyContent={matchesSM ? 'center' : undefined}
          style={{ marginTop: matchesSM ? '1em' : '5em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
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

      {/* -----services 3------ */}
      <Grid
        item
        style={{ marginRight: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center' : undefined }}
      >
        <Grid
          container
          direction='row'
          className={classes.serviceContainer}
          justifyContent={matchesSM ? 'center' : 'flex-end'}
          style={{ marginBottom: matchesSM ? '3em' : '10em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
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
    </Grid>
  );
};

export default Services;
