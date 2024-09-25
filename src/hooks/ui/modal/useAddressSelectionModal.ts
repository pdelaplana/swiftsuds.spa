import { useIonModal } from '@ionic/react';
import type { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import AddressSelectionModal from 'customerApp/features/cart/pages/cart/components/AddressSelectionModal';

export const useAddressSelectionModal = () : { open: () => void } => {
  const [present, dismiss] = useIonModal(AddressSelectionModal, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
  });

  return {
    open: () => {
      present({
        onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
          if (ev.detail.role === 'confirm') {

          }
        },
      });
    }};
};
