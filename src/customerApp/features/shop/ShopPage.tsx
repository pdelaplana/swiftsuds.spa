import React, { useEffect, useMemo } from 'react';

import { IonItem, IonLabel, IonList } from '@ionic/react';
import { BottomContainer } from 'components/layout';
import ScrollableContainer from 'components/layout/ScrollableContainer';
import ImageContainer from 'components/ui/ImageContainer';
import ShopRatings from 'components/ui/ShopRatings';
import { useFetchShopDetails, useFetchShopServices } from 'hooks/shops';
import AuthenticatedPage from 'pages/AuthenticatedPage';
import { useShop } from 'providers/shop/ShopProvider';
import { useParams } from 'react-router';

import CartButton from './components/CartButton';
import { ServicesSelectionList } from './components/ServicesSelectionList';

const ShopPage: React.FC = () => {
  const { shopId } = useParams<{shopId: string}>();

  const { data: shop } = useFetchShopDetails(shopId);
  const { data: services, isLoading: isShopServicesLoading } = useFetchShopServices(shopId);

  const { setShopId } = useShop();

  useEffect(() => {

    setShopId(shopId, shop?.name);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[shopId]);


  const MemoizedCartButton = useMemo(() => {
    return () => <CartButton />;
  }, []);

	return (
		<AuthenticatedPage title={''} showProfileIcon={true} defaultBackButtonHref='/home'>
			<ScrollableContainer>
        <ImageContainer src="/resources/img/laundromat-1.jpg" text={shop?.name} />

        <IonList>
          <IonItem lines='none' detail button href={`/shop/${shop?.id}/details`}>
          <IonLabel>
            <h1><strong> {shop?.name}</strong></h1>
            <p>{shop?.address.fullAddress}</p>
            { shop && <ShopRatings averageRating={shop?.averageRating} totalRatingsCount={shop?.totalRatingsCount} />}
          </IonLabel>
          </IonItem>
        </IonList>

        <ServicesSelectionList shopid={shopId} services={services} isFetching={isShopServicesLoading} />
      </ScrollableContainer>
      <BottomContainer>
        <MemoizedCartButton />
      </BottomContainer>
		</AuthenticatedPage>
	);
};

export default ShopPage;
