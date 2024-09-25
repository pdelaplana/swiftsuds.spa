import React, { useMemo } from 'react';

import dayjs from 'dayjs';
import type { TimeSlot } from 'domain/valueTypes';
import type { PickupTimeSlot } from 'domain/valueTypes/pickupOption';
import { useNavigator } from 'hooks/useNavigator';
import AuthenticatedPage from 'pages/AuthenticatedPage';
import { useCart } from 'providers/cart/CartProvider';
import { useParams } from 'react-router';

import TimeSlotsSelection from './TimeSlotsSelection';

interface TimeSlotsSelectionPageProps {
  mode: 'pickup' | 'dropoff';
}


const TimeSlotsSelectionPage: React.FC<TimeSlotsSelectionPageProps> = ({mode}) => {
  const { orderId } = useParams<{orderId:string}>();
  const { getOrder, cartDispatch } = useCart();
  const navigator = useNavigator();

  const { selected, timeSlots } = useMemo(() =>
    navigator.getState() as { selected: { date: Date, timeSlot: TimeSlot, cost: number}, timeSlots: PickupTimeSlot[] },
  [navigator]);

  const onChooseTimeSlot = (selectedDate: Date, selectedTimeSlot: TimeSlot) => {
    const order = getOrder(orderId);
    let payload = order;
    if (mode === 'pickup') {
      console.log('Pickup', order.pickupSchedule);
      payload = {
        ...order,
        pickupSchedule: {
          ...order.pickupSchedule,
          service: 'Later',
          cost: selected.cost,
          pickupDate: selectedDate,
          pickupTimeSlot: selectedTimeSlot,
          label: `${dayjs(selectedDate).format('MMM DD')} ${dayjs(selectedDate).format('ddd')}`,
          description: `Pickup ${selectedTimeSlot.label}` }
      };

    } else if (mode === 'dropoff') {
      console.log('Dropoff', order.dropoffSchedule);
      payload= {
        ...order,
        dropoffSchedule: {
          ...order.dropoffSchedule,
          dropoffDate: selectedDate,
          cost: selected.cost,
          dropoffTimeSlot: selectedTimeSlot,
          label: `${dayjs(selectedDate).format('MMM DD')} ${dayjs(selectedDate).format('ddd')}`,
          description: `Return ${selectedTimeSlot.label}` }
      };
    }
    cartDispatch({ type: 'UPDATE_ORDER', payload });

    navigator.go(`/cart/${orderId}`, {}, 'REPLACE');

  };

  return (
   <AuthenticatedPage title={`Schedule ${mode === 'pickup' ? 'Pickup' : 'Return'} For Later`} showProfileIcon={false} defaultBackButtonHref='/cart'>
    <TimeSlotsSelection
      mode={mode}
      timeSlots={timeSlots}
      selectedPickupDate={selected.date ?? dayjs().toDate()}
      selectedPickupTimeSlot={selected.timeSlot}
      onChooseTimeSlot={(selectedDate, selectedTimeSlot) => onChooseTimeSlot(selectedDate, selectedTimeSlot)} />
   </AuthenticatedPage>

  );
};


export default TimeSlotsSelectionPage;

