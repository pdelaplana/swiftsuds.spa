import React, { useState } from 'react';

import { IonPage, IonHeader, IonToolbar, IonButtons, IonTitle, IonSearchbar, IonContent, IonButton, IonItem, IonLabel, IonList, IonSpinner } from '@ionic/react';
import BottomContainer from 'components/layout/BottomContainer';
import ScrollableContainer from 'components/layout/ScrollableContainer';
import { useFetchAddresses } from 'hooks/addresses/useFetchAddresses';

interface AddressSearchModalProps {
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
}

const AddressSearchModal: React.FC<AddressSearchModalProps> = ({onDismiss}) => {

  const [searchTerm, setSearchTerm ] = useState<string>(undefined);

  const { data: addresses, isLoading } = useFetchAddresses(searchTerm);

  const onSearchInput = (event:Event) => {
    let query = '';
    const target = event.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();
    setSearchTerm(query);
  };

  return(
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar>
        <IonButtons slot='end'>
            <IonButton onClick={() => onDismiss('', 'cancel')} strong={true}>
              x
            </IonButton>
          </IonButtons>
          <IonTitle>Search Address</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar debounce={1000} onIonInput={(e)=>onSearchInput(e)} placeholder='Where to?'></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent color='light'>
        <ScrollableContainer >
          <IonList>
            {isLoading &&
              <IonItem lines={'none'}  className='ion-text-center'>
                <IonLabel><IonSpinner name='dots'/></IonLabel>
              </IonItem>
            }
            {addresses?.map(address=>
              <IonItem button detail lines='full' routerLink='/cart/address/details' >
                <IonLabel>
                  <h2>{address.placeName ? address.placeName : address.streetAddress1}</h2>
                  <p>{address.fullAddress}</p>
                </IonLabel>
              </IonItem>
            )}
          </IonList>
        </ScrollableContainer>
        <BottomContainer>
          <IonButton expand='block'>Add New Address</IonButton>
        </BottomContainer>
      </IonContent>
    </IonPage>
  );
};

export default AddressSearchModal;
