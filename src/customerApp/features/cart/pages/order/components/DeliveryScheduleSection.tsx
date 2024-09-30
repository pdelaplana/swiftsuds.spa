import React, { useMemo } from 'react';

import { IonIcon, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';
import { useCurrencyFormatter } from 'hooks/formatters/useCurrencyFormatter';
import { useNavigator } from 'hooks/useNavigator';
import { timeOutline } from 'ionicons/icons';
import type { CartOrder } from 'providers/cart/cartTypes';

interface DeliveryScheduleSectionProps {
  order: CartOrder;
}

const DeliveryScheduleSection : React.FC<DeliveryScheduleSectionProps> = ({ order }) => {
  const navigator = useNavigator();
  const {currencyFormatter} = useCurrencyFormatter();

  const dropoffSchedule = useMemo(() => order.dropoffSchedule, [order.dropoffSchedule]);

  const onSelectDroppoffSchedule = () => {

    navigator.go(`/cart/${order.id}/schedule/dropoff`, {});
  };

  return(
    <>
       <IonList className='ion-margin-top'>
          <IonListHeader>Return On</IonListHeader>
          <IonItem button detail lines='full' onClick={() => onSelectDroppoffSchedule()}>
            <IonIcon slot='start' icon={timeOutline}></IonIcon>
            { dropoffSchedule !== null ?
            <IonLabel>
              <h2>{dropoffSchedule.label}</h2>
              <p>{dropoffSchedule.description }</p>
              <p>{currencyFormatter(dropoffSchedule?.cost)}</p>
            </IonLabel>
            :
            <IonLabel>
              <h2>{'Schedule Dropoff'}</h2>
              <p>{'Schedule return of your items'}</p>
            </IonLabel>
            }
          </IonItem>

       </IonList>
    </>
  );
};
export default DeliveryScheduleSection;
