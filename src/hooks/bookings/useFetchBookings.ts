import { getBookings } from '@api/bookings';
import type { Booking } from '@domain/entities';
import type { FetchResult } from 'hooks/types';
import { useQuery } from 'react-query';

export const useFetchBookings = (customerId: string): FetchResult<Booking[]> => {
  const result = useQuery(['getBookings', customerId], () => getBookings(customerId), {
    // Here you can add options such as refetchOnWindowFocus, staleTime, etc.
    staleTime: 1000 * 60 * 5,  // Data is considered fresh for 5 minutes
    onError: (err) => {
      console.error('Error fetching user data:', err);
    }
  });

  return {
    data: result.data,
    error: result.error,
    isLoading: result.isFetching
  };
};
