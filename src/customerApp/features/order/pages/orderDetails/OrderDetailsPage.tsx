import React, { useMemo } from 'react';

import { IonButton, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonList, IonNote, IonRow, IonSpinner, IonText } from '@ionic/react';
import { ScrollableContainer } from 'components/layout';
import PageSpinner from 'components/ui/PageSpinner';
import { useFetchBooking } from 'hooks/bookings/useFetchBooking';
import { useCurrencyFormatter } from 'hooks/formatters/useCurrencyFormatter';
import { useDateFormatter } from 'hooks/formatters/useDateFormatter';
import { bicycleSharp, cardSharp, mapSharp, shirtOutline, storefrontSharp } from 'ionicons/icons';
import AuthenticatedPage from 'pages/AuthenticatedPage';
import { useParams } from 'react-router';

import OrderStatusBar from './components/OrderStatusBar';

const OrderDetailsPage : React.FC = () => {
  const { bookingId } = useParams<{ bookingId: string }>();
  const { dateFormatter } = useDateFormatter();
  const { currencyFormatter } = useCurrencyFormatter();
  const { data: booking, isLoading, error } = useFetchBooking(bookingId);

  const { currentOrderStatus, currentOrderStatusDate } = useMemo(() => {
    if (booking) {
      switch (booking.bookingStatus) {
        case 'BOOKED':
          return {currentOrderStatus: `Order Booked`, currentOrderStatusDate: booking.bookingDate};
        case 'PICKEDUP':
          return {currentOrderStatus: `Order Picked Up`, currentOrderStatusDate: booking.pickupActualDate};
        case 'INSHOP':
          return {currentOrderStatus: `Order In Shop`, currentOrderStatusDate: booking.receivedInShopDate};
        case 'DISPATCHED':
          return {currentOrderStatus: `Order Dispatched`, currentOrderStatusDate: booking.dispatchedFromShopDate};
        case 'COMPLETED':
          return {currentOrderStatus: `Order Completed`, currentOrderStatusDate: booking.deliveryActualDate};
      }
    };
    return { currentOrderStatus: 'Order', currentOrderStatusDate: new Date()};
  },[booking]);


  const subTotal = useMemo(() => {
    if (booking) {
      return booking.bookingItems.reduce((acc, item) => acc + (item.quantity * item.unitPrice), 0);
    }
    return 0;
  }, [booking]);

  return (
    <AuthenticatedPage title={''} showProfileIcon={false} defaultBackButtonHref='/'>
      <PageSpinner isSpinning={isLoading} />
      { error && <IonText color='danger'>Something went wrong.  Please try again.  </IonText> }
      { booking && !isLoading &&
      <ScrollableContainer height='100%'>
        <div className='ion-padding'>
          <h2>{currentOrderStatus}</h2>
          <IonText color={'medium'} style={{'marginTop':'5px'}}>
            <h3>{ dateFormatter(currentOrderStatusDate) } at { dateFormatter(currentOrderStatusDate, 'h:mm a') }</h3>
          </IonText>
        </div>
        <OrderStatusBar bookingStatus={booking.bookingStatus}/>
        <IonList className='ion-border-top'>

            <IonItem lines='full'>
              <IonIcon slot='start' icon={storefrontSharp}></IonIcon>
              <IonLabel>
                <h2 color='dark'>{booking.shopName}</h2>
              </IonLabel>
              <IonButton slot='end' size='small' shape='round' color='medium'>Rate Store</IonButton>
            </IonItem>
            {booking.bookingItems.map((item, index) => (
            <IonItem key={index} lines='full' style={{'marginLeft':'50px'}}>
              <IonIcon slot='start' icon={shirtOutline}/>
              <IonLabel>
                <h3>{item.serviceName}</h3>
                <IonNote>{item.quantity} x ${item.unitPrice}</IonNote>
              </IonLabel>
            </IonItem>
            ))}

            <IonItem lines='full' >
              <IonGrid style={{'paddingLeft':'50px'}} className='ion-no-padding ion-padding-top ion-padding-bottom'>
                <IonRow className='ion-justify-end'>
                  <IonCol><small>Subtotal</small></IonCol>
                  <IonCol className='ion-text-end'><small>{currencyFormatter(subTotal)}</small></IonCol>
                </IonRow>
                <IonRow className='ion-justify-end'>
                  <IonCol><small>Pickup Fee</small></IonCol>
                  <IonCol className='ion-text-end'><small>{currencyFormatter(booking.pickupFee)}</small></IonCol>
                </IonRow>
                <IonRow className='ion-justify-end'>
                  <IonCol><small>Delivery Fee</small></IonCol>
                  <IonCol className='ion-text-end'><small>{currencyFormatter(booking.deliveryFee)}</small></IonCol>
                </IonRow>
                <IonRow className='ion-justify-end'>
                  <IonCol>Total</IonCol>
                  <IonCol className='ion-text-end'>{currencyFormatter(booking.totalCost)}</IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
            <IonItem lines='full'>
              <IonIcon slot='start' icon={mapSharp}></IonIcon>
              <IonLabel>
                <h2>Pickup Address</h2>
                <IonNote>{booking.pickupAddress.fullAddress}</IonNote>
              </IonLabel>
            </IonItem>
            <IonItem lines='full'>
              <IonIcon slot='start' icon={bicycleSharp}></IonIcon>
              <IonLabel>
                <h2>Picked Up By</h2>
                <IonNote>{booking.pickupByCourier}</IonNote>
              </IonLabel>
              <IonButton slot='end' size='small' shape='round' color='medium'>Rate Driver</IonButton>
            </IonItem>
            {booking.deliveryScheduledDate &&
            <>
              <IonItem lines='full'>
                <IonIcon slot='start' icon={mapSharp}></IonIcon>
                <IonLabel>
                  <h2>Delivery Address</h2>
                  <IonNote>{booking.deliveryAddess.fullAddress}</IonNote>
                </IonLabel>
              </IonItem>
              <IonItem lines='full'>
                <IonIcon slot='start' icon={bicycleSharp}></IonIcon>
                <IonLabel>
                  <h2>Delivered By</h2>
                  <IonNote>{booking.deliveryByCourier}</IonNote>
                </IonLabel>
                <IonButton slot='end' size='small' shape='round' color='medium'>Rate Driver</IonButton>
              </IonItem>
            </>

            }
            <IonItem lines='full'>
              <IonIcon slot='start' icon={cardSharp}></IonIcon>
              <IonLabel>
                <h2>Payment Method</h2>
                <IonNote>Card ending in 1234</IonNote>
              </IonLabel>
            </IonItem>
          </IonList>
          <IonGrid >
            <IonRow >
              <IonCol className='ion-text-center'>
                <IonButton  >Rebook Order</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
      </ScrollableContainer>
      }

    </AuthenticatedPage>
  );
};


export default OrderDetailsPage;
