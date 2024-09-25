import React, { useEffect, useState } from 'react';

import { IonList, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import BottomContainer from 'components/layout/BottomContainer';
import ScrollableContainer from 'components/layout/ScrollableContainer';
import DaysGroupButtonSet from 'components/ui/DaysGroupButtonSet';
import type { TimeSlot } from 'domain/valueTypes';
import { checkmarkCircleOutline, ellipseOutline } from 'ionicons/icons';

interface TimeSlotsSelectionProps {
  mode: 'pickup' | 'dropoff';
  timeSlots: TimeSlot[];
  selectedPickupTimeSlot?: TimeSlot;
  selectedPickupDate?: Date;
  onChooseTimeSlot: (selectedDate: Date, selectedTimeSlot: TimeSlot ) => void;
}

const TimeSlotsSelection: React.FC<TimeSlotsSelectionProps> = ({ mode, timeSlots, selectedPickupDate, selectedPickupTimeSlot, onChooseTimeSlot }) => {

  const [selectedDate, setSelectedDate] = useState<Date>(selectedPickupDate ?? new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot>(selectedPickupTimeSlot);

  const [ timeSlotViewItems, setTimeSlotViewItems ] = useState<{
    key: string;
    label: string;
    timeSlot: TimeSlot;
    enable: boolean;
    selected: boolean }[]>(
      timeSlots?.map(slot => ({
        key: slot.key,
        label: `${(mode === 'pickup' ? 'Pickup' : 'Return')} ${slot.label}`,
        timeSlot: slot,
        enable: true,
        selected: selectedPickupTimeSlot?.key === slot.key
      }) as { key: string; label: string; timeSlot: TimeSlot; enable: boolean; selected: boolean}
    ));

  useEffect(() => {
    setTimeSlotViewItems((prevTimeSlotViewItems) => {
      return prevTimeSlotViewItems.map(item => {
        if (item.key === selectedTimeSlot?.key) {
          return { ...item, selected: true };
        }
        return { ...item, selected: false };
      });
    });
  },[selectedTimeSlot]);

  const onSelectTimeSlot = (timeSlot: TimeSlot) => {
    setSelectedTimeSlot((prev) => prev = timeSlot);
  };

  return (
      <>
        <ScrollableContainer height='88%'>

          <DaysGroupButtonSet selectedDate={selectedDate} onDaySelected={(selectedDate) => setSelectedDate(selectedDate)}/>
          <IonList lines='full' className='ion-margin-top ion-margin-bottom'>
            {
              timeSlotViewItems.map(item =>
                <IonItem disabled={!item.enable} key={item.timeSlot.key} button onClick={() => onSelectTimeSlot(item.timeSlot)}>
                  <IonIcon slot='start' icon={item.selected ? checkmarkCircleOutline : ellipseOutline} color={'primary'} />
                  <IonLabel><h2>{ `${(mode === 'pickup' ? 'Pickup' : 'Return')} ${item.timeSlot.label}`}</h2></IonLabel>
                </IonItem>
              )
            }
          </IonList>

        </ScrollableContainer>
        <BottomContainer>
          <IonButton expand="full" className="ion-padding ion-text-capitalize" onClick={() => onChooseTimeSlot(selectedDate, selectedTimeSlot)}>
            Choose this time slot
          </IonButton>
        </BottomContainer>
      </>
  );
};

export default TimeSlotsSelection;
