import React from 'react';

import { IonIcon, IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';
import { cashOutline } from 'ionicons/icons';
import type { CartOrder } from 'providers/cart/cartTypes';

import OrderCostsTotalsTable from './OrderCostsTotalsTable';



interface PaymentDetailsSectionProps {
  order: CartOrder;
}

const PaymentDetailsSection: React.FC<PaymentDetailsSectionProps> = ({ order }) => {


  return(
    <>
      <IonListHeader>Payment </IonListHeader>
      <IonList>
        <IonItem lines='full'  button detail>
          <IonIcon icon={cashOutline} slot='start'></IonIcon>
          <IonLabel>
            <h2>Select Payment Method</h2>
            <p>Pay on pickup</p>
          </IonLabel>
        </IonItem>

        <IonItem lines='none'>
          {order.items.length > 0 && <OrderCostsTotalsTable order={order} />}
        </IonItem>
      </IonList>
    </>
  );
};

export default PaymentDetailsSection;
