import { getAddresses } from 'api/addresses/getAddresses';
import type { Address } from 'domain/entities';
import type { FetchResult } from 'hooks/types';
import { useQuery } from 'react-query';

export const useFetchAddresses = (term: string): FetchResult<Address[]> => {
  const result = useQuery([getAddresses, term], () => getAddresses(), {
    // Here you can add options such as refetchOnWindowFocus, staleTime, etc.
    staleTime: 1000 * 60 * 5,  // Data is considered fresh for 5 minutes
    onError: (err) => {
      console.error('Error fetching user data:', err);
    },
    enabled: Boolean(term)
  });

  return {
    data: result.data,
    error: result.error,
    isLoading: result.isFetching
  };

};
