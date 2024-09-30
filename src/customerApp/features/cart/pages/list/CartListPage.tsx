import React from 'react';

import { IonButton, IonItem, IonLabel, IonList, IonText } from '@ionic/react';
import { BottomContainer, ScrollableContainer } from 'components/layout';
import dayjs from 'dayjs';
import { useCartOrderTotals } from 'hooks/cart/useCartOrderTotals';
import { useCurrencyFormatter } from 'hooks/formatters/useCurrencyFormatter';
import { useDateFormatter } from 'hooks/formatters/useDateFormatter';
import AuthenticatedPage from 'pages/AuthenticatedPage';
import { useCart } from 'providers/cart/CartProvider';


const CartListPage: React.FC = () => {
  const { cartState, cartDispatch } = useCart();
  const { currencyFormatter } = useCurrencyFormatter();
  const { dateFormatter } = useDateFormatter();
  const { calculateTotals } = useCartOrderTotals();

  const clearCart = () => {
    cartDispatch({type: 'CLEAR_CART'});
  };

  return (
    <AuthenticatedPage title={'Cart'} showProfileIcon={false} defaultBackButtonHref='/'>
      <ScrollableContainer >
        <IonList lines='full'>
          {cartState.orders.map(order =>
          <IonItem detail button routerLink={`/cart/${order.id}`}>
            <IonLabel>
              <h2 color='dark'>{order.shopName}</h2>
              <p>
                <IonText color='medium'>
                {dateFormatter(order.bookingDate)} &middot; {currencyFormatter(calculateTotals(order).total)}
                </IonText>
              </p>

            </IonLabel>
          </IonItem>
          )}
        </IonList>
      </ScrollableContainer>
      <BottomContainer>
          <IonButton
            expand='full'
            color='danger'
            className='ion-no-margin ion-margin-start ion-margin-end ion-padding-top ion-padding-bottom'
            onClick={clearCart}
            >Clear All</IonButton>
      </BottomContainer>
    </AuthenticatedPage>
  );
};

export default CartListPage;
