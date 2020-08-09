import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';

function App() {
  const [value, setValue] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
        <Switch>
          <Route exact path="/" component={() => <div>Hello DUMMY Home ..!</div>} />
          <Route exact path="/product" component={() => <div>Hello DUMMY Product ..!</div>} />
          <Route exact path="/custom" component={() => <div>Hello DUMMY Custom ..!</div>} />
          <Route exact path="/mobile" component={() => <div>Hello DUMMY Mobile ..!</div>} />
          <Route exact path="/web" component={() => <div>Hello DUMMY Web ..!</div>} />
          <Route exact path="/team" component={() => <div>Hello DUMMY Team ..!</div>} />
          <Route exact path="/leaders" component={() => <div>Hello DUMMY Leaders ..!</div>} />
          <Route exact path="/careers" component={() => <div>Hello DUMMY Careers ..!</div>} />
          <Route exact path="/about" component={() => <div>Hello DUMMY About Us ..!</div>} />
          <Route exact path="/history" component={() => <div>Hello DUMMY History ..!</div>} />
          <Route exact path="/investors" component={() => <div>Hello DUMMY Investors ..!</div>} />
          <Route exact path="/contact" component={() => <div>Hello DUMMY Contact Us ..!</div>} />
          <Route exact path="/offices" component={() => <div>Hello DUMMY Offices ..!</div>} />
          <Route exact path="/online" component={() => <div>Hello DUMMY Online on Web ..!</div>} />
          <Route exact path="/estimate" component={() => <div>Hello DUMMY Estimate ..!</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
