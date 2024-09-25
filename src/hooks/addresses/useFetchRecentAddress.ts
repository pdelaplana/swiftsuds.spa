import { getRecentAddresses } from 'api/addresses/getRecentAddresses';
import type { Address } from 'domain/entities';
import type { FetchResult } from 'hooks/types';
import { useQuery } from 'react-query';

export const useFetchRecentAddresses = (): FetchResult<Address[]> => {
  const result = useQuery([getRecentAddresses], () => getRecentAddresses(), {
    // Here you can add options such as refetchOnWindowFocus, staleTime, etc.
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5,  // Data is considered fresh for 5 minutes
    onError: (err) => {
      console.error('Error fetching user data:', err);
    }
  });

  return {
    data: result.data?.slice(0,3),
    error: result.error,
    isLoading: result.isFetching
  };


};
