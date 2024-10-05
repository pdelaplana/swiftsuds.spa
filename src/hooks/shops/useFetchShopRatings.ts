import { getShopRatings } from '@api/shops';
import type { Rating } from '@domain/entities/rating';
import type { FetchResult } from 'hooks/types';
import { useQuery } from 'react-query';

export const useFetchShopRatings = (shopId: string) : FetchResult<Rating[]> => {

  const result =  useQuery(['getShopRatings'], () => getShopRatings(shopId), {
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
