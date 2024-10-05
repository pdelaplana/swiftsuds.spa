import React from 'react';

import { Route } from 'react-router';

import ShopPage from './ShopPage';
import ShopDetailsPage from './pages/ShopDetailsPage';
import ShopReviewsPage from './pages/ShopReviewsPage';

const ShopRoutes: React.FC = () => {
  return (
    <>
      <Route path="/shop/:shopId/details" exact={true}>
        <ShopDetailsPage  />
      </Route>
      <Route path="/shop/:shopId/reviews"  exact={true}>
        <ShopReviewsPage  />
      </Route>
      <Route path="/shop/:shopId"  exact={true}>
        <ShopPage  />
      </Route>
    </>
  );
};
export default ShopRoutes;
