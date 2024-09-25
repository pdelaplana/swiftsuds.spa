import { getRecentBookings } from 'api/bookings/getRecentBookings';
import type { Booking } from 'domain/entities/booking';
import type { FetchResult } from 'hooks/types';
import { useQuery } from 'react-query';

export const useFetchRecentBookings  = (customerId: string) : FetchResult<Booking[]> => {

  const result = useQuery(['getRecentBookings', customerId], () => getRecentBookings(customerId), {
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
