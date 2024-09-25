import type { ScheduleOption } from 'domain/valueTypes/pickupOption';

import { fakeTimeSlots } from './fakeTimeSlots';

export const fakeDropoffOptions: ScheduleOption[] = [
  {
    service: 'None',
    label: 'No Return Required',
    description: 'I will pickup my order',
    window: 0,
    cost: 0
  },

  {
    service: 'Later',
    label: 'Return Later',
    description: 'Schedule a return for another day',
    window: 0,
    cost: 50.00,
    timeSlots: fakeTimeSlots
  }];
