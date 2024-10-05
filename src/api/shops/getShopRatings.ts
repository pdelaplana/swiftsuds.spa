import type { Rating } from '@domain/entities/rating';
import { fakeRatings } from 'data/fakeRatings';

export const getShopRatings = async (shopId: string): Promise<Rating[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeRatings);
        }, 2500);
    });
};
