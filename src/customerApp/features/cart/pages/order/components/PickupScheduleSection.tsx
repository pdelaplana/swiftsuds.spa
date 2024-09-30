import React, { useMemo } from 'react';

import { IonList, IonListHeader, IonItem, IonIcon, IonLabel } from '@ionic/react';
import type { PickupSchedule } from 'domain/valueTypes/pickupOption';
import { useCurrencyFormatter } from 'hooks/formatters/useCurrencyFormatter';
import { useNavigator } from 'hooks/useNavigator';
import { timeOutline } from 'ionicons/icons';
import type { CartOrder } from 'providers/cart/cartTypes';

interface PickupScheduleSectionProps {
  order: CartOrder;
}

const PickupScheduleSection: React.FC<PickupScheduleSectionProps> = ({ order }) => {
  const navigator = useNavigator();
  const { currencyFormatter } = useCurrencyFormatter();

  const pickupSchedule = useMemo(() => order.pickupSchedule, [order.pickupSchedule]);

  const onSelectPickupSchedule = () => {

    navigator.go(`/cart/${order.id}/schedule/pickup`, {});
  };

  return(
    <>
      <IonList className='ion-margin-top'>
        <IonListHeader>Pickup On</IonListHeader>
        <IonItem button detail lines='full' onClick={() => onSelectPickupSchedule()}>
          <IonIcon slot='start' icon={timeOutline}></IonIcon>
          { pickupSchedule !== null ?
          <IonLabel>
            <h2>{pickupSchedule.label}</h2>
            <p>{pickupSchedule.description}</p>
            <p>{currencyFormatter(pickupSchedule.cost)}</p>
          </IonLabel>
          :
          <IonLabel>
            <h2>{'Schedule Pickup'}</h2>
            <p>{'Schedule a pickup for your laundry'}</p>
          </IonLabel>
          }

        </IonItem>
      </IonList>

    </>
  );

};

export default PickupScheduleSection;
