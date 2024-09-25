import { fakeAddresses } from 'data/fakeAddresses';
import type { Address } from 'domain/entities';

export const getAddresses = async (): Promise<Address[]> => {

  return new Promise((resolve)=> {
    setTimeout(()=>{
      resolve(fakeAddresses);
    },2500);

  });
};
