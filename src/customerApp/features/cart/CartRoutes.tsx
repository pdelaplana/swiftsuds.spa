import React from 'react';

import {  Route } from 'react-router';

import AddSavedAddressPage from './pages/addresses/AddSavedAddressPage';
import AddressDetailsPage from './pages/addresses/AddressDetailsPage';
import AddressSelectionPage from './pages/addresses/AddressSelectionPage';
import CartListPage from './pages/list/CartListPage';
import CartOrderPage from './pages/order/CartOrderPage';
import SchedulePage from './pages/schedule/SchedulePage';
import TimeSlotsSelectionPage from './pages/timeslots/TimeSlotsSelectionPage';

const CartRoutes: React.FC = () => {
  return(
    <>

      <Route path="/cart/:orderId/address/pickup" exact={true}>
        <AddressSelectionPage mode='pickup'/>
      </Route>
      <Route path="/cart/:orderId/address/dropoff" exact={true}>
        <AddressSelectionPage mode='dropoff'/>
      </Route>
      <Route path="/cart/:orderId/address/pickup/details" exact={true}>
        <AddressDetailsPage mode='pickup' />
      </Route>
      <Route path="/cart/:orderId/address/dropoff/details" exact={true}>
        <AddressDetailsPage mode='dropoff' />
      </Route>
      <Route path="/cart/:orderId/address/new" exact={true}>
        <AddSavedAddressPage/>
      </Route>
      <Route path="/cart/:orderId/pickup/timeslots" exact={true}>
        <TimeSlotsSelectionPage mode='pickup' />
      </Route>
      <Route path="/cart/:orderId/dropoff/timeslots" exact={true}>
        <TimeSlotsSelectionPage mode='dropoff' />
      </Route>
      <Route path="/cart/:orderId/delivery/timeslots" exact={true}>
        <TimeSlotsSelectionPage mode='dropoff' />
      </Route>
      <Route path="/cart/:orderId/schedule/pickup" exact={true}>
        <SchedulePage mode='pickup' />
      </Route>
      <Route path="/cart/:orderId/schedule/dropoff" exact={true}>
        <SchedulePage mode='dropoff' />
      </Route>


      <Route path="/cart/:orderId" exact={true}>
        <CartOrderPage />
      </Route>

      <Route path="/cart" exact={true}>
        <CartListPage />
      </Route>

    </>
  );
};

export default CartRoutes;
