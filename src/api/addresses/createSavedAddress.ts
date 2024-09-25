import type { Address } from 'domain/entities';

export type CreateSavedAddressApiRequest = {
  customerId: string;
  address: Address;
};

export type CreateSavedAddressApiResponse = {
  addressId: string;
}

export const createSavedAddress = async (request: CreateSavedAddressApiRequest) : Promise<CreateSavedAddressApiResponse> => {

  return new Promise((resolve) => {

    setTimeout(() => resolve(request.address), 2500);
  });
};
