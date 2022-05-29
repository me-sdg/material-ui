/* eslint-disable no-unused-vars */
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@mui/styles';
import { Typography, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import backArrow from '../assets/images/backArrow.svg';
import forwardArrow from '../assets/images/forwardArrow.svg';
import lightbulb from '../assets/images/bulb.svg';
import cash from '../assets/images/cash.svg';
import stopWatch from '../assets/images/stopwatch.svg';
import documentsAnimatioin from '../animations/documentsAnimation/data';
import scaleAnimatioin from '../animations/scaleAnimation/data.json';

const useStyles = makeStyles((theme) => ({
  headeing: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '.5em',
  },
  mainContiner: {
    paddingLeft: '5em',
    paddingRight: '5em',
    paddingTop: '2em',
    paddingBottom: '10em',
  },
}));

const CustomSoftware = ({ setSelectedIndex, setValue }) => {
  const classes = useStyles();

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimatioin,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimatioin,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column' className={classes.mainContiner}>
      <Grid container item direction='row'>
        <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: '1em', marginLeft: '-3.5em' }}
        >
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to='/services'
            onClick={() => setSelectedIndex(2)}
          >
            <img src={backArrow} alt='' />
          </IconButton>
        </Grid>
        <Grid container item direction='column' className={classes.headeing}>
          <Grid item>
            <Typography variant='h2'>Custom software development</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Typography>
            <Typography variant='body1' paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to='/about'
            onClick={() => setValue(2)}
          >
            <img src={forwardArrow} alt='' />
          </IconButton>
        </Grid>
      </Grid>

      <Grid container item direction='row' justifyContent='center' mt={10}>
        <Grid container item direction='column' md style={{ maxWidth: '40em' }} alignItems='center'>
          <Grid item>
            <Typography variant='h4' mb={2}>
              Save Energy
            </Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt='' />
          </Grid>
        </Grid>
        <Grid container item direction='column' md style={{ maxWidth: '40em' }} alignItems='center'>
          <Grid item>
            <Typography variant='h4' mb={2}>
              Save Time
            </Typography>
          </Grid>
          <Grid item>
            <img src={stopWatch} alt='' />
          </Grid>
        </Grid>
        <Grid container item direction='column' md style={{ maxWidth: '40em' }} alignItems='center'>
          <Grid item>
            <Typography variant='h4' mb={2}>
              Save Money
            </Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt='' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction='row' mt={10}>
        <Grid item container className={classes.itemContainer} lg={6}>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' mb={2}>
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Typography>
              <Typography variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              isStopped
              style={{ maxHeight: 325, maxWidth: 275, minHeight: 275 }}
            />
          </Grid>
        </Grid>
        <Grid item container className={classes.itemContainer} lg={6}>
          <Grid item md>
            <Lottie options={scaleOptions} style={{ maxHeight: 260, maxWidth: 280 }} />
          </Grid>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography variant='h4' align='right' mb={2}>
                Scale
              </Typography>
            </Grid>
            <Grid item align='right'>
              <Typography variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Typography>
              <Typography variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
