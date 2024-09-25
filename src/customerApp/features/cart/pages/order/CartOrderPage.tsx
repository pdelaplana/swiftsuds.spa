import React, { useMemo } from 'react';

import { IonButton } from '@ionic/react';
import { BottomContainer } from 'components/layout';
import ScrollableContainer from 'components/layout/ScrollableContainer';
import { useCartOrderValidator } from 'hooks/cart/useCartOrderValidator';
import AuthenticatedPage from 'pages/AuthenticatedPage';
import { useCart } from 'providers/cart/CartProvider';
import type { CartOrder } from 'providers/cart/cartTypes';
import { useParams } from 'react-router';

import DeliveryAddressSection from './components/DeliveryAddressSection';
import DeliveryScheduleSection from './components/DeliveryScheduleSection';
import OrderSummarySection from './components/OrderSummarySection';
import PaymentDetailsSection from './components/PaymentDetailsSection';
import PickupAddressSection from './components/PickupAddressSection';
import PickupScheduleSection from './components/PickupScheduleSection';



export interface OrderSectionProps  {
  order: CartOrder;
}


const CartOrderPage: React.FC = () => {
  const { orderId } = useParams<{orderId: string}>();
  const { getOrder } = useCart();
  const { validateOrder } = useCartOrderValidator();

  const currentOrder = useMemo(() => getOrder(orderId), [getOrder, orderId]);

  const placeOrder = () => {  console.log('Place Order', currentOrder ); };


  return (
    <AuthenticatedPage title={'Cart'} showProfileIcon={false} defaultBackButtonHref='/cart'>
      {
        currentOrder &&
        <>
        <ScrollableContainer>

          <OrderSummarySection order={currentOrder} />
          <PickupAddressSection order={currentOrder}/>
          <DeliveryAddressSection order={currentOrder} />
          <PickupScheduleSection order={currentOrder} />
          <DeliveryScheduleSection order={currentOrder} />
          <PaymentDetailsSection order={currentOrder} />

        </ScrollableContainer>
        <BottomContainer>
          <IonButton
            expand='full'
            className='ion-no-margin ion-margin-start ion-margin-end ion-padding-top ion-padding-bottom'
            disabled={!validateOrder(currentOrder)}
            onClick={placeOrder}
            >
            Place Order
          </IonButton>
        </BottomContainer>
        </>
      }

      {
        !currentOrder && <div>Order not found.</div>
      }

    </AuthenticatedPage>

  );
};

export default CartOrderPage;
