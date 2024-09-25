import { getFavoriteShops } from 'api/shops/getFavoriteShops';
import type { Shop } from 'domain/entities/shop';
import type { FetchResult } from 'hooks/types';
import { useQuery } from 'react-query';


export const useFetchFavoriteShops = () : FetchResult<Shop[]> => {

  const result = useQuery('getFavoriteShops', getFavoriteShops, {
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

