/* eslint-disable object-shorthand */
import Lottie from 'react-lottie';

import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import animationData from '../animations/landinganimation/data';
import ButtonArrow from './ui/ButtonArrow';

const useStyles = makeStyles(() => ({
  content: {
    height: '1000px',
    width: '100%',
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
    <div className={classes.content}>
      <Grid container direction='column'>
        <Grid item>
          <Grid container direction='row'>
            <Grid item>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <Grid container>
                <Grid item>
                  <Button variant='contained'>Free estimate</Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined'>
                    Learn more <ButtonArrow width={20} height={20} fill='violet' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Lottie options={defaultOptions} width='500px' height='auto' />;
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default LandingPage;
