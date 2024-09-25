export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  maxQuantityPerOrder: number;
  tags: string[];
  sequence: number;
}
