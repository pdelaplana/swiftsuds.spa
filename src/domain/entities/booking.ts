import type { Address } from './address';

export interface Booking {
  id: string;
  refNo: number;
  shopId: string;
  shopName: string;
  transporterId: string;
  transporter: string;
  bookingDate: Date;
  pickupDate: Date;
  deliveryDate: Date;
  totalCost: number;
  pickupAddress: Address;
  deliveryAddess: Address;
}
