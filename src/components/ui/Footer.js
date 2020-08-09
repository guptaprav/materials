import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.mBlue,
    width: '100%',
    zIndex: 1302,
    position: 'relative'
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
    width: '21em'
    },
    [theme.breakpoints.down('xs')]: {
    width: '15em'
    }
  },
  mainContainer: {
    position: 'absolute'
  },
  link: {
      color: 'white',
      fontFamily: 'Arial',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      textDecoration: 'none'
  },
  gridItem: {
    margin: '3em'
  },
  icon: {
    height: '3em',
    width: '3em',
    [theme.breakpoints.down('sm')]: {
      height: '2em',
      width: '2em'
    }
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('sm')]: {
      right: '0.6em'
    }
  }
}))

export default function Footer(props) {
  const classes = useStyles();
  const { setValue, setSelectedIdx } = props;

  return (
    <footer className={classes.footer}>
      <Hidden smDown>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/" onClick={() => setValue(0)} className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/product" onClick={() => {setSelectedIdx(0); setValue(1)}} className={classes.link}>
              Product
            </Grid>
            <Grid item component={Link} to="/custom" onClick={() => {setSelectedIdx(1); setValue(1)}} className={classes.link}>
              Custom
            </Grid>
            <Grid item component={Link} to="/mobile"  onClick={() => {setSelectedIdx(2); setValue(1)}} className={classes.link}>
              Mobile
            </Grid>
            <Grid item component={Link} to="/web" onClick={() => {setSelectedIdx(3); setValue(1)}} className={classes.link}>
              Web
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/team" onClick={() => setValue(2)} className={classes.link}>
              Team
            </Grid>
            <Grid item component={Link} to="/leaders" onClick={() => setValue(2)} className={classes.link}>
              Leaders
            </Grid>
            <Grid item component={Link} to="/careers" onClick={() => setValue(2)} className={classes.link}>
              Careers
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/about" onClick={() => setValue(3)} className={classes.link}>
              About Us
            </Grid>
            <Grid item component={Link} to="/history" onClick={() => setValue(3)} className={classes.link}>
              History
            </Grid>
            <Grid item component={Link} to="/investors" onClick={() => setValue(3)} className={classes.link}>
              Investors
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/contact" onClick={() => setValue(4)} className={classes.link}>
              Contact Us
            </Grid>
            <Grid item component={Link} to="/offices" onClick={() => setValue(4)} className={classes.link}>
              Offices
            </Grid>
            <Grid item component={Link} to="/online" onClick={() => setValue(4)} className={classes.link}>
              On Web
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Hidden>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
      <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
        <Grid item component="a" href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
          <img alt="facebook logo" src={facebook} className={classes.icon} />
        </Grid>
        <Grid item component="a" href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
          <img alt="twitter logo" src={twitter} className={classes.icon} />
        </Grid>
        <Grid item component="a" href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
          <img alt="instagram logo" src={instagram} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  )
}
