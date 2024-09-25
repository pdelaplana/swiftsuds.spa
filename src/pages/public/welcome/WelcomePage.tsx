import React from 'react';

import { AccountInfo } from '@azure/msal-browser';
import { useMsal } from '@azure/msal-react';
import { IonButton, IonCol, IonContent, IonIcon, IonPage, IonRouterLink, IonRow, IonText } from '@ionic/react';
import MainLogo from 'components/mainLogo/MainLogo';
import { loginRequest } from 'providers/auth/AuthConfig';

import './WelcomePage.css';



const WelcomePage: React.FC = () => {
	const { instance, inProgress } = useMsal();
	let activeAccount;

	if (instance) {
		activeAccount = instance.getActiveAccount();

	}

	const handleLogin = () => {
		instance.loginRedirect(loginRequest).catch((error) => console.log(error));
	};

	return (
		<IonPage>
			<IonContent>
				<IonRow>
					<IonCol className="flex items-center justify-center">
						<MainLogo />
					</IonCol>
				</IonRow>
				<IonRow>
					<IonCol className="flex items-center justify-center">
						<IonText>
							<h1 className="text-center">Get Started - Its Free! No Credit Card Required</h1>
						</IonText>
					</IonCol>
				</IonRow>


				<IonRow>
					<IonCol className="flex items-center justify-center" data-testid="create-your-account">
						<IonButton expand="block" fill="solid" style={{ width: '80%' }} onClick={handleLogin}>
							Create Your Account
						</IonButton>
					</IonCol>
				</IonRow>

				<IonRow>
					<IonCol className="flex justify-center">
						<IonText>
							Already have an account? <IonRouterLink onClick={handleLogin}>Log in</IonRouterLink>
						</IonText>
					</IonCol>
				</IonRow>
			</IonContent>
		</IonPage>
	);
};

export default WelcomePage;
