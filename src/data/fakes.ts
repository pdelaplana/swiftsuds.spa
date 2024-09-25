import { v4 as uuidv4 } from 'uuid';


export const fakeBookings = [
  {
    id: uuidv4(),
    refNo: 19080,
    shopId: uuidv4(),
    shopName: 'Quickwash Laundry',
    transporterId: uuidv4(),
    transporter: 'Guy Driver',
    bookingDate: new Date(),
    pickupDate: new Date(),
    deliveryDate: new Date(),
    totalCost: 890.85,
    pickupAddress: {addressId: uuidv4(), shortName: 'Home', fullAddress: '1 Main Street'},
    deliveryAddess: {addressId: uuidv4(), shortName: 'Home', fullAddress: '1 Main Street'},
  },
  {
    id: uuidv4(),
    refNo: 10290,
    shopId: uuidv4(),
    shopName: 'Quickwash Laundry',
    transporterId: uuidv4(),
    transporter: 'Guy Driver',
    bookingDate: new Date(),
    pickupDate: new Date(),
    deliveryDate: new Date(),
    totalCost: 500.00,
    pickupAddress: {addressId: uuidv4(), shortName: 'Home', fullAddress: '1 Main Street'},
    deliveryAddess: {addressId: uuidv4(), shortName: 'Home', fullAddress: '1 Main Street'},
  },
  {
    id: uuidv4(),
    refNo: 10962,
    shopId: uuidv4(),
    shopName: 'Quickwash Laundry',
    transporterId: uuidv4(),
    transporter: 'Guy Driver',
    bookingDate: new Date(),
    pickupDate: new Date(),
    deliveryDate: new Date(),
    totalCost: 690.85,
    pickupAddress: {addressId: uuidv4(), shortName: 'Home', fullAddress: '1 Main Street'},
    deliveryAddess: {addressId: uuidv4(), shortName: 'Home', fullAddress: '1 Main Street'},
  },
];

export const fakeBooking = {
  id: uuidv4(),
  refNo: 19080,
  shopId: uuidv4(),
  shopName: 'Quickwash Laundry',
  transporterId: uuidv4(),
  transporter: 'Guy Driver',
  bookingDate: new Date(),
  pickupDate: new Date(),
  deliveryDate: new Date(),
  totalCost: 890.85,
  pickupAddress: {addressId: uuidv4(), shortName: 'Home', fullAddress: '1 Main Street'},
  deliveryAddess: {addressId: uuidv4(), shortName: 'Home', fullAddress: '1 Main Street'},
};


