/* eslint-disable object-shorthand */
import Lottie from 'react-lottie';

import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import animationData from '../animations/landinganimation/data';
import ButtonArrow from './ui/ButtonArrow';

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
}));

const LandingPage = () => {
  const classes = useStyles();
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
                  Learn more <ButtonArrow width={20} height={20} fill='violet' />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} width='auto' height='auto' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LandingPage;
