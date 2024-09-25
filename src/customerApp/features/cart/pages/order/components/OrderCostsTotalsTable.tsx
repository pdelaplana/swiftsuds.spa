import React, { useMemo } from 'react';

import { IonGrid, IonRow, IonCol } from '@ionic/react';
import { useCartOrderTotals } from 'hooks/cart/useCartOrderTotals';
import type { CartOrder } from 'providers/cart/cartTypes';
import { currencyFormatter } from 'utils/formatters';

interface OrderCostsTotalsTableProps {
  order: CartOrder;
}

const OrderCostsTotalsTable : React.FC<OrderCostsTotalsTableProps> = ({ order }) => {

  const {calculateTotals } = useCartOrderTotals();

  const orderCosts = useMemo(() => {
    const orderTotals = calculateTotals(order);

    return {
      subTotal: orderTotals.subtotal,
      pickupFee: orderTotals.pickupFee,
      deliveryFee: orderTotals.deliveryFee,
      total: orderTotals.total
    };

  }, [calculateTotals, order]);


  return(
    <>
      <IonGrid className='ion-no-margin ion-no-padding ion-padding-bottom ion-padding-top'>
        <IonRow>
          <IonCol >
            <span style={{ marginRight: '15px',  textAlign: 'left'}} >Subtotal</span>
          </IonCol>
          <IonCol className='ion-text-right'>
            <span>{ currencyFormatter.format(orderCosts.subTotal)}</span>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <span style={{ marginRight: '15px', textAlign: 'left'}}>Pickup Fee</span>
          </IonCol>
          <IonCol className='ion-text-right'>
            <span>{ currencyFormatter.format(orderCosts.pickupFee)}</span>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <span style={{ marginRight: '15px', textAlign: 'left'}}>Delivery Fee</span>
          </IonCol>
          <IonCol className='ion-text-right'>
            <span>{ currencyFormatter.format(orderCosts.deliveryFee)}</span>
          </IonCol>
        </IonRow>
        <IonRow className='ion-margin-top'>
          <IonCol>
            <h2>Total</h2>
          </IonCol>
          <IonCol className='ion-text-right'>
            <h2>{ currencyFormatter.format(orderCosts.total)}</h2>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );

};

export default OrderCostsTotalsTable;
