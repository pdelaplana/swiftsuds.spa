import React, { useState } from 'react';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonContent,
  IonIcon,
  IonItem,
  IonInput,
  IonFooter,
  IonButton,
  IonLabel,
  IonBackButton,
  IonRow,
  IonCol,
} from '@ionic/react';
import MainLogo from 'components/main-logo/MainLogo';
import { mailOutline,  personOutline, phonePortraitOutline } from 'ionicons/icons';

const RegistrationPage: React.FC = () => {
  const [pageTitle] = useState<string>('Registration');

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

      <IonContent>

        <IonRow>
          <IonCol className="flex items-center justify-center">
            <MainLogo/>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol className="flex justify-center">
          <IonItem style={{width: "80%"}}>
            <IonIcon icon={personOutline} slot="start"></IonIcon>
            <IonLabel>
              <IonInput label="Full Name" labelPlacement="stacked" type="text"></IonInput>
            </IonLabel>
          </IonItem>
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
            <IonIcon icon={phonePortraitOutline} slot="start"></IonIcon>
            <IonLabel>
              <IonInput label="Phone" labelPlacement="stacked" type="email"></IonInput>
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

      <IonFooter>

      </IonFooter>
    </IonPage>
  );
};

export default RegistrationPage;
