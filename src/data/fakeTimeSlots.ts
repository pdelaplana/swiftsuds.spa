import type { TimeSlot } from 'domain/valueTypes';

export const fakeTimeSlots: TimeSlot[] = [
  {
    key: '9am',
    label: 'between 9am to 12pm',
    start: 9,
    end: 12
  },
  {
    key: '12pm',
    label: 'between 12pm to 3pm',
    start: 12,
    end: 15
  },
  {
    key: '3pm',
    label: 'between 3pm to 6pm',
    start: 15,
    end: 18
  },
];
