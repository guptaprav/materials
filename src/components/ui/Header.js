import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';


import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em'
    }
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em'
    }
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '24px'
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px'
  },
  menu: {
    backgroundColor: theme.palette.common.mBlue,
    color: 'white',
    borderRadius: '0px'
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  },
  drawerIcon: {
    height: '50px',
    width: '50px'
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  drawer: {
    backgroundColor: theme.palette.common.mBlue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  },
  drawerItemSelected: {
    '& .MuiListItemSelected-root': {
      opacity: 1
    }
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.mOrange
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const { value, selectedIdx, setValue, setSelectedIdx } = props;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    { name: 'Product', link: '/product', activeIdx: 1, selectedIdx: 0 },
    { name: 'Custom', link: '/custom', activeIdx: 1, selectedIdx: 1 },
    { name: 'Mobile', link: '/mobile', activeIdx: 1, selectedIdx: 2 },
    { name: 'Web', link: '/web', activeIdx: 1, selectedIdx: 3 }
  ]

  const routes = [
    { name: 'Home', link: '/', activeIdx: 0 },
    { name: 'Product', link: '/product', activeIdx: 1, ariaOwns: anchorEl ? 'simple-menu' : undefined, ariaPopup: anchorEl ? 'true' : undefined, 
    mouseOver: event => handleClick(event) },
    { name: 'Team', link: '/team', activeIdx: 2 },
    { name: 'About Us', link: '/about', activeIdx: 3 },
    { name: 'Contact Us', link: '/contact', activeIdx: 4 }
  ]

  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch(window.location.pathname) {
        case `${route.link}`:
          if(value !== route.activeIdx) {
            setValue(route.activeIdx);
            if(route.selectedIdx && route.selectedIdx !== selectedIdx) {
              setSelectedIdx(route.selectedIdx);
            }
          }
          break;
        default:
          break;
      }
    })
  }, [value, menuOptions, selectedIdx, routes])

  const handleChange = (e, newValue) => {
    setValue(newValue);
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  }

  const handleMenuItemClick = (e, idx) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIdx(idx);
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  }

  const tabs = (
    <React.Fragment>
      <Tabs
        className={classes.tabContainer}
        value={value}
        onChange={handleChange}
        indicatorColor="primary">
          {
            routes.map((route) => (
              <Tab
                key={`${route.name}`}
                className={classes.tab}
                component={Link}
                to={route.link}
                label={route.name}
                aria-owns={route.ariaOwns}
                aria-haspopup={route.ariaPopup}
                onMouseOver={route.mouseOver}
              />
            ))
          }
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => {setValue(5)}}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{paper: classes.menu}}
        MenuListProps={{onMouseLeave: handleClose}}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {
          menuOptions.map((option, idx) => (
            <MenuItem
              key={option.name}
              selected={idx === selectedIdx && value===1}
              onClick={
                (event) => {
                  handleMenuItemClick(event, idx);
                  setValue(1);
                  handleClose();
                }
              }
              component={Link}
              to={option.link}
              classes={{root: classes.menuItem}}
            >
              {option.name}
            </MenuItem>
          ))
          }
      </Menu>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{paper: classes.drawer}}
      >

        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {
            routes.map((route, idx) => (
              <ListItem
                key={`${route.name}`}
                onClick={() => {setOpenDrawer(false); setValue(route.activeIdx)}}
                divider
                button
                component={Link}
                to={route.link}
                selected={value === route.activeIdx}
                classes={{ selected: classes.drawerItemSelected }}
              >
                <ListItemText className={classes.drawerItem} disableTypography>{route.name}</ListItemText>
              </ListItem>
            ))
          }

          <ListItem
            onClick={() => {setOpenDrawer(false); setValue(5)}}
            divider
            button
            component={Link}
            to="/estimate"
            selected={value === 5}
            classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar} color="primary">
            <Toolbar disableGutters>
              {/* <Typography variant="h3">
                Materials
              </Typography> */}
              <Button
                component={Link}
                to="/"
                disableRipple
                className={classes.logoContainer}
                onClick={() => setValue(0)}
              >
                <img src={logo} className={classes.logo} alt="page logo" />
              </Button>

              {
                matches 
                  ? drawer 
                  : tabs
              }
            </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
