import React from 'react';

import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { homeOutline, shirtOutline, searchOutline, notificationsOutline } from 'ionicons/icons';
import { Redirect, Route, Switch } from 'react-router';
import { animationBuilder } from 'utils/animationBuilder';

import CustomerHomePage from './features/home/CustomerHomePage';
import NotFoundPage from '../pages/NotFoundPage';
import Page from '../pages/Page';


const navbar = [
	{
		name: 'home',
		url: '/home',
		icon: homeOutline,
		label: 'Home',
	},
	{
		name: 'orders',
		url: '/orders',
		icon: shirtOutline,
		label: 'Orders',
	},
	{
		name: 'search',
		url: '/search',
		icon: searchOutline,
		label: 'Shops',
	},
	{
		name: 'notifications',
		url: '/notifications',
		icon: notificationsOutline,
		label: 'Notifications',
	},
];

const CustomerTabRoutes: React.FC = () => {
  return (
    <>
    <IonTabs>
      <IonRouterOutlet animation={animationBuilder}>
        <Switch>
          <Route path="/home"  exact={true}>
            <CustomerHomePage/>
          </Route>

          <Route path="/orders"  exact={true}>
            <Page/>
          </Route>
t
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
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
            {navbar.map((navbaritem) => (
              <IonTabButton tab={navbaritem.name} href={navbaritem.url} key={navbaritem.name}>
                <IonIcon icon={navbaritem.icon} />
                <IonLabel>{navbaritem.label}</IonLabel>
              </IonTabButton>
            ))}
      </IonTabBar>
    </IonTabs>
    </>
  );
};

export default CustomerTabRoutes;
