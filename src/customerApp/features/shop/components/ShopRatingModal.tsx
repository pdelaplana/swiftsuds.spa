import React, { useState } from 'react';

import { IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonContent, IonItem, IonList, IonLabel, IonTextarea, IonIcon, IonRange, IonText, IonInput, IonSelect, IonSelectOption } from '@ionic/react';
import { star } from 'ionicons/icons';

interface RatingModalProps {
  shopid: string;
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
}

const ShopRatingModal: React.FC<RatingModalProps> = ({ shopid, onDismiss }) => {
  const [rating, setRating] = useState<number>(0);

  return (
    <IonPage>
        <IonHeader className='ion-no-border'>
        <IonToolbar>
          <IonButtons slot='end'>
            <IonButton onClick={() => onDismiss('', 'cancel')} strong={true}>
              x
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList className='ion-margin-top'>
          <IonItem lines='none'>
            <IonLabel>
              <p>
                Please rate our shop to help us improve our services
              </p>
            </IonLabel>
          </IonItem>

          <IonItem lines='full'>
            <IonInput label='Name' labelPlacement='stacked' placeholder=''></IonInput>
          </IonItem>
          <IonItem lines='full'>
            <IonInput label='Email' labelPlacement='stacked' placeholder=''></IonInput>
          </IonItem>
          <IonItem lines='full'>
            <IonTextarea label='Your Review' labelPlacement='stacked' placeholder='Tell us what you think' autoGrow style={{height:'150px'}}></IonTextarea>
          </IonItem>
          <IonItem lines='full'>
            <IonLabel slot='start'>Rating</IonLabel>
            <IonIcon icon={star} slot='start' color={rating > 0 ? 'primary': 'medium'} onClick={() => setRating(1)}></IonIcon>
            <IonIcon icon={star} slot='start' color={rating > 1 ? 'primary': 'medium'} onClick={() => setRating(2)}></IonIcon>
            <IonIcon icon={star} slot='start' color={rating > 2 ? 'primary': 'medium'} onClick={() => setRating(3)}></IonIcon>
            <IonIcon icon={star} slot='start' color={rating > 3 ? 'primary': 'medium'} onClick={() => setRating(4)}></IonIcon>
            <IonIcon icon={star} slot='start' color={rating > 4 ? 'primary': 'medium'} onClick={() => setRating(5)}></IonIcon>
          </IonItem>

        </IonList>
        <IonButton expand='full' className='ion-margin'  color='primary' onClick={() => onDismiss('', 'submit')}>Submit</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ShopRatingModal;
