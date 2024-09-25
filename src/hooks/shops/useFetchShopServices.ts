import { getShopServices } from 'api/shops/getShopServices';
import type { ServiceItem } from 'domain/entities/serviceItem';
import type { FetchResult } from 'hooks/types';
import { useQuery } from 'react-query';


export const useFetchShopServices  = (shopId: string) : FetchResult<ServiceItem[]> => {

  const result = useQuery('getShopServices', () => getShopServices(shopId), {
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

