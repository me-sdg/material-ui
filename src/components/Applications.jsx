/* eslint-disable import/no-unresolved */
import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';
import { Grid, Typography, useMediaQuery } from '@mui/material';
// import { Hidden } from "@mui/material";
import IconButton from '@mui/material/IconButton';

import backArrow from '../assets/images/backArrow.svg';
import forwardArrow from '../assets/images/forwardArrow.svg';
import swiss from '../assets/images/swissKnife.svg';
import access from '../assets/images/extendAccess.svg';
import engagment from '../assets/images/increaseEngagement.svg';
import integrationAnimation from '../animations/integrationAnimation/data.json';

const useStyle = makeStyles((theme) => ({
  heading: {
    maxWidth: '40em',
  },
  mainContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    paddingTop: '2em',
    paddingBottom: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  arrowContainer: {
    position: 'relative',
    '& .leftArrow': {
      backgroundColor: 'red !important',
    },
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
    },
  },
  leftArrow: {
    [theme.breakpoints.down('md')]: {
      left: '15px',
      '& img': {
        width: '16px',
      },
    },
  },
  rightArrow: {
    [theme.breakpoints.down('md')]: {
      right: '15px',
      '& img': {
        width: '16px',
      },
    },
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

function Applications({ setSelectedIndex }) {
  const classes = useStyle();
  const theme = useTheme();
  // const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Grid container direction='column'>
      <Grid
        item
        container
        direction='row'
        justify={matchesMD ? 'center' : undefined}
        className={classes.mainContainer}
      >
        <Grid
          item
          className={`${classes.arrowContainer} ${classes.leftArrow}`}
          style={{ marginRight: '1em', marginLeft: matchesMD ? 0 : '-3.5em' }}
        >
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to='/customsoftware'
            onClick={() => setSelectedIndex(0)}
          >
            <img src={backArrow} alt='Back to Services Page' />
          </IconButton>
        </Grid>

        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='h2'>
              ios/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Typography>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
              Using regular commercial software leaves you with a lot of stuff you don’t need,
              without some of the stuff you do need, and ultimately controls the way you work.
            </Typography>
            <Typography align={matchesMD ? 'center' : undefined} variant='body1' paragraph>
              Our custom solutions are designed from the ground up with your needs, wants, and goals
              at the core. This collaborative process produces finely tuned software that is much
              more effective at improving your workflow and reducing costs than generalized options.
            </Typography>
          </Grid>
        </Grid>

        <Grid item className={`${classes.arrowContainer} ${classes.rightArrow}`}>
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to='/website'
            onClick={() => setSelectedIndex(2)}
          >
            <img src={forwardArrow} alt='Forward to iOS/Android App Development Page' />
          </IconButton>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        alignItems='center'
      >
        <Grid item container direction='column' md>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis, sunt
              dignissimos esse voluptatem nesciunt omnis distinctio itaque nam corrupti assumenda ex
              laborum, ipsam, velit dolorum exercitationem saepe asperiores quaerat.
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis, sunt
              dignissimos esse voluptatem nesciunt omnis distinctio itaque nam corrupti assumenda ex
              laborum, ipsam, velit dolorum exercitationem saepe asperiores quaerat.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} isStopped style={{ maxWidth: '20em' }} />
        </Grid>
        <Grid item container direction='column' md>
          <Grid item>
            <Typography align='right' variant='h4' gutterBottom>
              Simple Platform
            </Typography>
          </Grid>
          <Grid item>
            <Typography align='right' variant='body1' paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis, sunt
              dignissimos esse voluptatem nesciunt omnis distinctio itaque nam corrupti assumenda ex
              laborum, ipsam, velit dolorum exercitationem saepe asperiores quaerat.
            </Typography>
            <Typography align='right' variant='body1' paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corporis, sunt
              dignissimos esse voluptatem nesciunt omnis distinctio itaque nam corrupti assumenda ex
              laborum, ipsam
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.rowContainer}
        mb={10}
      >
        <Grid item container direction='column' alignItems='center' md>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom mb={5}>
              Extend Fuunctionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt='swiss' />
          </Grid>
        </Grid>
        <Grid item container direction='column' alignItems='center' md>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom mb={5}>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img src={access} alt='access' style={{ maxWidth: '100%' }} />
          </Grid>
        </Grid>
        <Grid item container direction='column' alignItems='center' md>
          <Grid item>
            <Typography align='center' variant='h4' gutterBottom>
              Increase
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagment} alt='swiss' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Applications;
