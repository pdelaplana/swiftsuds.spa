import React from 'react';

import { IonListHeader, IonList, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import IonItemLoader from 'components/ionlist/IonItemLoader';
import BottomContainer from 'components/layout/BottomContainer';
import ScrollableContainer from 'components/layout/ScrollableContainer';
import BaseModal from 'components/modal/BaseModal';
import type { ModalProps } from 'components/modal/BaseModal';
import type { Address } from 'domain/entities';
import { useFetchAddressByLabel, useFetchRecentAddresses } from 'hooks/addresses';
import { useAddressSearchModal } from 'hooks/ui/modal/useAddressSearchModal';
import { homeOutline, briefcaseOutline, addCircleOutline, locationOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';


const AddressSelectionModal: React.FC<ModalProps> = ({  onDismiss }) => {

  const history = useHistory();

  const { open: openAddressSearchModal } = useAddressSearchModal();

  const { data: homeAddresses } = useFetchAddressByLabel('Home');

  const { data: recentAddresses, isLoading: isRecentAddressesLoading } = useFetchRecentAddresses();

  const onAddressClick = (address: Address) => {
    history.push({ pathname: '/cart/address/details', state: address });
  };

  return(
    <BaseModal title='Select  Addresss' onDismiss={onDismiss}>
      <ScrollableContainer height='88%'>
        <IonListHeader>Saved Places</IonListHeader>
        <IonList>
          {homeAddresses?.length > 0
          ?
            <IonItem lines='full' detail button onClick={() => onAddressClick(homeAddresses[0]) }>
              <IonIcon icon={homeOutline} slot='start'></IonIcon>
              <IonLabel>
                <h2>{homeAddresses[0]?.label ? homeAddresses[0]?.label : homeAddresses[0].streetAddress1}</h2>
                <p>{homeAddresses[0]?.fullAddress}</p>
              </IonLabel>
            </IonItem>
          :
            <IonItem lines='full' detail button onClick={() => openAddressSearchModal()}>
              <IonIcon icon={homeOutline} slot='start'></IonIcon>
                <IonLabel><p>Add Home</p></IonLabel>
            </IonItem>
          }

          <IonItem lines='full' detail button onClick={() => openAddressSearchModal()}>
            <IonIcon icon={briefcaseOutline} slot='start'></IonIcon>
            <IonLabel><p>Add Work</p></IonLabel>
          </IonItem>
          <IonItem lines='full' detail button>
            <IonIcon icon={addCircleOutline} slot='start'></IonIcon>
            <IonLabel><p>Add New</p></IonLabel>
          </IonItem>
        </IonList>

        <IonListHeader>Recent Places</IonListHeader>
        <IonList>
          <IonItemLoader isLoading={isRecentAddressesLoading}/>
          {recentAddresses?.map(address =>
          <IonItem lines='full' detail button key={address.addressId} onClick={() => onAddressClick(address)}>
            <IonIcon icon={locationOutline} slot='start'></IonIcon>
            <IonLabel>
              <h2>{address.placeName ? address.placeName : address.streetAddress1}</h2>
              <p>{address.fullAddress}</p>
            </IonLabel>
          </IonItem>)}
        </IonList>

      </ScrollableContainer>
      <BottomContainer>
        <IonButton expand='block' onClick={() => openAddressSearchModal()}>Search</IonButton>
      </BottomContainer>

    </BaseModal>
  );
};

export default AddressSelectionModal;
