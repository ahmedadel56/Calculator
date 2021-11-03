import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import './App.css';
import Calculator from './components/Calculator';
import Nav from './components/Nav';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/calculator">
              <div div className="App">
                <Calculator />
              </div>
            </Route>
            <Route path="/quotes">
              <Quotes />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
