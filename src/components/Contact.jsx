/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import Grid from '@mui/material/Grid';
import {
  Button,
  Typography,
  TextField,
  useMediaQuery,
  Dialog,
  DialogContent,
  CircularProgress,
  Snackbar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import background from '../assets/images/background.jpg';
import phoneIcon from '../assets/images/phone.svg';
import emailIcon from '../assets/images/email.svg';
import airplane from '../assets/images/send.svg';
import ButtonArrow from './ui/ButtonArrow';

const useStyles = makeStyles(() => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    width: '100%',
  },
  multiline: {
    borderWidth: '2px !important',
    marginTop: '15px !important',
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const [phoneHelper, setPhoneHelper] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: '', backgroundColor: '' });

  const onChangeHandler = (e) => {
    let valid;
    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value);
        if (!valid) {
          setEmailHelper('Invalin email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'phone':
        setPhone(e.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e.target.value);
        if (!valid) {
          setPhoneHelper('Invalin number');
        } else {
          setPhoneHelper('');
        }
        break;

      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName('');
        setMessage('');
        setEmail('');
        setPhone('');
        setAlert({ open: true, message: ' Message sent successfuly!', backgroundColor: 'green' });
      })
      .catch((err) => {
        setLoading(false);
        setAlert({ open: true, message: 'Error!!!!', backgroundColor: 'red' });
      });
  };

  return (
    <Grid container direction='row'>
      <Grid
        container
        direction='column'
        justifyContent='flex-start'
        lg={3}
        md={4}
        px={matchesSM ? 3 : 5}
        py={matchesSM ? 3 : 10}
      >
        <Grid item>
          <Typography variant='h2'>Contact Us</Typography>
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
              error={emailHelper.length !== 0}
              helperText={emailHelper}
              id='email'
              variant='standard'
              value={email}
              onChange={onChangeHandler}
            />
          </Grid>
          <Grid item>
            <TextField
              label='Phone'
              id='phone'
              inputProps={{ maxLength: 10 }}
              error={phoneHelper.length !== 0}
              helperText={phoneHelper}
              variant='standard'
              value={phone}
              onChange={onChangeHandler}
            />
          </Grid>

          <Grid item>
            <TextField
              value={message}
              multiline
              rows={10}
              id='message'
              onChange={(e) => setMessage(e.target.value)}
              className={classes.multiline}
            />
          </Grid>
        </Grid>

        <Grid item mt={2}>
          <Button
            disabled={
              name.length === 0 ||
              message.length === 0 ||
              phoneHelper.length !== 0 ||
              emailHelper.length !== 0
            }
            variant='contained'
            onClick={() => setOpen(true)}
          >
            Send Message <img src={airplane} alt='' />
          </Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h4' gutterBottom>
                Confirm Message
              </Typography>
            </Grid>

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
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id='email'
                variant='standard'
                value={email}
                onChange={onChangeHandler}
              />
            </Grid>
            <Grid item>
              <TextField
                label='Phone'
                id='phone'
                inputProps={{ maxLength: 10 }}
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                variant='standard'
                value={phone}
                onChange={onChangeHandler}
              />
            </Grid>

            <Grid item>
              <TextField
                value={message}
                multiline
                rows={10}
                id='message'
                onChange={(e) => setMessage(e.target.value)}
                className={classes.multiline}
              />
            </Grid>
          </Grid>
          <Grid container item mt={1}>
            <Button color='primary' onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              disabled={
                name.length === 0 ||
                message.length === 0 ||
                phoneHelper.length !== 0 ||
                emailHelper.length !== 0
              }
              variant='contained'
              onClick={onConfirm}
            >
              {loading ? (
                <CircularProgress size={25} color='secondary' />
              ) : (
                <span>
                  Send Message <img src={airplane} alt='' />
                </span>
              )}
            </Button>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        setClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />

      <Grid
        item
        container
        className={classes.background}
        lg={9}
        md={8}
        alignItems='flex-start'
        height='75em'
      >
        <Grid item container pl={10} pt={10} alignItems='center'>
          <Grid
            item
            mb={3}
            style={{
              marginRight: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
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
                <Typography
                  variant='subtitle1'
                  className={classes.subtitle1}
                  style={{ color: '#FFF' }}
                >
                  caption description , caption description
                </Typography>
                <Typography variant='subtitle1' style={{ color: '#FFF' }}>
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
            </Grid>
          </Grid>
          <Grid item pr={5} style={{ textAlign: matchesMD ? 'left' : 'right' }}>
            <Button
              component={Link}
              to='/estimate'
              color='secondary'
              variant='contained'
              className={classes.btn}
            >
              Free estimate
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
