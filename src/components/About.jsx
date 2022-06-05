/* eslint-disable no-unused-vars */
import { makeStyles, useTheme } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Typography, Card, CardContent, Button } from '@mui/material';
import history from '../assets/images/history.svg';

const useStyles = makeStyles((theme) => ({
  missionstatement: {
    fontStyle: 'italic',
    fontSize: '1.5rem',
    maxWidth: '50em',
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

const About = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container direction='column'>
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography variant='h2'>Abou Us</Typography>
      </Grid>
      <Grid item container justifyContent='center' className={classes.rowContainer}>
        <Typography variant='h4' align='center' className={classes.missionstatement}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Typography>
      </Grid>
      <Grid item container className={classes.rowContainer} justifyContent='space-around' my={10}>
        <Grid item lg>
          <Grid item container direction='column' style={{ maxWidth: '35em' }}>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                style={{ fontWeight: '600', fontStyle: 'italic' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                style={{ fontWeight: '600', fontStyle: 'italic' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg>
          <Grid item container justifyContent='center'>
            <img src={history} alt='' style={{ maxHeight: '22em', maxWidth: '100%' }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
