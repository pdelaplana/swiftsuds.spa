import type { Booking } from '@domain/entities';
import { fakeBookings } from 'data/fakes';

export const getBooking = async (bookingId: string): Promise<Booking> => {

  return new Promise((resolve, reject)=> {
    console.log('getBooking', bookingId);
    setTimeout(()=>{
      resolve(fakeBookings.find(booking => booking.id === bookingId));
    },2500);

  });
};

