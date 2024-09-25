import { createSavedAddress, type CreateSavedAddressApiRequest } from 'api/addresses/createSavedAddress';
import type { CreateResult } from 'hooks/types';
import { useMutation } from 'react-query';

export type CreateSavedAddressParams = CreateSavedAddressApiRequest;

export type CreateSavedAddressResult = CreateResult<string>;

export const useCreateSavedAddress = (): CreateSavedAddressResult => {
  const mutation = useMutation(( createSavedAddressParams : CreateSavedAddressParams) => createSavedAddress(createSavedAddressParams));

  return {
    data: mutation.data?.addressId,
    error: mutation.error,
    mutate: ( createSavedAddressParams: CreateSavedAddressParams ) => mutation.mutate(createSavedAddressParams)
  };

};
