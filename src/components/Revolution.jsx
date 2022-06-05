/* eslint-disable no-unused-vars */
import { makeStyles, useTheme } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Lottie from 'react-lottie';
import vision from '../assets/images/vision.svg';
import technologyAnimation from '../animations/technologyAnimation/data.json';
import consultation from '../assets/images/consultationIcon.svg';
import mockup from '../assets/images/mockupIcon.svg';
import reviewIcon from '../assets/images/reviewIcon.svg';
import designIcon from '../assets/images/designIcon.svg';
import build from '../assets/images/buildIcon.svg';
import launch from '../assets/images/launchIcon.svg';
import maintain from '../assets/images/maintainIcon.svg';
import iterate from '../assets/images/iterateIcon.svg';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

const Revolution = () => {
  const classes = useStyles();
  const theme = useTheme();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column'>
      <Grid item className={classes.rowContainer} mt={2}>
        <Typography variant='h2'>The Revolution</Typography>
      </Grid>

      <Grid
        item
        container
        direction='row'
        alignItems='center'
        className={classes.rowContainer}
        mt={2}
      >
        <Grid item container justifyContent='flex-start' lg>
          <img src={vision} alt='' style={{ maxWidth: '40em', marginRight: '5em' }} />
        </Grid>
        <Grid item container direction='column' lg style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography align='right' variant='h4' gutterBottom>
              Vision
            </Typography>
            <Grid item>
              <Typography align='right' variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Mauris pellentesque pulvinar
                pellentesque habitant. Fringilla est ullamcorper eget nulla facilisi etiam
                dignissim. Semper feugiat nibh sed pulvinar proin.
              </Typography>
              <Typography align='right' variant='body1' paragraph>
                Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Pharetra sit amet
                aliquam id diam maecenas ultricies mi eget. Nisl condimentum id venenatis a
                condimentum vitae. Pellentesque nec nam aliquam sem et.
              </Typography>
              <Typography align='right' variant='body1' paragraph>
                Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Pharetra sit amet
                aliquam id diam maecenas ultricies mi eget. Nisl condimentum id venenatis a
                condimentum vitae. Pellentesque nec nam aliquam sem et.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction='row'
        alignItems='center'
        className={classes.rowContainer}
        mt={5}
      >
        <Grid item container direction='column' lg style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Technology
            </Typography>
            <Grid item>
              <Typography variant='body1' paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Mauris pellentesque pulvinar
                pellentesque habitant. Fringilla est ullamcorper eget nulla facilisi etiam
                dignissim. Semper feugiat nibh sed pulvinar proin.
              </Typography>
              <Typography variant='body1' paragraph>
                Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Pharetra sit amet
                aliquam id diam maecenas ultricies mi eget. Nisl condimentum id venenatis a
                condimentum vitae. Pellentesque nec nam aliquam sem et.
              </Typography>
              <Typography variant='body1' paragraph>
                Velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Pharetra sit amet
                aliquam id diam maecenas ultricies mi eget. Nisl condimentum id venenatis a
                condimentum vitae. Pellentesque nec nam aliquam sem et.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justifyContent='flex-end' lg>
          <Lottie options={defaultOptions} isStopped style={{ maxWidth: '40em', margin: 0 }} />
        </Grid>
      </Grid>
      <Grid item>
        <Typography align='center' variant='h3' gutterBottom>
          Process
        </Typography>
      </Grid>
      <Grid item container direction='row' justifyContent='center'>
        <Grid
          item
          container
          direction='row'
          className={classes.rowContainer}
          py={10}
          alignItems='center'
          style={{ backgroundColor: '#39b54a', minHeight: '50em' }}
        >
          <Grid item lg container direction='column'>
            <Grid item>
              <Typography variant='h4' gutterBottom style={{ color: '#000' }}>
                Consultation
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{ color: '#fff', maxWidth: '40em' }} variant='body1' paragraph>
                Integer vitae justo eget magna fermentum iaculis eu non diam. Massa enim nec dui
                nunc mattis enim. Amet dictum sit amet justo donec enim diam. Sed adipiscing diam
                donec adipiscing. Pretium lectus quam id leo in vitae turpis. Mauris commodo quis
                imperdiet massa tincidunt nunc pulvinar sapien et. Quis eleifend quam adipiscing
                vitae proin sagittis. Tortor dignissim convallis aenean et tortor at risus viverra.
              </Typography>
              <Typography style={{ color: '#fff', maxWidth: '40em' }} variant='body1' paragraph>
                Integer vitae justo eget magna fermentum iaculis eu non diam. Massa enim nec dui
                nunc mattis enim. Amet dictum sit amet justo donec enim diam. Sed adipiscing diam
                donec adipiscing. Pretium lectus quam id leo in vitae turpis. Mauris commodo quis
                imperdiet massa tincidunt nunc pulvinar sapien et. Quis eleifend quam adipiscing
                vitae proin sagittis. Tortor dignissim convallis aenean et tortor at risus viverra.
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg container justifyContent='flex-end'>
            <img src={consultation} alt='' style={{ maxWidth: '100%' }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction='row' justifyContent='center'>
        <Grid
          item
          container
          direction='row'
          py={10}
          className={classes.rowContainer}
          alignItems='center'
          style={{ backgroundColor: '#ff7373', minHeight: '50em' }}
        >
          <Grid item lg container>
            <img src={mockup} alt='' style={{ maxWidth: '100%' }} />
          </Grid>
          <Grid item lg container direction='column'>
            <Grid item>
              <Typography variant='h4' gutterBottom style={{ color: '#000' }}>
                Mockup
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{ color: '#fff', maxWidth: '40em' }} variant='body1' paragraph>
                Integer vitae justo eget magna fermentum iaculis eu non diam. Massa enim nec dui
                nunc mattis enim. Amet dictum sit amet justo donec enim diam. Sed adipiscing diam
                donec adipiscing. Pretium lectus quam id leo in vitae turpis. Mauris commodo quis
                imperdiet massa tincidunt nunc pulvinar sapien et. Quis eleifend quam adipiscing
                vitae proin sagittis. Tortor dignissim convallis aenean et tortor at risus viverra.
              </Typography>
              <Typography style={{ color: '#fff', maxWidth: '40em' }} variant='body1' paragraph>
                Integer vitae justo eget magna fermentum iaculis eu non diam. Massa enim nec dui
                nunc mattis enim. Amet dictum sit amet justo donec enim diam. Sed adipiscing diam
                donec adipiscing. Pretium lectus quam id leo in vitae turpis. Mauris commodo quis
                imperdiet massa tincidunt nunc pulvinar sapien et. Quis eleifend quam adipiscing
                vitae proin sagittis. Tortor dignissim convallis aenean et tortor at risus viverra.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction='row' justifyContent='center'>
        <Grid
          item
          container
          direction='row'
          py={10}
          className={classes.rowContainer}
          alignItems='center'
          style={{ backgroundColor: '#f90', minHeight: '50em' }}
        >
          <Grid item lg container direction='column'>
            <Grid item>
              <Typography variant='h4' gutterBottom style={{ color: '#000' }}>
                Iterate
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{ color: '#fff', maxWidth: '40em' }} variant='body1' paragraph>
                Integer vitae justo eget magna fermentum iaculis eu non diam. Massa enim nec dui
                nunc mattis enim. Amet dictum sit amet justo donec enim diam. Sed adipiscing diam
                donec adipiscing. Pretium lectus quam id leo in vitae turpis. Mauris commodo quis
                imperdiet massa tincidunt nunc pulvinar sapien et. Quis eleifend quam adipiscing
                vitae proin sagittis. Tortor dignissim convallis aenean et tortor at risus viverra.
              </Typography>
              <Typography style={{ color: '#fff', maxWidth: '40em' }} variant='body1' paragraph>
                Integer vitae justo eget magna fermentum iaculis eu non diam. Massa enim nec dui
                nunc mattis enim. Amet dictum sit amet justo donec enim diam. Sed adipiscing diam
                donec adipiscing. Pretium lectus quam id leo in vitae turpis. Mauris commodo quis
                imperdiet massa tincidunt nunc pulvinar sapien et. Quis eleifend quam adipiscing
                vitae proin sagittis. Tortor dignissim convallis aenean et tortor at risus viverra.
              </Typography>
            </Grid>
          </Grid>
          <Grid item lg container justifyContent='flex-end'>
            <img src={iterate} alt='' style={{ maxWidth: '100%' }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Revolution;
