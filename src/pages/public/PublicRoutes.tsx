import React from 'react';

import { Redirect, Route, Switch } from 'react-router';


import LoginPage from './login/LoginPage';
import RegistrationPage from './registration/RegistrationPage';
import WelcomePage from './welcome/WelcomePage';
import NotFoundPage from '../NotFoundPage';


const PublicRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/login" exact={true}>
        <LoginPage />
      </Route>
      <Route path="/register" exact={true}>
        <RegistrationPage />
      </Route>
      <Route path="/welcome" exact={false}>
        <WelcomePage />
      </Route>
      <Redirect from="/" to="/welcome" exact={false} />
      <Route>
        <NotFoundPage/>
      </Route>

    </Switch>
  );
};

export default PublicRoutes;
