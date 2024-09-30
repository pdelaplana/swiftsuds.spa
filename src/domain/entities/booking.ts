import type { Address } from './address';
import type { BookingItem } from './bookingItem';

export type BookingStatus = 'BOOKED' | 'PICKEDUP' | 'INSHOP' | 'DISPATCHED' | 'COMPLETED';

export interface Booking {
  id: string;
  refNo: number;
  shopId: string;
  shopName: string;
  bookingDate: Date;
  pickupScheduledDate: Date;
  pickupActualDate?: Date;
  pickupAddress: Address;
  pickupFee: number;
  pickupByCourierId: string;
  pickupByCourier: string;
  receivedInShopDate?: Date;
  dispatchedFromShopDate?: Date;
  deliveryScheduledDate?: Date;
  deliveryActualDate?: Date;
  deliveryAddess?: Address;
  deliveryFee?: number;
  deliveryByCourierId?: string;
  deliveryByCourier?: string;
  totalCost: number;
  bookingItems: BookingItem[];
  bookingStatus: BookingStatus;
}
