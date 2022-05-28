/* eslint-disable no-unused-vars */
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@mui/styles';
import { Button, Typography, Card, CardContent, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import backArrow from '../assets/images/backArrow.svg';
import forwardArrow from '../assets/images/forwardArrow.svg';

const useStyles = makeStyles((theme) => ({}));

const CustomSoftware = () => {
  const classes = useStyles();

  return (
    <Grid container direction='column'>
      <Grid container item direction='row'>
        <Grid item>
          <IconButton>
            <img src={backArrow} alt='' />
          </IconButton>
        </Grid>
        <Grid container item direction='column'>
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
          <IconButton>
            <img src={forwardArrow} alt='' />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
