import React, { useMemo } from 'react';

import { IonButton, useIonRouter } from '@ionic/react';
import BottomContainer from 'components/layout/BottomContainer';
import ScrollableContainer from 'components/layout/ScrollableContainer';
import type { Address } from 'domain/entities';
import { useCreateSavedAddress } from 'hooks/addresses/useCreateSavedAddress';
import AuthenticatedPage from 'pages/AuthenticatedPage';
import { useLocation } from 'react-router';

import AddressFields from './components/AddressFields';


const AddSavedAddressPage: React.FC = () => {

  const location = useLocation();
  const router = useIonRouter();

  const address = useMemo(() => location.state as Address, [location]);

  const { mutate} = useCreateSavedAddress();

  const onAddressSave = (address: Address) => {
      mutate(address);
      router.push( '/cart/address', 'back', 'pop');
  };

  return(
    <AuthenticatedPage title={"Edit Address"} showProfileIcon={false} defaultBackButtonHref={'/cart/address'}>
      <ScrollableContainer>
        <AddressFields address={address}/>
      </ScrollableContainer>
      <BottomContainer>
        <IonButton expand="full" className="ion-padding ion-text-capitalize" onClick={() => onAddressSave(address)}>
          Save address
        </IonButton>
      </BottomContainer>
    </AuthenticatedPage>
  );
};

export default AddSavedAddressPage;
