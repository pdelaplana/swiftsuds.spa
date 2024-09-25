import { fakeTimeSlots } from 'data/fakeTimeSlots';
import type { TimeSlot } from 'domain/valueTypes';

export const getTimeSlots = async (shopId: string): Promise<TimeSlot[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeTimeSlots);
        }, 2500);
    });
};
