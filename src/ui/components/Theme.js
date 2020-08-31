import { createMuiTheme } from '@material-ui/core/styles';

const mBlue = '#0B72B9';
const mOrange = '#FFBA60';
export default createMuiTheme({
  palette: {
    common: {
      mBlue: `${mBlue}`,
      mOrange: `${mOrange}`
    },
    primary: {
      main: `${mBlue}`
    },
    secondary: {
      main: `${mOrange}`
    }
  },
  typography: {
    h3: {
      fontWeight: 300
    },
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem'
    },
    estimate: {
    fontFamily: 'Pacifico',
    fontSize: '1rem',
    textTransform: 'none',
    color: 'white'
    }
  }
});
