import React, { useEffect, useState } from 'react';

import { IonButton, IonIcon } from '@ionic/react';
import { removeCircleOutline, addCircleOutline } from 'ionicons/icons';
import './counter.css';

interface CounterProps {
  defaultValue?: number;
  onUpdate(value:number): void;
}

const Counter: React.FC<CounterProps> = ({ defaultValue = 0,  onUpdate }) => {

  const [counter, setCounter] = useState(defaultValue);

  const increment = () => {
    setCounter(state => ++state);
  };

  const decrement = () => {
    setCounter(state => state > 0 ? --state : state );
  };

  useEffect(() => {
    onUpdate(counter);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return(
    <div className='wrapper'>
      <IonButton onClick={decrement} fill='clear'>
        <IonIcon src={removeCircleOutline}  />
      </IonButton>
      <span className='counter-value'>{counter}</span>
      <IonButton onClick={increment} fill='clear'>
        <IonIcon src={addCircleOutline} />
      </IonButton>
    </div>
  );
};

export default Counter;
