import type { ServiceLevel } from './serviceLevel';
import type { TimeSlot } from './timeSlot';

export type PreferredPickupSchedule = {
  day: 'Today' | 'Tomorrow';
  timeRange: string;
}

export type PickupTimeSlot = {
  key: string;
  label: string;
  start: number;
  end: number;
};


export type PickupSchedule = {
  service: ServiceLevel;
  label: string;
  description: string;
  cost: number;
  pickupDate?: Date;
  pickupTimeSlot?: TimeSlot;
  pickupTimeWindow?: number;
};

export type PickupOption = {
  service : ServiceLevel;
  label: string;
  description: string;
  cost: number;
  pickupWindow: number;
  pickupTimeSlots?: TimeSlot[];
}

export type ScheduleOption = {
  service : ServiceLevel;
  label: string;
  description: string;
  cost: number;
  window: number;
  timeSlots?: TimeSlot[];
}

