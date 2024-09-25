import React from 'react';

import { IonReactRouter } from '@ionic/react-router';

import CustomerRoutes from './CustomerRoutes';


const CustomerAppRouter: React.FC = () => {
	return (
		<IonReactRouter>
      <CustomerRoutes/>
		</IonReactRouter>
	);
};

export default CustomerAppRouter;
