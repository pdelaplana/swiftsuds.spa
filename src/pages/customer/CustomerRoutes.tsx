import React from 'react';

import UserProfilePage from 'pages/common/user-profile/UserProfilePage';
import { Redirect, Route, Switch } from 'react-router';

import CustomerHomePage from './customer-home/CustomerHomePage';
import NotFoundPage from '../NotFoundPage';
import Page from '../Page';



const CustomerRoutes: React.FC = () => {
  return (
    <>
        {/*
         Use the render method to reduce the number of renders your component will have due to a route change.

        Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
        <Switch>
          <Redirect from="/" to="/home" exact={true} />
          <Route path="/home"  exact={true}>
            <CustomerHomePage/>
          </Route>
          <Route path="/orders"  exact={true}>
            <Page/>
          </Route>
          <Route path="/profile"  exact={true}>
            <UserProfilePage/>
          </Route>
          <Route path="/notifications"  exact={true}>
            <Page/>
          </Route>
          <Route path="/search"  exact={true}>
            <Page/>
          </Route>
          <Route path="*">
            <Redirect to="/home"/>
          </Route>

          <Route>
            <NotFoundPage/>
          </Route>
        </Switch>
    </>
  );
};

export default CustomerRoutes;
