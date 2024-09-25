import React, { useEffect, useMemo, useState } from 'react';

import { IonIcon, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';
import type { PickupSchedule, ScheduleOption } from 'domain/valueTypes/pickupOption';
import { useCurrencyFormatter } from 'hooks/formatters/useCurrencyFormatter';
import { useFetchDropoffOptions } from 'hooks/pickupOptions/useFetchDropoffOptions';
import { useFetchPickupOptions } from 'hooks/pickupOptions/useFetchPickupOptions';
import { useNavigator } from 'hooks/useNavigator';
import { checkmarkCircleOutline, ellipseOutline } from 'ionicons/icons';
import AuthenticatedPage from 'pages/AuthenticatedPage';
import { useCart } from 'providers/cart/CartProvider';
import { useParams } from 'react-router';

interface SchedulePageProps {
  mode: 'pickup' | 'dropoff';
}

const PickupSchedulePage: React.FC<SchedulePageProps> = ({ mode }) => {
  const { orderId } = useParams<{orderId:string}>();
  const { data: pickupOptions, isLoading: pickOptionsLoading } = useFetchPickupOptions('');
  const { data: dropoffOptions, isLoading: dropoffOptionsLoading } = useFetchDropoffOptions('');
  const { getOrder, cartDispatch } = useCart();
  const navigator = useNavigator();
  const { currencyFormatter } = useCurrencyFormatter();

  const [ schedules, setSchedules ] = useState<ScheduleOption[]>([]);

  const order = useMemo(() => getOrder(orderId), [getOrder, orderId]);
  const selectedPickupSchedule = useMemo(() => order.pickupSchedule, [order.pickupSchedule]);

  const onSelectPickupSchedule = (pickupSchedule: PickupSchedule) => {
    console.log('PickupSchedule', pickupSchedule);
    const currentOrder = order;
    if (mode === 'pickup') {

      if (pickupSchedule.service !== 'Later') {

        cartDispatch({ type: 'UPDATE_ORDER', payload: { ...currentOrder, pickupSchedule } });
        navigator.go(`/cart/${orderId}`, {}, 'REPLACE');
      } else {

        navigator.go(`/cart/${order.id}/pickup/timeslots`, {
          selected: {
            date: pickupSchedule.pickupDate,
            timeSlot: pickupSchedule.pickupTimeSlot,
            cost: pickupSchedule.cost
          },
          timeSlots: pickupOptions.find(option => option.service === pickupSchedule.service)?.pickupTimeSlots ?? [],
        });

      }
    } else if (mode === 'dropoff') {
      if (pickupSchedule.service !== 'Later') {
        cartDispatch({ type: 'UPDATE_ORDER', payload: { ...currentOrder, dropoffSchedule: pickupSchedule } });
        navigator.go(`/cart/${orderId}`, {}, 'REPLACE');

      } else {

        navigator.go(`/cart/${order.id}/dropoff/timeslots`, {
          selected: {
            date: pickupSchedule.pickupDate,
            timeSlot: pickupSchedule.pickupTimeSlot,
            cost: pickupSchedule.cost
          },
          timeSlots: dropoffOptions.find(option => option.service === pickupSchedule.service)?.timeSlots ?? [],
        });
    }

  }
  };

  useEffect(() => {
    mode === 'pickup' ? (
      !pickOptionsLoading && (
        setSchedules(pickupOptions?.map(option => (
          {
            service: option.service,
            label: selectedPickupSchedule?.service === option.service ? selectedPickupSchedule.label : option.label,
            description: selectedPickupSchedule?.service === option.service ? selectedPickupSchedule.description : option.description,
            cost: option.cost,
            pickupTimeSlot: selectedPickupSchedule?.service === option.service ? selectedPickupSchedule.pickupTimeSlot : null,
            window: option.pickupWindow,
            pickupDate: selectedPickupSchedule?.service === option.service ? selectedPickupSchedule.pickupDate : null,
          })))
      )
    ) : (
      !dropoffOptionsLoading && (
        setSchedules(dropoffOptions?.map(option => (
          {
            service: option.service,
            label: selectedPickupSchedule?.service === option.service ? selectedPickupSchedule.label : option.label,
            description: selectedPickupSchedule?.service === option.service ? selectedPickupSchedule.description : option.description,
            cost: option.cost,
            pickupTimeSlot: selectedPickupSchedule?.service === option.service ? selectedPickupSchedule.pickupTimeSlot : null,
            window: 0,
            pickupDate: selectedPickupSchedule?.service === option.service ? selectedPickupSchedule.pickupDate : null,
          })))
      )
    );
  },[pickupOptions, pickOptionsLoading, selectedPickupSchedule, mode, dropoffOptionsLoading, dropoffOptions]);

  return (
    <AuthenticatedPage title={`Schedule ${ mode === 'pickup' ? 'Pickup' : 'Delivery'}`} showProfileIcon={false} defaultBackButtonHref='/cart'>
      <IonList className='ion-margin-top'>
        <IonListHeader>{`${ mode === 'pickup' ? 'Pickup On' : 'Dropoff On' }`}</IonListHeader>
        {
          schedules.map(schedule =>
          <IonItem key={schedule.service} lines='full' button onClick={() => onSelectPickupSchedule(schedule)} detail={schedule.service === 'Later'}>
            <IonIcon icon={
              (selectedPickupSchedule &&
                selectedPickupSchedule.service === schedule.service ? checkmarkCircleOutline : ellipseOutline) ||
              (!selectedPickupSchedule &&
                schedule.service === 'Express' ?
                  checkmarkCircleOutline : ellipseOutline)
              } slot='start'></IonIcon>
            <IonLabel>
              <h2>{schedule.label}</h2>
              <p>{schedule.description}</p>
              <p>{currencyFormatter(schedule.cost)}</p>
            </IonLabel>
          </IonItem>
          )
        }
      </IonList>

    </AuthenticatedPage>

  );
};

export default PickupSchedulePage;
