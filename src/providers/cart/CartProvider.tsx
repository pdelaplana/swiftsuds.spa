import React, {  useContext, useEffect, useReducer } from 'react';

import type { CartAction, CartOrder  } from 'providers/cart/cartTypes';

import type { CartState} from './CartContext';
import { CartContext, initialCartState } from './CartContext';


function cartReducer(state: CartState, action: CartAction): CartState {

  switch (action.type) {
    case 'ADD_ORDER':
      return { ...state, orders: [ ...state.orders, action.payload ]};
    case 'UPDATE_ORDER':
      return {
        ...state,
        orders: state.orders.map(
          order =>
            order.id === action.payload.id
            ? action.payload
            : order
        )
      };
    case 'REMOVE_ORDER':
        return { ...state, orders: state.orders.filter(order => order.id !== action.payload.id ) };
    case 'ADD_ORDER_ITEM':
      return {
        ...state,
        orders: state.orders.map(
          order =>
            order.id === action.payload.orderId
            ? { ...order, items: [ ...order.items, action.payload ] }
            : order
        )
      };
    case 'REMOVE_ORDER_ITEM':
      return {
        ...state,
        orders: state.orders.map(
          order =>
            order.id === action.payload.orderId
            ? { ...order, items: order.items.filter(item => item.name !== action.payload.name) }
            : order
        )
      };
    case 'CLEAR_CART':
      return { ...state, orders: [] };
    case 'UPDATE_ORDER_ITEM':
      return {
        ...state,
        orders: state.orders.map(
          order =>
            order.id === action.payload.orderId
            ? { ...order,
                items: order.items.map(item =>
                  item.name  === action.payload.name
                  ? action.payload
                  : item )
              }
            : order
        )
      };
    default:
      return state;
  }
};

interface CartProviderProps {
	children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({children}) =>{
  const [state, dispatch] = useReducer(cartReducer, initialCartState, () => {
    const localData = localStorage.getItem('cart');
    return localData ? JSON.parse(localData) : initialCartState;
  });

  const getOrder = (orderId: string) => {
    return state.orders.find(order => order.id === orderId) ?? null;
  };
  const getCurrentOrder = (shopId: string, shopName?:string) => {
    return state.orders.find(order => order.shopId === shopId) ?? null;
  };


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  },[state]);

  return (
    <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch, getOrder, getCurrentOrder}}>
      {children}
    </CartContext.Provider>
  );

};


export const useCart = (): {
  cartState: CartState;
  cartDispatch: React.Dispatch<CartAction>,
  getOrder: (orderId: string) => CartOrder,
  getCurrentOrder: (shopId: string, shopName?: string) => CartOrder } => useContext(CartContext);



