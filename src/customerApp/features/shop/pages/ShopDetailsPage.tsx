import React from 'react';

import { IonList, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/react';
import PageSpinner from 'components/ui/PageSpinner';
import ShopRatings from 'components/ui/ShopRatings';
import { useFetchShopDetails } from 'hooks/shops';
import { useShopRatingModal } from 'hooks/ui/modal/useShopRatingModal';
import { callOutline, chatbubblesOutline, globeOutline, locationOutline, mailOutline, openOutline, star } from 'ionicons/icons';
import AuthenticatedPage from 'pages/AuthenticatedPage';
import { useParams } from 'react-router';

const ShopDetailsPage: React.FC = () => {
  const { shopId } = useParams<{shopId: string}>();

  const { data: shop, isLoading: isShopDataLoading } = useFetchShopDetails(shopId);

  const { open: openShopRatingModal  } = useShopRatingModal();

  return (
    <AuthenticatedPage title={shop?.name} defaultBackButtonHref={`/shop/${shopId}`} showProfileIcon={false}>

      <PageSpinner isSpinning={isShopDataLoading} />
      { !isShopDataLoading &&  shop &&
        <>
          <IonList>
            <IonItem lines='full' >
              <IonLabel>
                <h2>From the Owners</h2>
                <p>{shop.description}</p>
              </IonLabel>
            </IonItem>

            <IonItem lines='full' >
              <IonIcon icon={locationOutline} slot='start'></IonIcon>
              <IonLabel>
                <h2>{shop?.address.streetAddress1}</h2>
                <p>{shop?.address.cityOrSuburb}</p>
              </IonLabel>
            </IonItem>
            <IonItem lines='full' >
              <IonIcon icon={callOutline} slot='start'></IonIcon>
              <IonLabel>
                <h2>{shop?.phone}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines='full' >
              <IonIcon icon={mailOutline} slot='start'></IonIcon>
              <IonLabel>
                <h2>{shop?.email}</h2>
              </IonLabel>
            </IonItem>
            <IonItem lines='full' >
              <IonIcon icon={globeOutline} slot='start'></IonIcon>
              <IonLabel>
                <h2>{shop?.website}</h2>
              </IonLabel>
              <IonIcon icon={openOutline} slot='end'></IonIcon>
            </IonItem>
            <IonItem lines='full' detail button routerLink={`/shop/${shop.id}/reviews`}>
              <IonIcon icon={chatbubblesOutline} slot='start'></IonIcon>
              <IonLabel>
                <ShopRatings averageRating={shop.averageRating} totalRatingsCount={shop.totalRatingsCount}/>
              </IonLabel>
            </IonItem>
          </IonList>

          <IonButton expand='full' className='ion-margin'  color='primary' onClick={() => openShopRatingModal()}>Leave Review</IonButton>
        </>
      }
    </AuthenticatedPage>
  );
};

export default ShopDetailsPage;
