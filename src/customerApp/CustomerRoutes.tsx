import React from 'react';

import { IonRouterOutlet } from '@ionic/react';
import UserProfilePage from 'pages/common/user-profile/UserProfilePage';
import { Route, Switch } from 'react-router';
import { animationBuilder } from 'utils/animationBuilder';

import CustomerTabRoutes from './CustomerTabRoutes';
import CartRoutes from './features/cart/CartRoutes';
import OrderRoutes from './features/order/OrderRoutes';
import ShopPage from './features/shop/ShopPage';
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
        <Route path="/order" exact={false}>
          <OrderRoutes  />
        </Route>
        <Route path="/shop/:shopId/services"  exact={false}>
          <ShopPage  />
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
