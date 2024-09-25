import { createContext } from 'react';

import type { CartAction, CartOrder } from 'providers/cart/cartTypes';


export type CartState = {
  orders: CartOrder[];
};


export const initialCartState: CartState = {
  orders: []
};


export const CartContext = createContext<{
  cartState: CartState;
  cartDispatch: React.Dispatch<CartAction>;
  getOrder: (orderId:string) => CartOrder;
  getCurrentOrder: (shopId?: string, shopName?:string) => CartOrder;
}>({
  cartState: initialCartState,
  cartDispatch: () => undefined, // Placeholder function
  getOrder: (orderId: string) => undefined, // Placeholder function
  getCurrentOrder: (shopId?: string, shopName?:string) => undefined // Placeholder function
});


