import type { OverlayEventDetail } from '@ionic/core';
import { useIonModal } from '@ionic/react';
import ShopRatingModal from 'customerApp/features/shop/components/ShopRatingModal';

export const useShopRatingModal = (): { open: () => void } => {
  const [present, dismiss] = useIonModal(ShopRatingModal, {
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
