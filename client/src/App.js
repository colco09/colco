import React from 'react';
import { Route } from 'react-router-dom';

import Login from './pages/cred/login';
import Signup from './pages/cred/signup';
import Home from './pages/home/home';
import Create from './pages/post/create/create';
import Profile from './pages/profile/my-profile';
import View from './pages/view/View';

function App() {
  return (
    <>
      <Route path='/' exact render={() => <h1>Home page is not yet made.</h1>} />
      <Route path='/login' render={() => <Login />} />
      <Route path='/register' render={() => <Signup />} />
      <Route path='/home' render={() => <Home />} />
      <Route path='/create' render={() => <Create />} />
      <Route path='/my-profile' render={() => <Profile />} />
      <Route path='/post/view/:id' render={() => <View />} />
    </>
  );
}

export default App;
