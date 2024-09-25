import type { ServiceItem } from 'domain/entities/serviceItem';


export const getShopServices  = async (shopId: string): Promise<ServiceItem[]> => {

    return new Promise((resolve)=> {

      setTimeout(()=>{
        resolve([
          {
            id: 'wash',
            name: 'Wash and Dry (max 8 kilos)',
            description: 'For everyday laundry, including bedsheets and towels',
            price: 75.0,
            quantity: 1,
            maxQuantityPerOrder: 5,
            sequence: 1,
            tags: ['Wash', 'Tumble Dry', 'In a Bag', 'Folded'],
          },
          {
            id: 'washandiron',
            name: 'Wash and Iron (max 8 kilos)',
            description: '',
            price: 75.0,
            quantity: 1,
            maxQuantityPerOrder: 5,
            sequence: 2,
            tags: ['Wash', 'Tumble Dry', 'In a Bag', 'Ironed'],
          },
          {
            id: 'iron',
            name: 'Iron Only (max 8 kilos)',
            description: '',
            price: 30.0,
            quantity: 1,
            maxQuantityPerOrder: 3,
            sequence: 3,
            tags: ['Ironed', 'In a Bag'],
          },
          {
            id: 'drycleaning',
            name: 'Dry Cleaning',
            description: '',
            price: 30.0,
            quantity: 1,
            maxQuantityPerOrder: 1,
            sequence: 4,
            tags: ['Dry Cleaned', 'In a Bag'],
          },
          {
            id: 'ironing',
            name: 'Ironing',
            description: '',
            price: 30.0,
            quantity: 1,
            maxQuantityPerOrder: 1,
            sequence: 5,
            tags: ['Ironed', 'In a Bag'],
          },
          {
            id: 'stain',
            name: 'Stain Removal',
            description: '',
            price: 30.0,
            quantity: 1,
            maxQuantityPerOrder: 1,
            sequence: 6,
            tags: ['In a Bag'],
          },
        ]);
      },2500);

    });
};
