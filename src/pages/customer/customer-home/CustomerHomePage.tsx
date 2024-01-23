import React from 'react';

import {
	IonButton,
	IonContent,
	IonLabel,
} from '@ionic/react';
import AuthenticatedAppBasePage from 'pages/AuthenticatedAppBasePage';

const CustomerHomePage: React.FC = () => {
	return (
		<AuthenticatedAppBasePage title={'SwiftSuds'} showProfileIcon={true}>
      <IonContent className="ion-padding">
        <IonLabel>Services</IonLabel>

      </IonContent>

      <IonContent className="ion-padding">
      <IonLabel>Active Orders</IonLabel>
      </IonContent>
		</AuthenticatedAppBasePage>
	);
};

export default CustomerHomePage;
