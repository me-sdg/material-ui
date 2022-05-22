/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import { Typography } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  body: {
    padding: 0,
    margin: 0,
  },
  btnStyle: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 'auto',
    padding: '0 60px',
  },
  logo: {
    height: '70px',
  },
  toolbar: {
    ...theme.mixins.toolbar,
    marginRight: '25px',
  },
  linkItem: {
    ...theme.typography.tab,
    color: '#fff !important',
  },
  navItems: {
    marginLeft: 'auto',
  },
  btn: {
    ...theme.palette.secondary,
    borderRadius: '50px !important',
  },
}));

export default function Header() {
  const [value, setValue] = useState(0);
  const handleChange = (e, val) => {
    setValue(val);
  };
  const classes = useStyles();
  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/srvices' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/about' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/contact' && value !== 3) {
      setValue(3);
    }
  });
  return (
    <>
      <ElevationScroll>
        <AppBar position='static'>
          <Toolbar disableGutters className={classes.toolbar}>
            <img src={logo} alt='' className={classes.logo} />
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.navItems}
              indicatorColor='secondary'
            >
              <Tab label='Home' to='/' component={Link} className={classes.linkItem} />
              <Tab label='Services' to='/services' component={Link} className={classes.linkItem} />
              <Tab label='About Us' to='/about' component={Link} className={classes.linkItem} />
              <Tab label='Contact Us' to='/contact' component={Link} className={classes.linkItem} />
            </Tabs>
            <Button color='secondary' variant='contained' className={classes.btn}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
}
