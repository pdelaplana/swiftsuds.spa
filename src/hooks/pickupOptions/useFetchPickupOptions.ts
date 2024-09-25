import { getPickupOptionsForShop } from 'api/shops';
import type { PickupOption } from 'domain/valueTypes/pickupOption';
import type { FetchResult } from 'hooks/types';
import { useQuery } from 'react-query';


export const useFetchPickupOptions = (shopId: string) : FetchResult<PickupOption[]> => {

  const result = useQuery('getPickupOptionsForShop', () => getPickupOptionsForShop(shopId), {
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
