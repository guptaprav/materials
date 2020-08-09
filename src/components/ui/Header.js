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
    marginBottom: '3em'
  },
  logo: {
    height: '8em'
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
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/product' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/team' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/about' && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4);
    }
  }, [value])

  const handleChange = (e, value) => {
    setValue(value);
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  }

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
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
              <Tabs
                className={classes.tabContainer}
                value={value}
                onChange={handleChange}
                indicatorColor="primary">
                <Tab className={classes.tab} component={Link} to="/" label="Home" />
                <Tab
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  aria-haspopup={anchorEl ? 'true' : undefined}
                  className={classes.tab}
                  component={Link}
                  onMouseOver={event => handleClick(event)}
                  to="/product"
                  label="Product"
                  />
                <Tab className={classes.tab} component={Link} to="/team" label="Team" />
                <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
                <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
              </Tabs>
              <Button variant="contained" color="secondary" className={classes.button}>
                Free Estimate
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                classes={{paper: classes.menu}}
                MenuListProps={{onMouseLeave: handleClose}}
                elevation={0}
              >
                <MenuItem
                  onClick={() => {handleClose(); setValue(1)}}
                  component={Link}
                  to="/product"
                  classes={{root: classes.menuItem}}
                >
                  Product
                </MenuItem>
                <MenuItem
                  onClick={() => {handleClose(); setValue(1)}}
                  component={Link}
                  to="/custom"
                  classes={{root: classes.menuItem}}
                >
                  Custom
                </MenuItem>
                <MenuItem
                  onClick={() => {handleClose(); setValue(1)}}
                  component={Link}
                  to="/mobile"
                  classes={{root: classes.menuItem}}
                >
                  Mobile
                </MenuItem>
                <MenuItem
                  onClick={() => {handleClose(); setValue(1)}}
                  component={Link}
                  to="/web"
                  classes={{root: classes.menuItem}}
                >
                  Web
                </MenuItem>
              </Menu>
            </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}
