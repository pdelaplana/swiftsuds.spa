import type { Booking } from 'domain/entities';
import { v4 as uuidv4 } from 'uuid';


export const fakeBookings : Booking[] = [
  {
    id: '338e8111-61f8-47b8-bb04-6537922b0497',
    refNo: 19080,
    shopId: '99ec24e2-479b-438e-8f0c-cafcf02b6be1',
    shopName: 'Quickwash Laundry',
    bookingDate: new Date(),
    pickupScheduledDate: new Date(),
    pickupActualDate: new Date(),
    deliveryScheduledDate: new Date(),
    deliveryActualDate: new Date(),
    totalCost: 890.85,
    pickupAddress: { addressId: uuidv4(), label: 'Home', placeName: '', fullAddress: '1 Main Street' },
    deliveryAddess: { addressId: uuidv4(), label: 'Home', placeName: '', fullAddress: '1 Main Street' },
    pickupFee: 100,
    deliveryFee: 100,
    bookingItems: [
      { id: uuidv4(), serviceId: 'wash', serviceName: 'Wash and Dry (max 8 kilos)', quantity: 1, unitPrice: 75, totalCost: 75 },
      { id: uuidv4(), serviceId: 'drycleaning', serviceName: 'Dry Cleaning', quantity: 1, unitPrice: 75, totalCost: 75 },
    ],
    bookingStatus: 'COMPLETED',
    receivedInShopDate: new Date(),
    dispatchedFromShopDate: new Date(),
    pickupByCourierId: uuidv4(),
    pickupByCourier: 'Guy Driver',
    deliveryByCourierId: uuidv4(),
    deliveryByCourier: 'Guy Driver',

  },

  {
    id: 'e598b49b-b167-46f2-8156-d81d7990b124',
    refNo: 19080,
    shopId: '99ec24e2-479b-438e-8f0c-cafcf02b6be1',
    shopName: 'Quickwash Laundry',
    bookingDate: new Date(),
    pickupScheduledDate: new Date(),
    pickupActualDate: new Date(),
    deliveryScheduledDate: null,
    deliveryActualDate: null,
    totalCost: 890.85,
    pickupAddress: { addressId: uuidv4(), label: 'Home', placeName: '', fullAddress: '1 Main Street' },
    deliveryAddess: { addressId: uuidv4(), label: 'Home', placeName: '', fullAddress: '1 Main Street' },
    pickupFee: 100,
    deliveryFee: 0,
    bookingItems: [
      { id: uuidv4(), serviceId: 'wash', serviceName: 'Wash and Dry (max 8 kilos)', quantity: 1, unitPrice: 75, totalCost: 75 },
    ],
    bookingStatus: 'PICKEDUP',
    receivedInShopDate: new Date(),
    dispatchedFromShopDate: new Date(),
    pickupByCourier: uuidv4(),
    pickupByCourierId: 'Guy Driver',

  },

  {
    id: '73d2c522-9477-4f2e-935d-6d65dececd9c',
    refNo: 19080,
    shopId: '99ec24e2-479b-438e-8f0c-cafcf02b6be1',
    shopName: 'Quickwash Laundry',
    bookingDate: new Date(),
    pickupScheduledDate: new Date(),
    pickupActualDate: new Date(),
    deliveryScheduledDate: null,
    deliveryActualDate: null,
    totalCost: 890.85,
    pickupAddress: { addressId: uuidv4(), label: 'Home', placeName: '', fullAddress: '1 Main Street' },
    deliveryAddess: { addressId: uuidv4(), label: 'Home', placeName: '', fullAddress: '1 Main Street' },
    pickupFee: 100,
    deliveryFee: 0,
    bookingItems: [
      { id: uuidv4(), serviceId: 'washandiron', serviceName: 'Wash and Iron (max 8 kilos)', quantity: 1, unitPrice: 75, totalCost: 75 },
    ],
    bookingStatus: 'INSHOP',
    receivedInShopDate: new Date(),
    dispatchedFromShopDate: new Date(),
    pickupByCourierId: uuidv4(),
    pickupByCourier: 'Guy Driver',

  },
];

export const fakeBooking: Booking = {
  id: '338e8111-61f8-47b8-bb04-6537922b0497',
  refNo: 19080,
  shopId: '99ec24e2-479b-438e-8f0c-cafcf02b6be1',
  shopName: 'Quickwash Laundry',
  bookingDate: new Date(),
  pickupScheduledDate: new Date(),
  pickupActualDate: new Date(),
  deliveryScheduledDate: null,
  deliveryActualDate: null,
  totalCost: 890.85,
  pickupAddress: { addressId: uuidv4(), label: 'Home', placeName: '', fullAddress: '1 Main Street' },
  deliveryAddess: { addressId: uuidv4(), label: 'Home', placeName: '', fullAddress: '1 Main Street' },
  pickupFee: 100,
  deliveryFee: 0,
  bookingItems: [
    { id: uuidv4(), serviceId: 'washandiron', serviceName: 'Wash and Iron (max 8 kilos)', quantity: 1, unitPrice: 75, totalCost: 75 },
  ],
  bookingStatus: 'INSHOP',
  receivedInShopDate: new Date(),
  dispatchedFromShopDate: null,
  pickupByCourierId: uuidv4(),
  pickupByCourier: 'Guy Driver',
};


