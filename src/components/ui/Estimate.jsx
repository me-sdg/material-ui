/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@mui/styles';
import { cloneDeep } from 'lodash';
import {
  IconButton,
  Typography,
  Button,
  Grid,
  Dialog,
  DialogContent,
  TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { blue } from '@mui/material/colors';
// import check from '../../assets/images/check.svg';
// import send from '../../assets/images/send.svg';

import software from '../../assets/images/software.svg';
import mobile from '../../assets/images/mobile.svg';
import website from '../../assets/images/website.svg';
import backArrow from '../../assets/images/backArrow.svg';
import forwardArrow from '../../assets/images/forwardArrow.svg';
import backArrowDisabled from '../../assets/images/backArrowDisabled.svg';
import forwardArrowDisabled from '../../assets/images/forwardArrowDisabled.svg';
import camera from '../../assets/images/camera.svg';
import upload from '../../assets/images/upload.svg';
import person from '../../assets/images/person.svg';
import persons from '../../assets/images/persons.svg';
import people from '../../assets/images/people.svg';
import info from '../../assets/images/info.svg';
import bell from '../../assets/images/bell.svg';
import users from '../../assets/images/users.svg';
import iphone from '../../assets/images/iphone.svg';
import gps from '../../assets/images/gps.svg';
import customized from '../../assets/images/customized.svg';
import android from '../../assets/images/android.svg';
import globe from '../../assets/images/globe.svg';
import biometrics from '../../assets/images/biometrics.svg';
import estimateAnimation from '../../animations/estimateAnimation/data.json';
import data from '../../assets/images/data.svg';
import check from '../../assets/images/check.svg';
import send from '../../assets/images/send.svg';

const useStyles = makeStyles((theme) => ({
  icon: {
    width: '12em',
    height: '10em',
  },
  estimateButton: {
    backgroundColor: theme.palette.common.arcOrange,
    borderRadius: '50px !important',
    marginRight: '10px !important',
    color: '#fff !important',
    paddingLeft: '15px !important',
    paddingRight: '15px !important',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: 'Wich service Are you intersted in?',
    active: true,
    options: [
      {
        id: 1,
        title: 'Custom softWare Development',
        subtitle: null,
        icon: software,
        iconAlt: 'software',
        selected: false,
        const: 0,
      },
      {
        id: 2,
        title: 'Ios/Android  Development',
        subtitle: null,
        icon: mobile,
        iconAlt: 'mobile',
        selected: false,
        const: 0,
      },
      {
        id: 3,
        title: 'website',
        subtitle: null,
        icon: website,
        iconAlt: 'camputer',
        selected: false,
        const: 0,
      },
    ],
  },
];

const newQuestions = cloneDeep(defaultQuestions);
newQuestions[0].options[0].selected = true;

const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: 'Which platforms do you need supported?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Web Application',
        subtitle: null,
        icon: website,
        iconAlt: 'computer outline',
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: 'iOS Application',
        subtitle: null,
        icon: iphone,
        iconAlt: 'outline of iphone',
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: 'Android Application',
        subtitle: null,
        icon: android,
        iconAlt: 'outlines of android phone',
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: 'Which features do you expect to use?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Photo/Video',
        subtitle: null,
        icon: camera,
        iconAlt: 'camera outline',
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: 'GPS',
        subtitle: null,
        icon: gps,
        iconAlt: 'gps pin',
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: 'File Transfer',
        subtitle: null,
        icon: upload,
        iconAlt: 'outline of cloud with arrow pointing up',
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: 'Which features do you expect to use?',
    subtitle: 'Select all that apply.',
    options: [
      {
        id: 1,
        title: 'Users/Authentication',
        subtitle: null,
        icon: users,
        iconAlt: 'outline of a person with a plus sign',
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: 'Biometrics',
        subtitle: null,
        icon: biometrics,
        iconAlt: 'fingerprint',
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: 'Push Notifications',
        subtitle: null,
        icon: bell,
        iconAlt: 'outline of a bell',
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: 'What type of custom features do you expect to need?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: 'Low Complexity',
        subtitle: '(Informational)',
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: 'Medium Complexity',
        subtitle: '(Interactive, Customizable, Realtime)',
        icon: customized,
        iconAlt: 'two toggle switches',
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: 'High Complexity',
        subtitle: '(Data Modeling and Computation)',
        icon: data,
        iconAlt: 'outline of line graph',
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: 'How many users do you expect?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: '0-10',
        subtitle: null,
        icon: person,
        iconAlt: 'person outline',
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: '10-100',
        subtitle: null,
        icon: persons,
        iconAlt: 'outline of two people',
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: '100+',
        subtitle: null,
        icon: people,
        iconAlt: 'outline of three people',
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: 'Which type of website are you wanting?',
    subtitle: 'Select one.',
    options: [
      {
        id: 1,
        title: 'Basic',
        subtitle: '(Informational)',
        icon: info,
        iconAlt: 'person outline',
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: 'Interactive',
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: 'outline of two people',
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: 'E-Commerce',
        subtitle: '(Sales)',
        icon: globe,
        iconAlt: 'outline of three people',
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

const Estimate = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [questions, setQuestions] = useState(defaultQuestions);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [total, setTotal] = useState(0);
  const [service, setService] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState('');
  const [category, setCategory] = useState('');
  const [users, setUsers] = useState('');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((q) => q.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };

  const navigationPreviousDisabled = () => {
    const currentlyActive = questions.filter((q) => q.active);
    if (currentlyActive[0].id === 1) {
      return true;
    }
    return false;
  };

  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((q) => q.active);
    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      return true;
    }

    return false;
  };

  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const newSelected = newQuestions[activeIndex].options[id - 1];
    const previousSelected = currentlyActive[0].options.filter((option) => option.selected);

    switch (currentlyActive[0].subtitle) {
      case 'Select one.':
        if (previousSelected[0]) {
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }
    switch (newSelected.title) {
      case 'Custom softWare Development':
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        break;
      case 'iOS/Android App Development':
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        break;
      case 'website Development':
        setQuestions(websiteQuestions);
        break;
      default:
        setQuestions(newQuestions);
        break;
    }

    // setQuestions(newQuestions);
  };

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

  const getTotal = () => {
    let cost = 0;
    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);
    // eslint-disable-next-line no-return-assign
    selections.map((options) => options.map((option) => (cost += option.cost)));
    if (questions.length > 2) {
      const userCost = questions
        .filter((question) => question.title === 'How many users do you expect?')
        .map((question) => question.options.filter((option) => option.selected))[0][0];
      setUsers(userCost.title);
      cost -= userCost.cost;
      cost *= userCost.cost;
    }
    setTotal(cost);
  };

  const getPlatforms = () => {
    let newPlatforms = [];
    if (questions.length > 2) {
      newPlatforms = questions
        .filter((question) => question.title === 'Which platforms do you need supported?')
        .map((question) => question.options.filter((option) => option.selected))[0]
        .map((option) => newPlatforms.push(option.title));
      setPlatforms(newPlatforms);
    }
  };

  const getFeatures = () => {
    let newFeatures = [];
    if (questions.length > 2) {
      newFeatures = questions
        .filter((question) => question.title === 'Which features do you expect to use?')
        .map((question) => question.options.filter((option) => option.selected))
        .map((option) => option.map((newFeature) => newFeatures.push(newFeature.title)));
      setPlatforms(newFeatures);
    }
  };

  const getCustomFeatures = () => {
    if (questions.length > 2) {
      const newCustomFeatures = questions
        .filter(
          (question) => question.title === 'What type of custom features do you expect to need?',
        )
        .map((question) => question.options.filter((option) => option.selected))[0][0].title;

      setCustomFeatures(newCustomFeatures);
    }
  };

  return (
    <Grid container>
      <Grid container>
        <Grid item style={{ marginTop: '2.5em', marginLeft: '5em' }}>
          <Typography variant='h2'>Estimate</Typography>
        </Grid>
        <Grid item container direction='row'>
          <Grid
            item
            md={12}
            lg={6}
            style={{ paddingRight: '10em', maxWidth: '50em', marginTop: '5em' }}
          >
            <Lottie options={defaultOptions} width='100%' height='100%' />
          </Grid>
          <Grid
            item
            container
            direction='column'
            md={12}
            lg={6}
            style={{ marginBottom: '5em' }}
            alignItems='center'
          >
            {questions
              .filter((question) => question.active)
              .map((question, i) => (
                <React.Fragment key={question.id}>
                  <Grid item>
                    <Typography
                      variant='h2'
                      align='center'
                      style={{ fontWeight: '600', marginBottom: '2.5em', marginTop: '2.5em' }}
                      gutterBottom
                    >
                      {question.title}
                    </Typography>
                    <Typography
                      variant='body1'
                      align='center'
                      style={{ marginBottom: '2.5em' }}
                      gutterBottom
                    >
                      {question.subtitle}
                    </Typography>
                  </Grid>
                  <Grid item container>
                    {question.options.map((option) => (
                      <Grid
                        item
                        container
                        direction='column'
                        sm
                        key={option.id}
                        component={Button}
                        onClick={() => handleSelect(option.id)}
                        style={{
                          display: 'grid',
                          backgroundColor: option.selected ? blue[50] : null,
                        }}
                      >
                        <Grid item style={{ maxWidth: '12em' }}>
                          <Typography variant='h6' align='center'>
                            {option.title}
                          </Typography>
                          <Typography variant='caption' align='center'>
                            {option.subtitle}
                          </Typography>
                        </Grid>
                        <Grid>
                          <img src={option.icon} alt={option.iconAlt} className={classes.icon} />
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                </React.Fragment>
              ))}

            <Grid item container direction='column' alignItems='center'>
              <Grid
                item
                container
                justifyContent='space-between'
                style={{ width: '15em', marginTop: '3em' }}
              >
                <Grid item>
                  <IconButton disabled={navigationPreviousDisabled()} onClick={previousQuestion}>
                    <img
                      src={navigationPreviousDisabled() ? backArrowDisabled : backArrow}
                      alt=''
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton disabled={navigationNextDisabled()} onClick={nextQuestion}>
                    <img
                      src={navigationNextDisabled() ? forwardArrowDisabled : forwardArrow}
                      alt=''
                    />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid item mt={5}>
                <Button
                  className={classes.estimateButton}
                  style={{ marginRight: '0 !important', marginTop: '15px' }}
                  variant='contained'
                  onClick={() => {
                    setDialogOpen(true);
                    getTotal();
                    getPlatforms();
                    getFeatures();
                    getCustomFeatures();
                  }}
                >
                  Get estimate
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Grid container justifyContent='center'>
          <Grid item>
            <Typography variant='h2' justifyContent='center'>
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid container>
            <Grid item container direction='column'>
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
              <Grid item mt={3}>
                <Typography variant='body1' paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
                  <strong>${total.toFixed(2)}</strong>
                </Typography>
                <Typography variant='body1' paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction='column'>
              <Grid item>
                <Grid container direction='column'>
                  <Grid container alignItems='center'>
                    <Grid item>
                      <img src={check} alt='' />
                    </Grid>
                    <Grid>
                      <Typography variant='body1'>
                        You want {service}{' '}
                        {platforms.length > 0
                          ? `for ${
                              platforms.indexOf('Web Application') > -1 && platforms.length === 1
                                ? 'a Web Application.'
                                : platforms.indexOf('Web Application') > -1 &&
                                  platforms.length === 2
                                ? `a Web Application and an ${platforms[1]}.`
                                : platforms.length === 1
                                ? `an ${platforms[0]}`
                                : platforms.length === 2
                                ? 'an iOS Application and an Android Application.'
                                : platforms.length === 3
                                ? 'a Web Application, an iOS Application, and an Android Application.'
                                : null
                            }`
                          : null}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container alignItems='center'>
                    <Grid item>
                      <img src={check} alt='' />
                    </Grid>
                    <Grid>
                      <Typography variant='body1'>
                        {'with '}

                        {features.length > 0
                          ? features.length === 1
                            ? `${features[0]}.`
                            : features.length === 2
                            ? `${features[0]} and ${features[1]}.`
                            : features

                                .filter((feature, index) => index !== features.length - 1)

                                .map((feature, index) => (
                                  <span key={feature.id}>{`${feature}, `}</span>
                                ))
                          : null}
                        {features.length > 0 && features.length !== 1 && features.length !== 2
                          ? ` and ${features[features.length - 1]}.`
                          : null}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container alignItems='center'>
                    <Grid item>
                      <img src={check} alt='' />
                    </Grid>
                    <Grid>
                      <Typography variant='body1'>
                        The custom features will be of {customFeatures.toLowerCase()}
                        {`. and the project will be used by about ${users} users.`}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Button className={classes.estimateButton}>
                Request <img src={send} alt='' style={{ marginLeft: '5px' }} />
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};

export default Estimate;
