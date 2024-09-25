import React, { useState } from 'react';

import { IonListHeader, IonList, IonItem, IonLabel, IonBadge, useIonModal, IonButton, IonIcon, IonSpinner } from '@ionic/react';
import type { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import type { ServiceItem } from 'domain/entities/serviceItem';
import { currencyFormatter } from 'utils/formatters';

import ServiceDetailsModal from './ServiceDetailsModal';


interface ServicesSelectionListProps{
  shopid: string;
  services: ServiceItem[];
  isFetching: boolean;
}

export const ServicesSelectionList : React.FC<ServicesSelectionListProps> = ({ shopid, services, isFetching }) =>
{

  const [selectedService, setSelectedService] = useState<ServiceItem>(null);

  const [present, dismiss] = useIonModal(ServiceDetailsModal, {
    shopid: shopid,
    service: selectedService,
    onDismiss: (data: string, role: string) => dismiss(data, role),
  });

  function openModal(service:ServiceItem) {
    setSelectedService(state => state = service);
    present({
      onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
        if (ev.detail.role === 'confirm') {

        }
      },
    });
  }

  return(
    <>
      <IonListHeader>Services Offered </IonListHeader>
      <IonList>
      {isFetching &&
          <IonItem lines={'none'}  className='ion-text-center'>
            <IonLabel><IonSpinner name='dots'/></IonLabel>
          </IonItem>
        }
      {services?.map(service => (
        <IonItem key={service.id} lines='full'>
          <IonLabel >
            <h2>{service.name}</h2>
            <p>
              {service.description}
            </p>
            <small>Price per Weight - {currencyFormatter.format(service.price)}</small>
            <div className='ion-margin-top'>{service.tags.map(tag => <IonBadge key={tag} className='ion-margin-end'>{tag}</IonBadge>)}</div>
          </IonLabel>
          <IonButton size='default' fill='outline' onClick={() => openModal(service)}>Add</IonButton>
        </IonItem>

      ))}
      </IonList>
    </>
  );
};
