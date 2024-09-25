import React, { useEffect, useMemo, useState } from 'react';

import { IonList, IonListHeader, IonItem, IonIcon, IonLabel } from '@ionic/react';
import type { PickupSchedule } from 'domain/valueTypes/pickupOption';
import { useCurrencyFormatter } from 'hooks/formatters/useCurrencyFormatter';
import { useFetchPickupOptions } from 'hooks/pickupOptions/useFetchPickupOptions';
import { useNavigator } from 'hooks/useNavigator';
import { checkmarkCircleOutline, ellipseOutline, timeOutline } from 'ionicons/icons';
import { useCart } from 'providers/cart/CartProvider';
import type { CartOrder } from 'providers/cart/cartTypes';
import { currencyFormatter } from 'utils/formatters';

interface PickupScheduleSectionProps {
  order: CartOrder;
}

const PickupScheduleSection: React.FC<PickupScheduleSectionProps> = ({ order }) => {
  const navigator = useNavigator();
  const { data: pickupOptions, isLoading: pickOptionsLoading } = useFetchPickupOptions('');
  const { currencyFormatter } = useCurrencyFormatter();
  const {  cartDispatch } = useCart();

  const selectedPickupSchedule = useMemo(() =>  order.pickupSchedule, [order.pickupSchedule]);

  const [ pickupSchedules, setPickupSchedules ] = useState<PickupSchedule[]>([]);

  const onSelectPickupSchedule = (pickupSchedule: PickupSchedule) => {
    /*
    if (pickupSchedule.service !== 'Later') {
      const currentOrder = order;
      cartDispatch({ type: 'UPDATE_ORDER', payload: { ...currentOrder, pickupSchedule } });
    } else {

      navigator.go(`/cart/${order.id}/pickup/timeslots`, {
        selected: {
          date: pickupSchedule.pickupDate,
          timeSlot: pickupSchedule.pickupTimeSlot
        },
        timeSlots: pickupOptions.find(option => option.service === pickupSchedule.service)?.pickupTimeSlots ?? [],
      });

    }
    */
    navigator.go(`/cart/${order.id}/schedule/pickup`, {});
  };

  useEffect(() => {
    !pickOptionsLoading && (
      setPickupSchedules(pickupOptions?.map(option => (
        {
          service: option.service,
          label: selectedPickupSchedule?.service === option.service ? selectedPickupSchedule.label : option.label,
          description: selectedPickupSchedule?.service === option.service ? selectedPickupSchedule.description : option.description,
          cost: option.cost,
          pickupTimeSlot: selectedPickupSchedule?.service === option.service ? selectedPickupSchedule.pickupTimeSlot : null,
          pickupTimeWindow: option.pickupWindow,
          pickupDate: selectedPickupSchedule?.service === option.service ? selectedPickupSchedule.pickupDate : null,
        })))
    );
  },[pickupOptions,pickOptionsLoading,selectedPickupSchedule]);


  return(
    <>
      <IonList className='ion-margin-top'>
        <IonListHeader>Pickup On</IonListHeader>
        <IonItem button detail lines='full' onClick={() => onSelectPickupSchedule(order.pickupSchedule)}>
          <IonIcon slot='start' icon={timeOutline}></IonIcon>
          <IonLabel>
            <h2>{order.pickupSchedule.label}</h2>
            <p>{order.pickupSchedule.description}</p>
            <p>{currencyFormatter(order.pickupSchedule.cost)}</p>
          </IonLabel>
        </IonItem>
      </IonList>

    </>
  );

};

export default PickupScheduleSection;
