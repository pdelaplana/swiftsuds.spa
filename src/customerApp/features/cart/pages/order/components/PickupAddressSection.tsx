import React, { useMemo } from 'react';

import { IonIcon, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';
import { mapOutline } from 'ionicons/icons';
import type { CartOrder } from 'providers/cart/cartTypes';

interface PickupAddressSectionProps {
  order: CartOrder;
}


const PickupAddressSection: React.FC<PickupAddressSectionProps> = ({order}) => {


  const address = useMemo(() => {
    const pickupAddress = order?.pickupAddress;
    return pickupAddress ?? {
      addressId:'',
      label:'Current Location',
      fullAddress: 'Cannot determine current location'
    };
  }, [order?.pickupAddress]);

  return(
    <>
      <IonList className='ion-margin-top'>
        <IonListHeader>Pickup Address</IonListHeader>
        <IonItem lines='full' detail button routerLink={`/cart/${order?.id}/address/pickup`} >
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

export default PickupAddressSection;


