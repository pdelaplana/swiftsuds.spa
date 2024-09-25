import React, { useEffect, useMemo } from 'react';

import { IonLabel } from '@ionic/react';
import { BottomContainer } from 'components/layout';
import ScrollableContainer from 'components/layout/ScrollableContainer';
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
    console.log('ShopId', shopId);
    setShopId(shopId, shop?.name);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[shopId]);


  const MemoizedCartButton = useMemo(() => {
    return () => <CartButton />;
  }, []);

	return (
		<AuthenticatedPage title={shop?.name} showProfileIcon={true} defaultBackButtonHref='/home'>
			<ScrollableContainer>
          <div className='ion-padding'>
            <IonLabel>
              <h1>{shop?.name}</h1>
              <p>{shop?.city}</p>
            </IonLabel>
          </div>
          <ServicesSelectionList shopid={shopId} services={services} isFetching={isShopServicesLoading} />
        </ScrollableContainer>
        <BottomContainer>
          <MemoizedCartButton />
        </BottomContainer>
		</AuthenticatedPage>
	);
};

export default ShopPage;
