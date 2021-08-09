import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/cred/login';
import Register from './pages/cred/Register';
import Home from './pages/home/home';
import Create from './pages/post/create/create';
import Profile from './pages/profile/my-profile';
import View from './pages/view/View';
import PrivateRoute from './pages/private/PrivateRoute';

function App() {
  return (
    <>
      <Switch>
        <PrivateRoute exact path="/home" component={Home} />
        <Route path='/' exact render={() => <h1>Home page is not yet made.</h1>} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        {/* <Route path='/home' exact render={() => <Home />} /> */}
        <Route path='/create' exact component={Create} />
        <Route path='/my-profile/:id' exact component={Profile} />
        <Route path='/post/view/:id' exact component={View} />
      </Switch>
    </>
  );
}

export default App;
