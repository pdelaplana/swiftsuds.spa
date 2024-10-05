import type { OperatingHours } from '@domain/valueTypes/operatingHours';

import type { Address } from './address';

export interface Shop {
  id: string;
  name: string;
  description: string;
  averageRating: number;
  totalRatingsCount: number;
  logoUrl: string;
  website: string;
  phone: string;
  email: string;
  operatingHours: OperatingHours[];
  address: Address;
}
