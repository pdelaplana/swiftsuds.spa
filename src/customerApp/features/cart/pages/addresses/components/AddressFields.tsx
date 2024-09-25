import React from 'react';

import { IonList, IonItem, IonInput, IonListHeader, IonLabel, IonTextarea } from '@ionic/react';
import type { Address } from 'domain/entities';


interface AddressFieldsProp {
  address: Address;
}

const AddressFields: React.FC<AddressFieldsProp> = ({address}) => {

  return(
    <>
      <IonList className='ion-margin-top'>
        <IonListHeader>Address Information</IonListHeader>
        <IonItem lines={"full"}>
          <IonInput label="Street" labelPlacement="stacked" placeholder="Enter text" value={address?.streetAddress1}></IonInput>
        </IonItem>
        <IonItem lines={"full"}>
          <IonInput label="Street" labelPlacement="stacked" placeholder="Enter text" value={address?.streetAddress2}></IonInput>
        </IonItem>
        <IonItem lines={"full"}>
          <IonInput label="City" labelPlacement="stacked" placeholder="Enter text" value={address?.cityOrSuburb}></IonInput>
        </IonItem>
        <IonItem lines={"full"}>
          <IonInput label="Province" labelPlacement="stacked" placeholder="Enter text" value={address?.stateOrProvince}></IonInput>
        </IonItem>
        <IonItem lines={"full"}>
          <IonInput label="Post Code" labelPlacement="stacked" placeholder="Enter text" value={address?.postCode}></IonInput>
        </IonItem>
      </IonList>

      <IonList className='ion-margin-top'>
        <IonListHeader>Address Label</IonListHeader>
        <IonItem lines='full'>
          <IonInput label="Label" labelPlacement="stacked" placeholder="e.g. Home, Work, Gym, School" value={address.label}></IonInput>
        </IonItem>
        <IonItem lines='none'>
          <IonLabel color='dark'>
            <small color='warning'>
              Personalize your experience by labelling your saved places.  Your saved places will not be shared with anyone.
            </small>
          </IonLabel>

        </IonItem>
      </IonList>

      <IonList className='ion-margin-top ion-margin-bottom'>
        <IonListHeader>Pickup And Dropoff</IonListHeader>
        <IonItem lines='full'>
          <IonTextarea label='Pickup Instructions' labelPlacement='stacked' placeholder='Specify how you want your laundry to be picked up'></IonTextarea>
        </IonItem>
        <IonItem lines='full'>
          <IonTextarea label='Dropoff Instructions' labelPlacement='stacked' placeholder='Specific how you want your laundry to be dropped off'></IonTextarea>
        </IonItem>
      </IonList>

    </>
  );
};

export default AddressFields;
