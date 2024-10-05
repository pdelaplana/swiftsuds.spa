import React, { useMemo } from 'react';

import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from '@ionic/react';
import { cartOutline } from 'ionicons/icons';
import {  useCart } from 'providers/cart/CartProvider';
import { useShop } from 'providers/shop/ShopProvider';
import { currencyFormatter } from 'utils/formatters';

interface CartButtonProps {

}


const CartButton : React.FC<CartButtonProps> = () => {
  const { shopState } = useShop();
  const { getCurrentOrder } = useCart();

  const { orderId, itemCount, totalPrice }  = useMemo(() => {

    const currentOrder = getCurrentOrder(shopState.shopId);

    if (!currentOrder) {
      return { orderId: '', itemCount: '0 items', totalPrice: currencyFormatter.format(0) };
    }
    const { count, totals } = currentOrder.items.reduce((sum, item) => {
      sum.count += item.quantity;
      sum.totals +=item.price * item.quantity;
      return sum;
    },{count:0, totals:0});
    const orderId = currentOrder.id;
    const itemCount = count > 1 ? `${count} items` : `${count} item`;
    const totalPrice = currencyFormatter.format(totals);
    return { orderId, itemCount, totalPrice };
  },[getCurrentOrder, shopState]);

  return(
    <IonButton expand='full' className='ion-margin ' routerLink={`/cart/${orderId}`}>
      <IonIcon icon={cartOutline} size='medium'></IonIcon>
      <IonGrid>
      <IonRow className=''>
          <IonCol size='6'>
            <span className='ion-float-left ion-align-items-baseline'>
            { itemCount }
            </span>
          </IonCol>
          <IonCol size='6' >
            <span className='ion-float-right'>Total { totalPrice }</span>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonButton>
  );
};

export default CartButton;
