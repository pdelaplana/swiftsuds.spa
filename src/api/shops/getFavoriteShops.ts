import { fakeShops } from 'data/fakeShops';
import type { Shop } from 'domain/entities/shop';

export const getFavoriteShops  = async (): Promise<Shop[]> => {

    return new Promise((resolve)=> {

      setTimeout(()=>{
        resolve(fakeShops);
      },2500);

    });
};
