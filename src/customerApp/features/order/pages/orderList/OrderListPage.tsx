import React from 'react';

import { IonIcon, IonItem, IonLabel, IonList } from '@ionic/react';
import PageSpinner from 'components/ui/PageSpinner';
import { useFetchBookings } from 'hooks/bookings/useFetchBookings';
import { useCurrencyFormatter } from 'hooks/formatters/useCurrencyFormatter';
import { useDateFormatter } from 'hooks/formatters/useDateFormatter';
import { receiptOutline } from 'ionicons/icons';
import AuthenticatedPage from 'pages/AuthenticatedPage';

const OrderListPage : React.FC = () => {
  const { data: bookings, isLoading: isFetchingBookings } = useFetchBookings('');
  const { currencyFormatter } = useCurrencyFormatter();
  const { dateFormatter } = useDateFormatter();

  return (
    <AuthenticatedPage showProfileIcon={true} defaultBackButtonHref='/home'>
      <PageSpinner isSpinning={isFetchingBookings} />
      <IonList>
        { !isFetchingBookings && bookings?.map((booking) => (
          <IonItem lines={'full'} button={true} detail={true} routerLink={`/order/${booking.id }`} className=''>
            <IonIcon icon={receiptOutline} slot='start' size='large'></IonIcon>
            <IonLabel>
              <h2>{booking.shopName}</h2>
              <h3><strong>{currencyFormatter(booking.totalCost)}</strong></h3>

              <p >{ dateFormatter(booking.bookingDate) } </p>
            </IonLabel>

        </IonItem>
        ))}
      </IonList>

    </AuthenticatedPage>
  );

};

export default OrderListPage;
