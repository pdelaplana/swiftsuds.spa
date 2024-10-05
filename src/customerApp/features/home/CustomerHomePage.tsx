import React from 'react';

import {
  IonAvatar,
  IonBadge,
  IonButton,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardSubtitle,
	IonCardTitle,
	IonIcon,
	IonItem,
	IonLabel,
  IonList,
  IonListHeader,
  IonSpinner,
  IonText,
} from '@ionic/react';
import ShopLogo from 'components/ui/ShopLogo';
import ImageContainer from 'components/ui/ImageContainer';
import { useFetchRecentBookings } from 'hooks/bookings/useFetchRecentBookings';
import { useFetchFavoriteShops } from 'hooks/shops/useFetchFavoriteShops';
import { homeOutline, star } from 'ionicons/icons';
import AuthenticatedPage from 'pages/AuthenticatedPage';
import { currencyFormatter, dateFormatter } from 'utils/formatters';

import OrderStatusBar from '../order/pages/orderDetails/components/OrderStatusBar';
import { I } from 'vitest/dist/types-198fd1d9';
import ShopRatings from 'components/ui/ShopRatings';

const CustomerHomePage: React.FC = () => {

  const { data: favoriteShops, isLoading: isFetchingShops } = useFetchFavoriteShops();

  const { data: recentBookings, isLoading: isFetchingRecentBookings } = useFetchRecentBookings('customerid');

	return (
		<AuthenticatedPage >

      <IonCard button hidden>
      <ImageContainer src="/resources/img/laundromat-1.jpg" text='SwiftSuds' />
        <IonCardHeader>
          <IonCardTitle>F</IonCardTitle>
          <IonCardSubtitle>Active Order</IonCardSubtitle>
          <p><IonText color='medium'>Mon, Jan 27 - PhP200</IonText></p>
        </IonCardHeader>

        <IonCardContent >
          <OrderStatusBar bookingStatus='INSHOP'/>
        </IonCardContent>
      </IonCard>


      <div  className='ion-padding' style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
        <IonLabel color='dark'><h1>Welcome back, <br/> Mark</h1></IonLabel>
        <IonAvatar>
          <img alt="" src='https://ionicframework.com/docs/img/demos/avatar.svg' />
        </IonAvatar>
      </div>


      <IonCard button color='tertiary' hidden>
        <IonCardContent>
          <div style={{ display: 'flex', alignItems: 'center', padding:'5px' }}>
            <IonIcon src={homeOutline} size='large' style={{ marginRight: '10px' }}></IonIcon>
            <IonLabel >
              <h3>Your Location</h3>
              <h2>184 Mindanao Ave, General Mariano Alvarez, Cavite, 4117</h2>
            </IonLabel>
          </div>
        </IonCardContent>
      </IonCard>

      { false &&
        <IonCard>
          <IonCardHeader>
            <ImageContainer src="/resources/img/laundromat-1.jpg" text='SwiftSuds' />
            <IonCardTitle>{favoriteShops[0].name}</IonCardTitle>
            <IonCardSubtitle>{favoriteShops[0].address.fullAddress}</IonCardSubtitle>
            <IonBadge color='success' style={{width:'50px', position:'absolute', right:10, top:250}} className='ion-float-right'>{favoriteShops[0].rating} <IonIcon src={star}></IonIcon></IonBadge>

          </IonCardHeader>
          <IonCardContent>

            <IonButton routerLink={`/shop/${favoriteShops[0].id}/services`}>Book</IonButton>
          </IonCardContent>
        </IonCard>

      }

      <IonList>
        <IonItem button detail lines='full' hidden>
          <IonIcon icon={homeOutline} slot='start' size='large'></IonIcon>
          <IonLabel>
          <h3>Your Location</h3>
          <h2>184 Mindanao Ave, General Mariano Alvarez, Cavite, 4117</h2>
          </IonLabel>
        </IonItem>
        { true &&
        <>
           <IonListHeader className='ion-margin-top' >
          <IonLabel><h2>Your Active Order</h2></IonLabel>
        </IonListHeader>
        <IonItem button detail={false} lines='full'>
          <IonLabel>
            <div style={{display:'inline-flex', alignItems:'center'}}>
              <ShopLogo/>

              <div >
              <h2>QuickWash Laundry</h2>
              <p><IonText color='medium'>Mon, Jan 27 - PhP200</IonText></p>
              </div>
            </div>

            <OrderStatusBar bookingStatus='PICKEDUP'/>
          </IonLabel>


        </IonItem>

        </>

        }

        <IonListHeader className='ion-margin-top' >
          <IonLabel><h2>Book Laundry Pickup</h2></IonLabel>
          <IonButton size='small' className='ion-text-capitalize'>Browse nearby</IonButton>
        </IonListHeader>

        {isFetchingShops &&
          <IonItem lines={'none'}  className='ion-text-center'>
            <IonLabel><IonSpinner name='dots'/></IonLabel>
          </IonItem>
        }
        { !isFetchingShops && favoriteShops &&
          <IonItem lines={'full'} button={true} detail={true} routerLink={`/shop/${favoriteShops[0].id}`} >
            <ShopLogo/>
            <IonLabel >
              <h2 color='dark'>{favoriteShops[0].name}</h2>
              <p>{favoriteShops[0].address.fullAddress}</p>
              <ShopRatings averageRating={favoriteShops[0].averageRating} totalRatingsCount={favoriteShops[0].totalRatingsCount}/>
            </IonLabel>

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
          <IonItem lines={'full'} button={true} detail={true} routerLink={`/order/${booking.id }`}>
          <IonLabel>
            <h2>{booking.shopName}</h2>
            <p color='dark'>{ dateFormatter.format(booking.bookingDate) } - {currencyFormatter.format(booking.totalCost)} </p>
          </IonLabel>
        </IonItem>
        ))}
      </IonList>

		</AuthenticatedPage>
	);
};

export default CustomerHomePage;
