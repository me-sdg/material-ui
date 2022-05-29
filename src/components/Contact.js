/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { Button, Typography, Card, CardContent, TextField } from '@mui/material';
import background from '../assets/images/background.jpg';
import phoneIcon from '../assets/images/phone.svg';
import emailIcon from '../assets/images/email.svg';
import airplane from '../assets/images/send.svg';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  return (
    <Grid container direction='row'>
      <Grid container direction='column' justifyContent='center' lg={3}>
        <Grid item>
          <Typography variant='h2'>COntact Us</Typography>
          <Typography variant='body1' paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item>
            <Typography style={{ color: 'red!important', fontSize: '1em' }} dir='ltr'>
              <img src={phoneIcon} style={{ marginRight: '.5rem' }} alt='' /> 021-90786712
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <Typography style={{ color: 'red!important', fontSize: '1em' }} dir='ltr'>
              <img src={emailIcon} style={{ marginRight: '.5rem' }} alt='' /> admin@software.com
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <TextField
              label='Name'
              id='name'
              variant='standard'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label='Email'
              id='email'
              variant='standard'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label='Phone'
              id='phone'
              variant='standard'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            value={message}
            multiline
            rows={10}
            id='message'
            onChange={(e) => setMessage(e.target.value)}
            variant='standard'
          >
            sadsa
          </TextField>
        </Grid>
        <Grid item>
          <Button variant='contained'>
            Send Message <img src={airplane} alt='' />
          </Button>
        </Grid>
      </Grid>
      <Grid item container className={classes.background} lg={9}>
        &nbsp;
      </Grid>
    </Grid>
  );
};

export default Contact;
