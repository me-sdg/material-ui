/* eslint-disable prettier/prettier */
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
import { useMediaQuery, IconButton } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useTheme } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
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
    '&:hover': {
      backgroundColor: theme.palette.secondary,
    },
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
  drawer: {
    backgroundColor: theme.palette.common.arcBlue,
  },
  drawerItem: {
    color: '#fff',
    opacity: 0.65,
  },
  drawerItemSelected: {
    "&  .MuiListItemText-root":{
      opacity: 1,
      color: '#fff',
    },
   
   
  },
  drawerItemContact: {
    background: theme.palette.common.arcOrange,
  },
  appbar: {
    zIndex: '9999 !important',
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
  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    { id: 0, name: 'services', link: '/services', activeIndex: 1, selectedIndex: 0 },
    { id: 1, name: 'sub menu 1', link: '/submenu1', activeIndex: 1, selectedIndex: 1 },
    { id: 2, name: 'sub menu 2', link: '/submenu2', activeIndex: 1, selectedIndex: 2 },
    { id: 3, name: 'sub menu 3', link: '/submenu3', activeIndex: 1, selectedIndex: 3 },
  ];

  const routes = [
    { id: 0, name: 'Home', link: '/', activeIndex: 0 },
    {
      id: 1,
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? 'basic-menu' : undefined,
      ariaPopup: anchorEl ? 'true' : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { id: 2, name: 'About us', link: '/about', activeIndex: 2 },
    { id: 3, name: 'Contact us', link: '/contact', activeIndex: 3 },
  ];

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(true);
    setSelectedIndex(i);
  };
  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes]);

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.navItems}
        indicatorColor='secondary'
      >
        {routes.map((route) => (
          <Tab
            key={route.id}
            className={classes.linkItem}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
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
        style={{zIndex:9999}}
        keepMounted
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          onMouseLeave: handleClose,
        }}
      >
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
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbar} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={route.id}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{selected: classes.drawerItemSelected}}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
            >
              <ListItemText
                className={classes.drawerItem}
                disableTypography
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            classes={{root: classes.drawerItemContact,selected: classes.drawerItemSelected}}
            selected={value === 3}
            divider
            button
            component={Link}
            to='/contact'
          >
            <ListItemText
              className={classes.drawerItem}
            >
              Contact us
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' className={classes.appbar}>
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
