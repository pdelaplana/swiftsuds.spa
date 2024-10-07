import React from 'react';

import { IonAvatar, IonButton, IonIcon, IonItem, IonLabel, IonList } from '@ionic/react';
import BottomContainer from 'components/layout/BottomContainer';
import { useAccountInfo } from 'hooks/accountInfo/useAccountInfo';
import { albumsOutline, chatbubblesOutline } from 'ionicons/icons';
import AuthenticatedPage from 'pages/AuthenticatedPage';

const UserProfilePage : React.FC = () => {
  const { name, email, handleLogout } = useAccountInfo();



  return(
    <AuthenticatedPage  showProfileIcon={false}  defaultBackButtonHref='/'>
      <div>
        <div className='ion-padding ion-flex ion-justify-content-center'>
          <IonAvatar>
            <img alt='' src='https://ionicframework.com/docs/img/demos/avatar.svg' />
          </IonAvatar>
        </div>
        <IonLabel className='ion-text-center'>
          <h1 className='dark'>{name}</h1>
        </IonLabel>
        <IonLabel className='ion-text-center'>
          <h2>{email}</h2>
        </IonLabel>
      </div>


      <IonList className='ion-margin'>
        <IonItem button={true} detail={true} lines='none' className='ion-outline ion-outline-nobottom' routerLink='/order/list'>
          <IonIcon icon={albumsOutline} slot='start'></IonIcon>
          <IonLabel><h2>Your bookings</h2></IonLabel>
        </IonItem>
        <IonItem button={true} detail={true} lines='none' className='ion-outline ion-no-border'>
          <IonIcon icon={chatbubblesOutline} slot='start'></IonIcon>
          <IonLabel><h2>Your Reviews</h2></IonLabel>
        </IonItem>
      </IonList>


      <BottomContainer>
        <IonButton expand='full' className='ion-padding' onClick={handleLogout}>
          Sign Out
        </IonButton>
      </BottomContainer>

    </AuthenticatedPage>
  );
};

export default UserProfilePage;
