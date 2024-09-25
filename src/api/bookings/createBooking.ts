import type { Address, BookingItem } from 'domain/entities';
import { v4 as uuidv4 } from 'uuid';

export type CreateBookingApiRequest = {
  customerId: string;
  shopId: string;

  bookingDate: Date;
  pickupDate: Date;
  deliveryDate: Date;
  pickupAddress: Address;
  deliveryAddress: Address;

  bookingItems: BookingItem[];
}

export type CreateBookingApiResponse = {
  id: string
}

export const createBooking = async (result: CreateBookingApiRequest): Promise<CreateBookingApiResponse> => {

  return new Promise((resolve, reject)=> {

    setTimeout(()=>{
      resolve({
          id: uuidv4()
        });
    },2500);

  });
};

