import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './components/Theme';
import Site from './Site';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Site} />
          <Route exact path="/product" component={Site} />
          <Route exact path="/custom" component={Site} />
          <Route exact path="/mobile" component={Site} />
          <Route exact path="/web" component={Site} />
          <Route exact path="/team" component={Site} />
          <Route exact path="/leaders" component={Site} />
          <Route exact path="/careers" component={Site} />
          <Route exact path="/about" component={Site} />
          <Route exact path="/history" component={Site} />
          <Route exact path="/investors" component={Site} />
          <Route exact path="/contact" component={Site} />
          <Route exact path="/offices" component={Site} />
          <Route exact path="/online" component={Site} />
          <Route exact path="/estimate" component={Site} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
