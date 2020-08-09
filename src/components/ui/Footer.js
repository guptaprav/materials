import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import footerAdornment from '../../assets/Footer Adornment.svg';

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
  }
}))

export default function Footer(props) {
  const classes = useStyles();
  const { value, selectedIdx, setValue, setSelectedIdx } = props;

  return (
    <footer className={classes.footer}>
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
            <Grid item component={Link} to="/custom" onClick={() => {setSelectedIdx(1); setValue(1)}} onClick={() => setValue(0)} className={classes.link}>
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
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  )
}
