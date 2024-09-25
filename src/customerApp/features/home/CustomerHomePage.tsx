import React from 'react';

import {
  IonButton,
	IonIcon,
	IonItem,
	IonLabel,
  IonList,
  IonListHeader,
  IonSpinner,
} from '@ionic/react';
import ShopLogo from 'components/shopLogo/ShopLogo';
import { useFetchRecentBookings } from 'hooks/bookings/useFetchRecentBookings';
import { useFetchFavoriteShops } from 'hooks/shops/useFetchFavoriteShops';
import { star } from 'ionicons/icons';
import AuthenticatedPage from 'pages/AuthenticatedPage';
import { currencyFormatter, dateFormatter } from 'utils/formatters';

const CustomerHomePage: React.FC = () => {

  const { data: favoriteShops, isLoading: isFetchingShops } = useFetchFavoriteShops();

  const { data: recentBookings, isLoading: isFetchingRecentBookings } = useFetchRecentBookings('customerid');

	return (
		<AuthenticatedPage title={'SwiftSuds'} showProfileIcon={true}>
      <div style={{'height':'25%'}} className='ion-padding'>
        <h2>Welcome to your neighborhood laundry app!</h2>
      </div>
      <IonListHeader className='ion-margin-top'>
        <IonLabel><h2>Active Order</h2></IonLabel>
      </IonListHeader>
      <IonList>
        <IonItem>

        </IonItem>
      </IonList>


      <IonListHeader className='ion-margin-top'>
        <IonLabel><h2>Featured Shops</h2></IonLabel>
        <IonButton size='small' className='ion-text-capitalize'>Browse nearby</IonButton>
      </IonListHeader>

      <IonList color='light'>
        {isFetchingShops &&
          <IonItem lines={'none'}  className='ion-text-center'>
            <IonLabel><IonSpinner name='dots'/></IonLabel>
          </IonItem>
        }
        {favoriteShops &&
          <IonItem lines={'none'} button={true} detail={true} routerLink={`/shop/${favoriteShops[0].id}/services`}>
            <ShopLogo/>
            <IonLabel>
              <h3>{favoriteShops[0].name}</h3>
              <p>{favoriteShops[0].city}</p>
              <p>{favoriteShops[0].rating} <IonIcon src={star}></IonIcon></p>
            </IonLabel>
            <IonLabel slot='end'>Book now</IonLabel>
          </IonItem>
        }

      </IonList>

      <IonListHeader className='ion-margin-top'>
        <IonLabel><h2>Your Recent Bookings</h2></IonLabel>
        <IonButton size='small' className='ion-text-capitalize'>Browse All</IonButton>
      </IonListHeader>
      <IonList className='ion-margin-bottom'>
        {isFetchingRecentBookings &&
          <IonItem lines={'none'}  className='ion-text-center'>
            <IonLabel><IonSpinner name='dots'/></IonLabel>
          </IonItem>
        }
        {recentBookings?.map((booking) => (
          <IonItem lines={'full'} button={true} detail={true} routerLink='/shop/services'>
          <IonLabel>
            <h2><strong> Order #{booking.refNo} </strong></h2>
            <p>{booking.shopName}</p>
            <p>{ dateFormatter.format(booking.bookingDate)} </p>
          </IonLabel>
          <IonLabel slot='end'><strong>{currencyFormatter.format(booking.totalCost)}</strong></IonLabel>
        </IonItem>
        ))}
      </IonList>

		</AuthenticatedPage>
	);
};

export default CustomerHomePage;
