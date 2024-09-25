import { fakeBookings } from 'data/fakes';
import type { Booking } from 'domain/entities/booking';

export const getRecentBookings = async (customerId: string): Promise<Booking[]> => {

  return new Promise((resolve, reject)=> {

    setTimeout(()=>{
      resolve(fakeBookings);
    },2500);

  });
};

