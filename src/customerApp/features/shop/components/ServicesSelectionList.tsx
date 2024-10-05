import React, { useState } from 'react';

import { IonListHeader, IonList, IonItem, IonLabel, IonBadge, useIonModal, IonButton, IonRow, IonIcon } from '@ionic/react';
import type { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import PageSpinner from 'components/ui/PageSpinner';
import type { ServiceItem } from 'domain/entities/serviceItem';
import { addCircleOutline } from 'ionicons/icons';
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
      <PageSpinner isSpinning={isFetching} />
      { !isFetching &&
        <>
        <IonListHeader>Choose Services</IonListHeader>
        <IonList>
        { !isFetching && services?.map(service => (
        <IonItem key={service.id} lines='full'>
          <IonLabel>
            <h2>{service.name}</h2>
            <p>
              {service.description}
            </p>
            <small>Price per Weight - {currencyFormatter.format(service.price)}</small>
            <IonRow className='ion-margin-top '>{service.tags.map(tag => <IonBadge color='light' key={tag} style={{'marginRight':'3px'}}>{tag}</IonBadge>)}</IonRow>
          </IonLabel>
          <IonButton slot='end' size='default' fill='clear' onClick={() => openModal(service)}><IonIcon icon={addCircleOutline} size='large'></IonIcon></IonButton>
        </IonItem>
        ))}
        </IonList>
      </>
      }
    </>
  );
};
