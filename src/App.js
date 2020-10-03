import React from 'react';
import './scss/main.scss';
import Home from './pages/home';
import Signup from './pages/signup';
import Event from './pages/event';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import EventSchedule from './pages/eventSchedule';
import Register from './pages/register';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home/:section?" component={Home}/>
          <Route exact path="/signin" component={Signup}/>
          <Route exact path="/event" component={Event}/>
          <Route exact path="/event-schedule" component={EventSchedule}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="*" component={Home}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
