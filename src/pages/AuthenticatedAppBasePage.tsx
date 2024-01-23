import React from 'react';

import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonMenuButton,
	IonTitle,
	IonContent,
	IonButton,
	IonIcon,
  IonBackButton,
} from '@ionic/react';
import { personOutline } from 'ionicons/icons';

import './AuthenticatedAppBasePage.css';

interface AuthenticatedAppBasePageProps {
	title: string;
  showProfileIcon: boolean;
	children: React.ReactNode;
}

const AuthenticatedAppBasePage: React.FC<AuthenticatedAppBasePageProps> = ({ title, children, showProfileIcon=true }) => {
	return (
		<IonPage>
			<IonHeader className="ion-no-border" >
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton />
					</IonButtons>
					<IonTitle>{title}</IonTitle>
          { showProfileIcon &&
            <IonButtons slot="end">
              <IonButton routerLink='/profile'>
                <IonIcon slot="icon-only" icon={personOutline} />
              </IonButton>
            </IonButtons>
          }

				</IonToolbar>
			</IonHeader>

			<IonContent color="light" >
				{children}
			</IonContent>
		</IonPage>
	);
};

export default AuthenticatedAppBasePage;
