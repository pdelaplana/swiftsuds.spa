import type { CartOrder } from 'providers/cart/cartTypes';

export interface CartOrderTotals {
  total: number;
  subtotal: number;
  tax: number;
  discount: number;
  pickupFee: number;
  deliveryFee: number;
  totalItems: number;
  totalWeight: number;
  totalQuantity: number;
}

export const useCartOrderTotals = () : { calculateTotals: (order:CartOrder) => CartOrderTotals } => {

  return {
    calculateTotals: (order: CartOrder) => {
      let total = 0;
      let subtotal = 0;
      let tax = 0;
      let discount = 0;

      let pickupFee = 0;
      let deliveryFee = 0;
      let totalItems = 0;
      let totalWeight = 0;
      let totalQuantity = 0;

      order.items.forEach(item => {
        totalItems += item.quantity;
        totalQuantity += item.quantity;
        subtotal += item.price * item.quantity;
      });

      pickupFee = order.pickupSchedule?.cost ?? 0;
      deliveryFee = order.dropoffSchedule?.cost ?? 0;

      total = (subtotal + tax + pickupFee + deliveryFee) - discount;

      return {
        total,
        subtotal,
        tax,
        discount,
        pickupFee,
        deliveryFee,
        totalItems,
        totalWeight,
        totalQuantity
      };
    }
  };
};
