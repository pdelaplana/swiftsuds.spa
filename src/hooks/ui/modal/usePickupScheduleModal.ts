import { useState } from 'react';

import { useIonModal } from '@ionic/react';
import type { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import type { PickupTimeSlot } from 'domain/valueTypes/pickupOption';
import PickupScheduleModal from 'customerApp/features/cart/pickup/PickupScheduleModal';

export const usePickupScheduleModal = () : { open: (selectedPickupDate: Date, selectedPickupTimeSlot: PickupTimeSlot, timeslots: PickupTimeSlot[]) => Promise<any> } => {
  const [pickupDate, setPickupDate] = useState<Date>(new Date());
  const [pickupTimeSlot, setPickupTimeSlot] = useState<PickupTimeSlot>(null);
  const [timeSlots, setTimeSlots] = useState<PickupTimeSlot[]>([]);

  const [present, dismiss] = useIonModal(PickupScheduleModal, {
    selectedPickupDate: pickupDate,
    selectedPickupTimeSlot: pickupTimeSlot,
    timeSlots: timeSlots,
    onDismiss: (data: any, role: string) => dismiss(data, role),
  });

  return {
    open: (selectedPickupDate: Date, selectedPickupTimeSlot: PickupTimeSlot, timeslots: PickupTimeSlot[]) => {
      setPickupDate(selectedPickupDate);
      setPickupTimeSlot(selectedPickupTimeSlot);
      setTimeSlots(timeslots);
      return new Promise((resolve) => {
        present({
          onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
            if (ev.detail.role === 'confirm') {
              resolve(ev.detail.data); // Return the data to the parent component
            }
          },
        });
      });
    }};
};

