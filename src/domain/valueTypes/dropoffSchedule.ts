import type { PickupTimeSlot } from './pickupOption';

export type DropoffSchedule = {
  label: string;
  description: string;
  cost: number;
  dropoffDate?: Date;
  dropoffTimeSlot?: PickupTimeSlot;
};
