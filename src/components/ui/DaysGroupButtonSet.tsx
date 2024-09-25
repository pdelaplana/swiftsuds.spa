import React, { useEffect, useState } from 'react';

import { IonChip, IonIcon, IonLabel } from '@ionic/react';
import HorizontalScrollableContainer from 'components/layout/HorizontalScrollableContainer';
import dayjs from 'dayjs';
import { checkmarkCircleOutline, ellipseOutline } from 'ionicons/icons';

interface DaysGroupButtonSetProps {
  selectedDate?: Date;
  numberOfDays?: number;
  onDaySelected?: (selectedDate: Date) => void;
}

const DaysGroupButtonSet : React.FC<DaysGroupButtonSetProps> = ({selectedDate, numberOfDays= 7, onDaySelected }) => {

  const [days, setDays] = useState<{ description:string, monthDay:string, date: Date, selected: boolean }[]>([]);

  useEffect(() => {
    let days: { description:string, monthDay:string, date:Date, selected: boolean }[] = [];
    for (let i = 0; i < numberOfDays; i++) {
      const current = dayjs().add(i, 'day');
      days.push({
        description: (i === 0 ? 'Today' : i === 1 ? 'Tom' :  current.format('ddd')),
        monthDay: current.format('MMM D'),
        date: current.toDate(),
        selected: dayjs(selectedDate).isSame(current, 'day') ?? (i===0)
      });
    }
    setDays(days);
  }, [numberOfDays, selectedDate]);

  const onSelectDay = (day: { description:string, monthDay:string, date:Date, selected: boolean }) => {
    setDays(prevDays => {
      const updatedDays = prevDays.map(d => {
        if (d.description === day.description) {
          const updatedDay = {
            ...d,
            selected: !d.selected
          };
          onDaySelected(updatedDay.date);
          return updatedDay;
        }
        return {
          ...d,
          selected: false
        };
      });
      return updatedDays;
    });
  };



  return (
    <HorizontalScrollableContainer>
      {days.map(day =>
        <IonChip
          key={day.description}
          style={{backgroundColor: '#fff', borderWidth: '1px', borderColor: '#ccc'}}
          onClick={() => onSelectDay(day)}>
          <IonLabel style={{minWidth:'90px', maxWidth:'90px'}}>
            <h2>{day.description}</h2>
            <p>{day.monthDay}</p>
          </IonLabel>
          <IonIcon icon={ day.selected ? checkmarkCircleOutline : ellipseOutline} color='primary'/>
        </IonChip>
      )}
    </HorizontalScrollableContainer>
  );

};

export default DaysGroupButtonSet;
