import React, { useMemo } from 'react';

import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonTitle,
	IonContent,
	IonButton,
	IonIcon,
  IonBackButton,
  IonBadge } from '@ionic/react';
import { cartOutline, personOutline } from 'ionicons/icons';
import './AuthenticatedPage.css';
import { useCart } from 'providers/cart/CartProvider';

interface AuthenticatedPageProps {
	title?: string;
  showHeader?: boolean;
  showProfileIcon?: boolean;
	children: React.ReactNode;
  defaultBackButtonHref?: string;
}

const AuthenticatedPage: React.FC<AuthenticatedPageProps> = ({ title='', children, showHeader=true, showProfileIcon=true, defaultBackButtonHref }) => {
  const { cartState } = useCart();

  const memoizedItemCount = useMemo(() => {
    return cartState.orders.length>0 ? cartState.orders.length : 0;
  }, [cartState.orders]);

  const CartBadge: React.FC = () => (
      <>
      {
        memoizedItemCount > 0 &&
        <IonBadge color="danger" style={{'position': 'absolute', 'right': '-5px', 'top': '-2px', 'fontSize': '.6em' }}>
          {memoizedItemCount}
        </IonBadge>
      }
      </>
    );

	return (
		<IonPage>
			<IonHeader className='ion-no-border' hidden={!showHeader} >
				<IonToolbar>
					<IonButtons slot='start'>
						<IonBackButton defaultHref={defaultBackButtonHref} />
					</IonButtons>
					<IonTitle>{title}</IonTitle>
          { showProfileIcon &&
            <IonButtons slot='end'>
              <IonButton routerLink='/cart'>
                <IonIcon slot='icon-only' icon={cartOutline} size='default' />
                <CartBadge />
              </IonButton>
              <IonButton routerLink='/profile'>
                <IonIcon slot='icon-only' icon={personOutline} size='default'/>
              </IonButton>
            </IonButtons>
          }
				</IonToolbar>
			</IonHeader>

			<IonContent>
				{children}
			</IonContent>
		</IonPage>
	);
};

export default AuthenticatedPage;
