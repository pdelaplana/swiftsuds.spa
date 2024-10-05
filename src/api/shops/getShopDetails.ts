import { fakeShops } from 'data/fakeShops';
import type { Shop } from 'domain/entities/shop';

export const getShopDetails  = async (shopId:string): Promise<Shop> => {

    return new Promise((resolve)=> {

      setTimeout(()=>{
        resolve(fakeShops.find(shop => shop.id === shopId));
      },2500);

    });
};
