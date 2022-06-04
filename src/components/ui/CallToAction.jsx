/* eslint-disable no-unused-vars */
import { makeStyles, useTheme } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ButtonArrow from './ButtonArrow';
import background from '../../assets/images/background.jpg';
import mobileBackground from '../../assets/images/mobileBackground.jpg';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '50em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit',
    },
  },
  fs35: {
    fontSize: '35px !important',
  },
  colorWhite: {
    color: '#fff !important',
  },
  estimateButton: {
    marginRight: '5em !important',
    marginLeft: '2em !important',
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0 !important',
      marginLeft: '0 !important',
      marginTop: '1em !important',
    },
  },
}));

const CallToAction = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      container
      alignItems='center'
      justifyContent={matchesSM ? 'center' : 'space-between'}
      className={classes.background}
      direction={matchesSM ? 'column' : 'row'}
    >
      <Grid
        item
        style={{ marginLeft: matchesSM ? '0' : '5em', textAlign: matchesSM ? 'center' : 'inherit' }}
      >
        <Grid container direction='column' style={{ padding: 'auto 1em' }}>
          <Grid item>
            <Typography variant='h3' className={classes.fs35}>
              Lorem ipsum dolor sit amet
            </Typography>
            <Typography variant='subtitle1' className={classes.colorWhite}>
              Duis aute irure dolor in reprehenderit in
              <br /> voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
            <Grid
              item
              container
              justifyContent={matchesSM ? 'center' : undefined}
              style={{ marginTop: '1em' }}
            >
              <Button variant='outlined'>
                <span style={{ marginRight: '10px' }}>Learn more</span>{' '}
                <ButtonArrow width={20} height={20} fill='violet' />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button variant='contained' className={classes.estimateButton}>
          Free estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
