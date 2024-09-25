import { fakeAddresses } from 'data/fakeAddresses';
import type { Address } from 'domain/entities';

export const getAddressByLabel = async (label: string): Promise<Address[]> => {

  return new Promise((resolve)=> {
    setTimeout(()=>{
      resolve(fakeAddresses.filter(a => a.label === label));
    },2500);

  });
};
