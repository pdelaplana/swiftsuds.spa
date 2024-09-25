import React from 'react';

import { IonImg } from '@ionic/react';

const ShopLogo: React.FC = () => {
  return (
    <IonImg
      style={{width: '50px', height: '50px'}}
      src="/resources/laundry-main-icon.png"
      alt="SwiftSuds"
      data-testid="the-logo"
      className='ion-margin'
    ></IonImg>
  );
};

export default ShopLogo;
