import type { CreateBookingApiRequest } from 'api/bookings/createBooking';
import { createBooking } from 'api/bookings/createBooking';
import type { CreateResult } from 'hooks/types';
import { useMutation } from 'react-query';

export type CreateBookingParams = CreateBookingApiRequest;

export type CreateBookingResult = CreateResult<string>;

export const useCreateBooking = (): CreateBookingResult => {
  const mutation = useMutation(( createBookingParams : CreateBookingParams) => createBooking(createBookingParams));

  return {
    data: mutation.data?.id,
    error: mutation.error,
    mutate: ( createBookingParams: CreateBookingParams ) => mutation.mutate(createBookingParams)
  };
};
