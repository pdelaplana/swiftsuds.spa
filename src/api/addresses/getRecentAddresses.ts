import { fakeAddresses } from 'data/fakeAddresses';
import type { Address } from 'domain/entities';

export const getRecentAddresses = async (): Promise<Address[]> => {

  return new Promise((resolve)=> {
    setTimeout(()=>{
      resolve(fakeAddresses.slice(0,3));
    },2500);

  });
};
