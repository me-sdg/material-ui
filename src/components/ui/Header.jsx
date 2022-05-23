/* eslint-disable react/no-array-index-key */
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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useMediaQuery, SwipeableDrawer, IconButton } from '@mui/material';
import { useTheme } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
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
    height: '80px',
    [theme.breakpoints.down('md')]: {
      height: '70px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '60px',
    },
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
  logoLink: {
    padding: '0 !important',
  },
  menu: {
    backgroundColor: theme.palette.common.arcBlue,
    borderRadius: '0',
  },
  menuItem: {
    fontWeight: 600,
    fontSize: 13,
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    { id: 0, name: 'services', link: '/services' },
    { id: 1, name: 'sub menu 1', link: '/submenu1' },
    { id: 2, name: 'sub menu 2', link: '/submenu2' },
    { id: 3, name: 'sub menu 3', link: '/submenu3' },
  ];

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(true);
    setSelectedIndex(i);
  };
  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1);
    } else if (
      window.location.pathname === '/submenu1' ||
      window.location.pathname === '/submenu2' ||
      (window.location.pathname === '/submenu3' && value !== 1)
    ) {
      setValue(1);
    } else if (window.location.pathname === '/about' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/contact' && value !== 3) {
      setValue(3);
    }
  }, [value]);

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.navItems}
        indicatorColor='secondary'
      >
        <Tab label='Home' to='/' component={Link} className={classes.linkItem} />
        <Tab
          aria-owns={anchorEl ? 'basic-menu' : undefined}
          aria-haspopup={anchorEl ? 'true' : undefined}
          label='Services'
          to='/services'
          component={Link}
          className={classes.linkItem}
          // onClick={(event) => handleClick(event)}
          onMouseOver={(event) => handleClick(event)}
        />
        <Tab label='About Us' to='/about' component={Link} className={classes.linkItem} />
        <Tab label='Contact Us' to='/contact' component={Link} className={classes.linkItem} />
      </Tabs>
      <Button color='secondary' variant='contained' className={classes.btn}>
        Login
      </Button>
      <Menu
        elevation={5}
        id='basic-menu'
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          onMouseLeave: handleClose,
        }}
      >
        {/* <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to='/services'
              >
                Services
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to='/submenu1'
              >
                sub menu 1
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to='/submenu2'
              >
                sub menu 2
              </MenuItem>
              <MenuItem
                classes={{ root: classes.menuItem }}
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to='/submenu3'
              >
                sub menu 3
              </MenuItem>

               */}
        {menuOptions.map((option, i) => (
          <MenuItem
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleClose();
            }}
            selected={i === selectedIndex && value === 1}
            key={option.id}
            classes={{ root: classes.menuItem }}
            component={Link}
            to={option.link}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open='openDrawer'
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
      >
        Drawer
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position='static'>
          <Toolbar disableGutters className={classes.toolbar}>
            <Button
              component={Link}
              to='/'
              disableRipple
              onClick={() => setValue(0)}
              className={classes.logoLink}
            >
              <img src={logo} alt='' className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
}
