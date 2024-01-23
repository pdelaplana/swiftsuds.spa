import React from 'react';

import { useAccount, useMsal } from '@azure/msal-react';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, shirtOutline, searchOutline, notificationsOutline } from 'ionicons/icons';
import { animationBuilder } from 'utils/animationBuilder';

import CustomerRoutes from './CustomerRoutes';


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

const CustomerAppRouter: React.FC = () => {

  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});

  console.log('account',account);

	return (
		<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet animation={animationBuilder}>
					<CustomerRoutes />
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
		</IonReactRouter>
	);
};

export default CustomerAppRouter;
