import type { PickupOption } from 'domain/valueTypes/pickupOption';

export const usePickupOptions = () : PickupOption[] => {

  return [
    {
      ServiceLevel: 'Express',
      Description: 'Estimated pickup in the next 30 minutes',
      PickupTimeRequested: 'Now',
      PickupTimeWindow: 30,
      Cost: 150.00
    },
    {
      ServiceLevel: 'Standard',
      Description: 'Estimated pickup in 1 to 2 hours',
      PickupTimeRequested: 'Now',
      PickupTimeWindow: 60,
      Cost: 50.00
    },
    {
      ServiceLevel: 'Later',
      Description: 'Schedule a pickup for later today',
      PickupTimeRequested: 9,
      PickupTimeWindow: 120,
      Cost: 50.00,
      PreferredPickupSchedule: [
        {
          day: 'Today',
          timeRange: '9m to 12pm'
        },
        {
          day: 'Today',
          timeRange: '12pm to 3pm'
        },
        {
          day: 'Today',
          timeRange: '3pm to 6pm'
        },

      ]
    },

  ];
};
