import React from 'react';

import { IonItem, IonLabel, IonSpinner } from '@ionic/react';

interface IonItemLoaderProps {
  isLoading: boolean
}
const IonItemLoader: React.FC<IonItemLoaderProps> = ({isLoading}) => {

  return(
    <>
    {isLoading &&
      <IonItem lines={'none'}  className='ion-text-center'>
        <IonLabel><IonSpinner name='dots'/></IonLabel>
      </IonItem>
    }
    </>
  );
};

export default IonItemLoader;
