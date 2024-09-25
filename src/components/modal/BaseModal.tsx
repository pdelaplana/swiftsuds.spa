import React from 'react';
import type { PropsWithChildren } from 'react';

import { IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonContent } from '@ionic/react';

export interface ModalProps extends PropsWithChildren{
  title: string;
  header?: React.ReactNode;
  onDismiss: (data?:unknown,  role?: string) => void;
}


const BaseModal : React.FC<ModalProps>= ({ title, header, onDismiss, children}) => {

  return(
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar>
        <IonButtons slot='end'>
            <IonButton onClick={() => onDismiss('', 'cancel')} strong={true}>
              x
            </IonButton>
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
        {header}
      </IonHeader>
      <IonContent color='light'>
        {children}
      </IonContent>
    </IonPage>
  );
};

export default BaseModal;
