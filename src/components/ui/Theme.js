import { createMuiTheme } from '@material-ui/core/styles';

const mBlue = '#0B72B9';
const mOrange = '#FFBA60';
export default createMuiTheme({
  palette: {
    common: {
      inteliBlue: `${mBlue}`,
      inteliOrange: `${mOrange}`
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
    }
  }
});
