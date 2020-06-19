import React from 'react';
import './scss/main.scss';
import Home from './pages/home';
import Signup from './pages/signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={Signup}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
