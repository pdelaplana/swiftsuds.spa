import React from 'react';

import { IonText, IonIcon } from '@ionic/react';
import { star } from 'ionicons/icons';


interface ShopRatingsProps {
  averageRating: number;
  totalRatingsCount: number;
}
const ShopRatings: React.FC<ShopRatingsProps> = ({ averageRating, totalRatingsCount }) => {

  return (
    <p style={{display: 'flex', alignItems: 'center', justifyItems:'flex-start',  marginTop: '5px'}}>
      <IonText color='dark'>
        {averageRating} <IonIcon src={star} ></IonIcon>
      </IonText>
      <IonText color='medium'>
        <span style={{marginLeft:'8px'}}>{totalRatingsCount} ratings</span>
      </IonText>
    </p>
  );

};

export default ShopRatings;
