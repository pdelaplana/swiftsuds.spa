import React from 'react';

import { Route } from 'react-router';

import OrderDetailsPage from './pages/orderDetails/OrderDetailsPage';

const OrderRoutes: React.FC = () => {
  return (
    <>
      <Route path="/order/:bookingId" exact={true}>
        <OrderDetailsPage />
      </Route>
    </>
  );
};
export default OrderRoutes;
