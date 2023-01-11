import React from 'react';
import Layout from './components/Layout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Signup" component={Signup}></Route>
          <Route exact path="/Signin" component={Signin}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App