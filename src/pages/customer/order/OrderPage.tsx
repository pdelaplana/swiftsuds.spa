import React, { useState } from 'react';

import {  IonLabel } from '@ionic/react';
import ScrollableContainer from 'components/layout/ScrollableContainer';
import type { ServiceItem } from 'domain/entities/serviceItem';
import AuthenticatedPage from 'pages/AuthenticatedPage';
import { useParams } from 'react-router';

import CartButton from '../../../customerApp/features/shop/components/CartButton';
import { ServicesSelectionList } from '../../../customerApp/features/shop/components/ServicesSelectionList';

import './order.css';




interface OrderPageProps {}

const OrderPage: React.FC = () => {
  const { shopId } = useParams<{shopId: string}>();
  console.log(shopId);

	return (
		<AuthenticatedPage title={'Create Order'} showProfileIcon={true}>
			<>
        <ScrollableContainer height='78%'>
          <div className='ion-padding'>
            <IonLabel>
              <h1>Quickwash Laundry</h1>
              <p>Lagro, Quezon city</p>
            </IonLabel>
          </div>
          <ServicesSelectionList shopId={shopId} />
        </ScrollableContainer>
        <CartButton/>
			</>
		</AuthenticatedPage>
	);
};

export default OrderPage;
