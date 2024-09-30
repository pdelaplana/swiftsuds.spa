import { getBooking } from '@api/bookings';
import type { Booking } from '@domain/entities';
import type { FetchResult } from 'hooks/types';
import { useQuery } from 'react-query';

export const useFetchBooking = (bookingId: string): FetchResult<Booking> => {

  const result = useQuery(['getBooking', bookingId], () => getBooking(bookingId), {
    staleTime: 1000 * 60 * 5,  // Data is considered fresh for 5 minutes
    onError: (err) => {
      console.error('Error fetching user data:', err);
    }
  });

  console.log('result', result);

  return {
    data: result.data,
    error: result.error,
    isLoading: result.isFetching
  };

};
