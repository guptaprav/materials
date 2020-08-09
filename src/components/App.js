import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme';
import Header from '../components/ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Hello DUMMY Home ..!</div>} />
          <Route exact path="/product" component={() => <div>Hello DUMMY Product ..!</div>} />
          <Route exact path="/team" component={() => <div>Hello DUMMY Team ..!</div>} />
          <Route exact path="/about" component={() => <div>Hello DUMMY About Us ..!</div>} />
          <Route exact path="/contact" component={() => <div>Hello DUMMY Contact Us ..!</div>} />
          <Route exact path="/custom" component={() => <div>Hello DUMMY Custom ..!</div>} />
          <Route exact path="/mobile" component={() => <div>Hello DUMMY Mobile ..!</div>} />
          <Route exact path="/web" component={() => <div>Hello DUMMY Web ..!</div>} />
          <Route exact path="/estimate" component={() => <div>Hello DUMMY Estimate ..!</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
