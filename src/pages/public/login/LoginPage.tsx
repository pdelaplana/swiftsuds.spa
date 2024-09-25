import { useState } from 'react';
import React from 'react';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonInput,
  IonRow,
  IonButton,
  IonCol,
  IonIcon,
  IonLabel,
  IonBackButton,
} from '@ionic/react';
import { mailOutline, keyOutline } from 'ionicons/icons';


import MainLogo from '../../../components/mainLogo/MainLogo';

const LoginPage: React.FC = () => {
  const [pageTitle] = useState<string>('Login');

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{pageTitle}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonRow>
          <IonCol className="flex items-center justify-center">
            <MainLogo/>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className="flex items-center justify-center">
          <IonItem style={{width: "80%"}}>
            <IonIcon icon={mailOutline} slot="start"></IonIcon>
            <IonLabel>
              <IonInput label="Email" labelPlacement="stacked" type="email"></IonInput>
            </IonLabel>
          </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className="flex items-center justify-center">
          <IonItem  style={{width: "80%"}}>
            <IonIcon icon={keyOutline} slot="start"></IonIcon>
            <IonLabel>
              <IonInput label="Password" labelPlacement="stacked" type="password"></IonInput>
            </IonLabel>
          </IonItem>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className="flex items-center justify-center">
            <IonButton expand="block" style={{width: "80%"}}>Continue</IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
