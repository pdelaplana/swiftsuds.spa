import type { LaundryItem } from 'domain/entities/laundryItem';
import type { FetchResult } from 'hooks/types';
import { useQuery } from 'react-query';


export const useFetchLaundryItems  = () : FetchResult<LaundryItem[]> => {

  const result = useQuery(['getLaundryItemsQuery'], () =>  [
    { description: 'Shirt' },
    { description: 'Long Sleeve Shirt' },
    { description: 'Polo Shirt' },
    { description: 'Button Down Short' },
    { description: 'Shorts' },
    { description: 'Pants' },
  ], {
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

