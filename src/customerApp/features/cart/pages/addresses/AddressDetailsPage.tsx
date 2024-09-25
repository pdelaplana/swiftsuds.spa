import React, { useMemo } from 'react';

import { IonButton, useIonRouter } from '@ionic/react';
import BottomContainer from 'components/layout/BottomContainer';
import ScrollableContainer from 'components/layout/ScrollableContainer';
import type { Address } from 'domain/entities';
import AuthenticatedPage from 'pages/AuthenticatedPage';
import { useCart } from 'providers/cart/CartProvider';
import { useLocation, useParams } from 'react-router';

import AddressFields from './components/AddressFields';

interface AddressDetailsPageProp {
  mode: 'pickup' | 'dropoff';
}

const AddressDetailsPage: React.FC<AddressDetailsPageProp> = ({mode}) => {
  const { orderId } = useParams<{orderId:string}>();
  const { getOrder, cartDispatch } = useCart();

  const location = useLocation();

  const router = useIonRouter();

  const address = useMemo(() => location.state as Address, [location]);

  const onAddressSelect = (address: Address) => {
    const currentOrder = getOrder(orderId);

    if (mode==='pickup') {
      currentOrder.pickupAddress = address;
      if (currentOrder.dropoffAddress === undefined)
      {
        currentOrder.dropoffAddress = address;
      }
    }
    else
    {
      currentOrder.dropoffAddress = address;
    }

    cartDispatch({ type: 'UPDATE_ORDER', payload: currentOrder });
    router.push( `/cart/${orderId}`, 'back', 'pop');

  };

  return(
    <AuthenticatedPage title={"Address Details"} showProfileIcon={false} defaultBackButtonHref={`/cart/${orderId}/address/${mode}`}>
      <ScrollableContainer>
        <AddressFields address={address}/>
      </ScrollableContainer>
      <BottomContainer>
        <IonButton expand="full" className="ion-padding ion-text-capitalize" onClick={() => onAddressSelect(address)}>
          Choose this address
        </IonButton>
      </BottomContainer>

    </AuthenticatedPage>
  );
};

export default AddressDetailsPage;
