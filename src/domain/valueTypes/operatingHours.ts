
export type dayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

export interface OperatingHours {
  day: dayOfWeek;
  isOpen: boolean;
  openAt?: string;
  closeAt?: string;
}
