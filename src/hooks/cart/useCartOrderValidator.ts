import type { CartOrder } from 'providers/cart/cartTypes';

// Desc: Cart order validator hook
export const useCartOrderValidator = () : { validateOrder: (order:CartOrder) => boolean } => {

  return {
    validateOrder: (order: CartOrder) => {
      return (
        order?.items != null &&
        order.items.length > 0 &&
        order.bookingDate != null &&
        order.pickupSchedule != null &&
        //order.pickupOption != null &&
        //order.pickupFromDate != null &&
        //order.pickupToDate != null &&
        order.pickupAddress != null &&
        order.dropoffAddress != null  &&
        order.dropoffSchedule != null
      );

    }
  };
};
