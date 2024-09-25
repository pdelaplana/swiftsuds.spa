import type { Address } from 'domain/entities';
import type { DropoffSchedule } from 'domain/valueTypes';
import type { PickupOption, PickupSchedule } from 'domain/valueTypes/pickupOption';

export interface CartOrder {
  id: string;
  shopId: string;
  shopName: string;

  bookingDate?: Date;

  pickupSchedule?: PickupSchedule;

  pickupOption?: PickupOption;
  pickupFromDate?: Date;
  pickupToDate?: Date;
  pickupAddress?: Address;

  dropoffAddress?: Address;

  dropoffSchedule?: DropoffSchedule;

  items: CartOrderItem[];
}

export interface CartOrderItem {
  id: string;
  orderId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}


export type CartAction =
  | { type: 'ADD_ORDER'; payload: CartOrder }
  | { type: 'REMOVE_ORDER'; payload: CartOrder }
  | { type: 'ADD_ORDER_ITEM'; payload: CartOrderItem }
  | { type: 'REMOVE_ORDER_ITEM'; payload: CartOrderItem }
  | { type: 'UPDATE_ORDER_ITEM'; payload: CartOrderItem }
  | { type: 'UPDATE_ORDER'; payload: CartOrder }
  | { type: 'CLEAR_CART'; }
  | { type: 'UPDATE_ORDER_PICKUP_ADDRESS'; payload: Address }
