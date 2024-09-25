import { useIonModal } from '@ionic/react';
import type { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import AddressSearchModal from 'customerApp/features/cart/pages/addresses/components/AddressSearchModal';

export const useAddressSearchModal = (): { open: () => void } => {
  const [present, dismiss] = useIonModal(AddressSearchModal, {
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
