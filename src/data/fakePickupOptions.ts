import type { PickupOption } from 'domain/valueTypes/pickupOption';

import { fakeTimeSlots } from './fakeTimeSlots';

export const fakePickupOptions: PickupOption[] = [
  {
    service: 'Express',
    label: 'Express',
    description: 'Estimated pickup in the next 30 minutes',
    pickupWindow: 30,
    cost: 150.00
  },
  {
    service: 'Standard',
    label: 'Standard',
    description: 'Estimated pickup in 1 to 2 hours',
    pickupWindow: 120,
    cost: 50.00
  },
  {
    service: 'Later',
    label: 'Pickup Later',
    description: 'Schedule a pickup for later today',
    pickupWindow: 180,
    cost: 50.00,
    pickupTimeSlots: fakeTimeSlots
  }];
