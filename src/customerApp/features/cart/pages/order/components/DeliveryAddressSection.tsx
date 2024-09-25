import React, { useMemo } from 'react';

import { IonIcon, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';
import { mapOutline } from 'ionicons/icons';
import type { CartOrder } from 'providers/cart/cartTypes';

interface DeliveryAddressSectionProps {
  order: CartOrder
}

const DeliveryAddressSection: React.FC <DeliveryAddressSectionProps>= ({ order }) => {

  const address = useMemo(() => {
    const dropoffAddress = order?.dropoffAddress;
    return dropoffAddress ?? {
      addressId:'',
      label:'Current Location',
      fullAddress: 'Cannot determine current location'
    };
  }, [order?.dropoffAddress]);


  return(
    <>
      <IonList className='ion-margin-top'>
        <IonListHeader>Delivery Address</IonListHeader>
        <IonItem lines='full' detail button routerLink={`/cart/${order.id}/address/dropoff`} >
          <IonIcon icon={mapOutline} slot='start'></IonIcon>
          <IonLabel>
            <h2>{address?.label}</h2>
            <p>{address?.fullAddress}</p>
          </IonLabel>
        </IonItem>
      </IonList>
    </>
  );
};

export default DeliveryAddressSection;


