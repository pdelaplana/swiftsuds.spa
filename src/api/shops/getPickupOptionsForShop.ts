import { fakePickupOptions } from 'data/fakePickupOptions';
import type { PickupOption } from 'domain/valueTypes/pickupOption';


export const getPickupOptionsForShop  = async (shopId: string): Promise<PickupOption[]> => {

    return new Promise((resolve)=> {
      setTimeout(()=>{
        resolve(fakePickupOptions);
      },2500);

    });
};
