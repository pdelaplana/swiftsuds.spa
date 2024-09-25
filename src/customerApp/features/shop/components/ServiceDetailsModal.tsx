import React, { useState } from 'react';

import { IonListHeader, IonList, IonItem, IonLabel, IonBadge, IonButton, IonPage, IonButtons, IonHeader, IonToolbar, IonContent, IonTextarea } from '@ionic/react';
import Counter from 'components/counter/counter';
import { BottomContainer } from 'components/layout';
import ScrollableContainer from 'components/layout/ScrollableContainer';
import type { ServiceItem } from 'domain/entities/serviceItem';
import { useFetchLaundryItems } from 'hooks/shops';
import { useCart } from 'providers/cart/CartProvider';
import type {  CartOrderItem } from 'providers/cart/cartTypes';
import { useShop } from 'providers/shop/ShopProvider';
import { currencyFormatter } from 'utils/formatters';
import { v4 as uuidv4 } from 'uuid';


interface ServiceDetailsModalProps {
  shopid: string;
  service: ServiceItem;
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
}

const ServiceDetailsModal : React.FC<ServiceDetailsModalProps> = ({ shopid, service, onDismiss }) => {

  const { data: laundryItems } = useFetchLaundryItems();

  const [quantity, setQuantity] = useState<number>(0);

  const { shopState } = useShop();

  const { cartDispatch, getCurrentOrder } = useCart();

  const addToCart = (orderItem: CartOrderItem) =>{
    console.log('Add to Cart', shopid);
    let order = getCurrentOrder(shopState.shopId);
    if (!order) {
      console.log('No Order');
      order = {
        id: uuidv4(),
        shopId: shopState.shopId,
        shopName: shopState.shopName,
        items:[],
        bookingDate: new Date(),
        pickupAddress: null,
        dropoffAddress: null,
        pickupSchedule: null,
        dropoffSchedule: null
      };
      cartDispatch({type: 'ADD_ORDER', payload: order});
    }
    console.log('Current Order', order);
    orderItem.orderId = order.id;
    cartDispatch({ type: 'ADD_ORDER_ITEM', payload: orderItem });
    onDismiss('', 'addToCart');
  };

  return(
    <IonPage>
      <IonHeader className='ion-no-border'>
        <IonToolbar>
          <IonButtons slot='end'>
            <IonButton onClick={() => onDismiss('', 'cancel')} strong={true}>
              x
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent color='light'>
        <ScrollableContainer>
        <IonList className='ion-margin-top'>
          <IonItem lines='none'>
            <IonLabel>
              <h2>{service.name}</h2>
                <p>
                  {service.description}
                </p>
                <div className='ion-margin-top'>{service.tags.map(tag => <IonBadge className='ion-margin-end'>{tag}</IonBadge>)}</div>
            </IonLabel>
            <IonLabel slot='end' className='ion-text-end'>
              <h1>{ currencyFormatter.format(service.price)}</h1>
              Price per Weight
            </IonLabel>
          </IonItem>
        </IonList>

        <IonListHeader>Items (Optional)</IonListHeader>
        <IonList>
          { laundryItems?.map(laundryItem =>
            <IonItem lines='full' key={laundryItem.description}>
              <IonLabel slot='start'>
                {laundryItem.description}
              </IonLabel>

              <div slot='end' >
                <Counter  onUpdate={(value) => console.log(value)}/>
              </div>
            </IonItem>
            )}
        </IonList>

        <IonListHeader>Note to Laundry Shop (optional)</IonListHeader>
        <IonList>
            <IonItem lines='none'>
              <IonTextarea placeholder='Send a note to the laundry'></IonTextarea>
            </IonItem>
        </IonList>

        <IonList className='ion-margin-top '>
            <IonItem lines='none' >
              <div style={{ margin: '0 auto' }}>
                <h3>
                <Counter defaultValue={1} onUpdate={(value) => setQuantity(state => state = value) }/>
                </h3>
              </div>
            </IonItem>
          </IonList>
        </ScrollableContainer>
        <BottomContainer>
          <IonButton
            className='ion-padding'
            expand='full'
            onClick={() => addToCart({ id: service.id, orderId:'', name: service.name, quantity: quantity, price: service.price })}
          >
            Add to Cart - { currencyFormatter.format(service.price * quantity) }
          </IonButton>
        </BottomContainer>

      </IonContent>

    </IonPage>
  );
};

export default ServiceDetailsModal;

