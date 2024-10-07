import React from 'react';

import { IonRouterOutlet } from '@ionic/react';
import UserProfilePage from 'pages/common/userProfile/UserProfilePage';
import { Route, Switch } from 'react-router';
import { animationBuilder } from 'utils/animationBuilder';

import CustomerTabRoutes from './CustomerTabRoutes';
import CartRoutes from './features/cart/CartRoutes';
import OrderRoutes from './features/order/OrderRoutes';
import ShopRoutes from './features/shop/ShopRoutes';
import NotFoundPage from '../pages/NotFoundPage';

const CustomerRoutes: React.FC = () => {
  return (
    <IonRouterOutlet animation={animationBuilder}>
      <Switch>
        <Route path="/profile"  exact={true}>
          <UserProfilePage/>
        </Route>
        <Route path="/cart">
          <CartRoutes/>
        </Route>
        <Route path="/order">
          <OrderRoutes  />
        </Route>
        <Route path="/shop">
          <ShopRoutes  />
        </Route>
        <Route path="/">
          <CustomerTabRoutes/>
        </Route>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
    </IonRouterOutlet>
  );
};

export default CustomerRoutes;
