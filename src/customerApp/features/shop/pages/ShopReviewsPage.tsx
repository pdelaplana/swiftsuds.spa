import React from 'react';

import { IonList, IonListHeader, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { ScrollableContainer } from 'components/layout';
import PageSpinner from 'components/ui/PageSpinner';
import { useFetchShopRatings } from 'hooks/shops';
import { person, star, starHalfSharp } from 'ionicons/icons';
import AuthenticatedPage from 'pages/AuthenticatedPage';
import { useParams } from 'react-router';

const ShopReviewsPage: React.FC = () => {
  const { shopId } = useParams<{shopId: string}>();

  const { data: ratings, isLoading: isRatingsLoading } = useFetchShopRatings(shopId);

  const ratingStars = (ratingValue: number) => {
    let ratings = [];
    for (let i = 0; i < Math.floor(ratingValue); i++) {
      ratings.push(<IonIcon icon={star} />);
    }
    if (ratingValue % 1 !== 0) {
      ratings.push(<IonIcon icon={starHalfSharp} />);
    }
    return ratings;
  };


  return (
    <AuthenticatedPage showProfileIcon={false} defaultBackButtonHref='/home'>
      <PageSpinner isSpinning={isRatingsLoading} />
      { !isRatingsLoading &&  ratings  &&
        <ScrollableContainer height='100%'>
          <IonList>
          <IonListHeader>Reviews</IonListHeader>
          { ratings.map(rating => (
            <IonItem lines='full' className='ion-flex ion-align-items-start' >
              <IonIcon icon={person} slot='start' className='ion-margin-top'></IonIcon>
              <IonLabel>
                <h2>{rating.name}</h2>
                <p>{rating.comment}</p>
                <p style={{marginTop:'9px'}}>{ratingStars(rating.rating)}</p>
              </IonLabel>
            </IonItem>
          ))}
          </IonList>

        </ScrollableContainer>
      }

    </AuthenticatedPage>
  );
};

export default ShopReviewsPage;
