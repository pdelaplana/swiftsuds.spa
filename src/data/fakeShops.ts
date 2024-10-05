import type { Shop } from 'domain/entities/shop';
import { v4 as uuidv4 } from 'uuid';

export const fakeShops: Shop[] = [{
  id: '99ec24e2-479b-438e-8f0c-cafcf02b6be1',
  name: 'Quickwash Laundry',
  description: 'We have been serving the community for over 10 years. We offer a wide range of services including dry cleaning, laundry, and ironing. We are open 7 days a week.',
  averageRating: 4.5,
  totalRatingsCount: 500,
  logoUrl: '',
  website: 'https://www.quickwashlaundry.com.ph',
  phone: '+61412787191',
  email: 'help@quickwashlaundry.com.ph',
  operatingHours: [
    { day: 'Monday', isOpen:true, openAt: '8:00 AM', closeAt: '5:00 PM' },
    { day: 'Tuesday', isOpen:true, openAt: '8:00 AM', closeAt: '5:00 PM' },
    { day: 'Wednesday', isOpen:true, openAt: '8:00 AM', closeAt: '5:00 PM' },
    { day: 'Thursday', isOpen:true, openAt: '8:00 AM', closeAt: '5:00 PM' },
    { day: 'Friday', isOpen:true, openAt: '8:00 AM', closeAt: '5:00 PM' },
    { day: 'Saturday', isOpen:true, openAt: '8:00 AM', closeAt: '5:00 PM' },
    { day: 'Sunday', isOpen:false },
  ],
  address: {
    addressId: uuidv4(),
    label: '',
    placeName: '',
    fullAddress: '1634 McKinley Pkwy, Taguig, Metro Manila, Philippines',
    streetAddress1: '1634 McKinley Pkwy',
    streetAddress2: '',
    streetAddress3: '',
    cityOrSuburb: 'Taguig',
    stateOrProvince: 'Metro Manila',
    country: 'Philippines',
    postCode: ''
  }
}];

