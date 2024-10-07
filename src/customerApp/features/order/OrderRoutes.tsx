import React from 'react';

import { Route } from 'react-router';

import OrderDetailsPage from './pages/orderDetails/OrderDetailsPage';
import OrderListPage from './pages/orderList/OrderListPage';

const OrderRoutes: React.FC = () => {
  return (
    <>
      <Route path='/order/:bookingId' exact={true}>
        <OrderDetailsPage />
      </Route>
      <Route path='/order/list' exact={true}>
        <OrderListPage />
      </Route>
    </>
  );
};
export default OrderRoutes;
