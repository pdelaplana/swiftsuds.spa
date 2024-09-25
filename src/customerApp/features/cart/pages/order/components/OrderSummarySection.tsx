import React  from 'react';

import { IonItem, IonLabel, IonList, IonListHeader } from '@ionic/react';
import Counter from 'components/counter/counter';
import { useCurrencyFormatter } from 'hooks/formatters/useCurrencyFormatter';
import { useCart } from 'providers/cart/CartProvider';
import type { CartOrder } from 'providers/cart/cartTypes';


interface OrderSectionProps  {
  order: CartOrder;
}

const OrderSummarySection: React.FC<OrderSectionProps> = ({ order }) => {
  const { cartDispatch } = useCart();

  const { currencyFormatter } = useCurrencyFormatter();

  const updateQuantity = (serviceId: string, quantity: number) => {

    const orderItem = order.items.find(item => item.id === serviceId);

    if(orderItem){
      if (quantity === 0) {
        cartDispatch({ type: 'REMOVE_ORDER_ITEM', payload: { ...orderItem } });
      }
      else {
        cartDispatch({ type: 'UPDATE_ORDER_ITEM', payload: { ...orderItem, quantity } });
      }
    }
  };


  return(
    <>
      <IonList className='ion-margin-top' lines='full'>
        <IonListHeader>Order Summary</IonListHeader>
        {order?.items.map(service =>
          <IonItem key={service.id}>
            <IonLabel>
              <h2>{service.name}</h2>
              <p>{currencyFormatter(service.price*service.quantity)}</p>
            </IonLabel>
            <Counter defaultValue={service.quantity} onUpdate={(value) => updateQuantity(service.id, value)}></Counter>

          </IonItem>
          )}
       </IonList>
    </>
  );
};

export default OrderSummarySection;
