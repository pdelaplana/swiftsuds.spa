import React, { useEffect, useState } from 'react';

import { IonList, IonItem, IonLabel, IonListHeader, IonIcon, IonSearchbar, IonToolbar, IonSpinner } from '@ionic/react';
import IonItemLoader from 'components/ionlist/IonItemLoader';
import ScrollableContainer from 'components/layout/ScrollableContainer';
import type { Address } from 'domain/entities';
import { useFetchRecentAddresses, useFetchAddressByLabel, useFetchAddresses } from 'hooks/addresses';
import { useAddressSearchModal } from 'hooks/ui/modal/useAddressSearchModal';
import { addCircleOutline, briefcaseOutline, homeOutline, locationOutline, navigateCircleOutline } from 'ionicons/icons';
import AuthenticatedPage from 'pages/AuthenticatedPage';
import { useHistory, useParams } from 'react-router';

interface AddressSearchPageProps {
  mode: 'pickup' | 'dropoff';
}

const AddressSelectionPage : React.FC<AddressSearchPageProps> = ({mode}) => {

  const { orderId } = useParams<{orderId:string}>();

  const history = useHistory();

  const [title, setTitle] = useState<string>(`Select ${ mode === 'pickup' ? 'Pickup' : 'Delivery'} Address`);

  const [searchTerm, setSearchTerm ] = useState<string>(undefined);

  const [searchMode, setSearchMode] = useState<boolean>(false);

  const [createMode, setCreateMode] = useState<boolean>(false);

  const { open: openAddressSearchModal } = useAddressSearchModal();

  const { data: homeAddresses } = useFetchAddressByLabel('Home');

  const { data: recentAddresses, isLoading: isRecentAddressesLoading } = useFetchRecentAddresses();

  const { data: addresses, isLoading } = useFetchAddresses(searchTerm);

  const onAddressClick = (address: Address) => {

    if (createMode){
      history.push({ pathname: `/cart/${orderId}/address/${mode}/new`, state: address });
    } else {
      history.push({ pathname: `/cart/${orderId}/address/${mode}/details`, state: address });
    }
  };

  const onSearchInput = (event:Event) => {
    let query = '';
    const target = event.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();
    setSearchTerm(query);
  };

  const onNewAddressClick = () => {
    setTitle('Add Work Address');
    setCreateMode(true);

  };

  useEffect(() => setSearchMode(searchTerm?.length > 0),[searchTerm]);

  return(
    <AuthenticatedPage title={title} showProfileIcon={false} defaultBackButtonHref={`/cart/${orderId}`}>

      <ScrollableContainer height='100%'>

        <IonToolbar className='transparent-background'>
          <IonSearchbar  mode="md" debounce={1000} onIonInput={(e)=>onSearchInput(e)} placeholder='Select address'></IonSearchbar>
        </IonToolbar>

        {!searchMode && !createMode &&
          <>
          <IonList className='ion-margin-top'>
            <IonListHeader>Nearby</IonListHeader>

            <IonItem lines='none' detail button>
              <IonIcon icon={navigateCircleOutline} slot='start'></IonIcon>
              <IonLabel>
                <h2>Use Current Location</h2>
                <p>Add your address later</p>
              </IonLabel>
            </IonItem>
          </IonList>

          <IonList className='ion-margin-top'>
            <IonListHeader>Saved Places</IonListHeader>
            {
              homeAddresses?.length > 0
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
                    <IonLabel><p>Set Home</p></IonLabel>
                </IonItem>
            }

            <IonItem lines='full' detail button onClick={() => onNewAddressClick()}>
              <IonIcon icon={briefcaseOutline} slot='start'></IonIcon>
              <IonLabel><p>Set Work</p></IonLabel>
            </IonItem>
            <IonItem lines='none' detail button>
              <IonIcon icon={addCircleOutline} slot='start'></IonIcon>
              <IonLabel><p>Add Label</p></IonLabel>
            </IonItem>
          </IonList>

          <IonList className='ion-margin-top'>
            <IonListHeader>Recent Places</IonListHeader>
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
          </>
        }

        {(searchMode || createMode) &&
          <>
          <IonList>
            {isLoading &&
              <IonItem lines={'none'}  className='ion-text-center'>
                <IonLabel><IonSpinner name='dots'/></IonLabel>
              </IonItem>
            }
            {addresses?.map(address=>
              <IonItem button detail lines='full' onClick={() => onAddressClick(address)} >
                <IonLabel>
                  <h2>{address.placeName ? address.placeName : address.streetAddress1}</h2>
                  <p>{address.fullAddress}</p>
                </IonLabel>
              </IonItem>
            )}
          </IonList>
          </>
        }

      </ScrollableContainer>

    </AuthenticatedPage>
  );
};

export default AddressSelectionPage;
