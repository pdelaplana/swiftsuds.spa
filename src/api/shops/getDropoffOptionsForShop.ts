import { fakeDropoffOptions } from 'data/fakeDropoffOptions';
import type { ScheduleOption } from 'domain/valueTypes/pickupOption';


export const getDropoffOptionsForShop  = async (shopId: string): Promise<ScheduleOption[]> => {

    return new Promise((resolve)=> {
      setTimeout(()=>{
        resolve(fakeDropoffOptions);
      },2500);

    });
};
