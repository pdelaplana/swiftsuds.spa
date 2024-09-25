import React from 'react';

import { IonButton, IonItem, IonLabel, IonList } from '@ionic/react';
import { BottomContainer, ScrollableContainer } from 'components/layout';
import dayjs from 'dayjs';
import { useCartOrderTotals } from 'hooks/cart/useCartOrderTotals';
import { useCurrencyFormatter } from 'hooks/formatters/useCurrencyFormatter';
import AuthenticatedPage from 'pages/AuthenticatedPage';
import { useCart } from 'providers/cart/CartProvider';


const CartListPage: React.FC = () => {
  const { cartState, cartDispatch } = useCart();
  const { currencyFormatter } = useCurrencyFormatter();
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
              <h2>{order.shopName}</h2>
              <p>{`${dayjs(order.bookingDate).format('ddd')} ${dayjs(order.bookingDate).format('MMM DD')}`}</p>
              <p>{currencyFormatter(calculateTotals(order).total)}</p>
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
