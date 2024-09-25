import type { Shop } from 'domain/entities/shop';


export const getFavoriteShops  = async (): Promise<Shop[]> => {

    return new Promise((resolve)=> {

      setTimeout(()=>{
        resolve([{
          id: '99ec24e2-479b-438e-8f0c-cafcf02b6be1',
          name: 'Quickwash Laundry',
          description: 'A laundry shop',
          rating: 4.5,
          logoUrl: '',
          city:'Lagro, Quezon City'
        }]);
      },2500);

    });
};
