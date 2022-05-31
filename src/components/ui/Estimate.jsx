/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@mui/styles';
import { cloneDeep } from 'lodash';
import { useMediaQuery, IconButton, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { blueGrey, blue, orange } from '@mui/material/colors';
import check from '../../assets/images/check.svg';
import send from '../../assets/images/send.svg';
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

const useStyles = makeStyles((theme) => ({
  icon: {
    width: '12em',
    height: '10em',
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
  const [questions, setQuestions] = useState(softwareQuestions);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
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
  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((q) => q.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[activeIndex], active: true };
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
    const currentlyActive = newQuestions.filter((q) => q.active);
    const activeIndex = currentlyActive[0].id - 1;

    const newSelected = newQuestions[activeIndex].options[id - 1];

    newSelected.selected = !newSelected.selected;

    setQuestions(newQuestions);
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
            direction='column'
            md={12}
            lg={6}
            style={{ marginBottom: '5em' }}
            alignItems='center'
          >
            {questions
              .filter((q) => q.active)
              .map((q, i) => (
                <React.Fragment key={q.id}>
                  <Grid item>
                    <Typography
                      variant='h2'
                      align='center'
                      style={{ fontWeight: '600', marginBottom: '2.5em', marginTop: '2.5em' }}
                      gutterBottom
                    >
                      {q.title}
                    </Typography>
                    <Typography
                      variant='body1'
                      align='center'
                      style={{ marginBottom: '2.5em' }}
                      gutterBottom
                    >
                      {q.subtitle}
                    </Typography>
                  </Grid>
                  <Grid item container>
                    {q.options.map((q) => (
                      <Grid
                        item
                        container
                        direction='column'
                        sm
                        key={q.id}
                        component={Button}
                        onClick={() => handleSelect(q.id)}
                        style={{
                          display: 'grid',
                          backgroundColor: q.selected ? blue[50] : null,
                        }}
                      >
                        <Grid item style={{ maxWidth: '12em' }}>
                          <Typography variant='h6' align='center'>
                            {q.title}
                          </Typography>
                          <Typography variant='caption' align='center'>
                            {q.subtitle}
                          </Typography>
                        </Grid>
                        <Grid>
                          <img src={q.icon} alt={q.iconAlt} className={classes.icon} />
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
      </Grid>
    </Grid>
  );
};

export default Estimate;
