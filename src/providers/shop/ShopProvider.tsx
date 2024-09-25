import React, { useContext, useMemo, useReducer } from 'react';

import type { ShopState } from './ShopContext';
import { initialState, ShopContext } from './ShopContext';



export type ShopAction =
  | { type: 'SET_SHOP_ID'; shopId: string; shopName?: string }
  | { type: 'CLEAR_SHOP_ID' };


function shopReducer(state: ShopState, action: ShopAction): ShopState {
  switch (action.type) {
    case 'SET_SHOP_ID':
      return { ...state, shopId: action.shopId, shopName: action.shopName };
      case 'CLEAR_SHOP_ID':
        return { ...state, shopId: '', shopName: '' };
    default:
      return state;
  }
}

interface ShopProviderProps {
	children: React.ReactNode;
}

// Define the context provider
export const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);


  const setShopId = (shopId: string, shopName: string) => {
    dispatch({ type: 'SET_SHOP_ID', shopId, shopName });
  };

  const clearShopId = () => {
    dispatch({ type: 'CLEAR_SHOP_ID' });
  };

  const contextValue = useMemo(() => {
    return { shopState: state, setShopId, clearShopId };
  },[state]);


  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

// Custom hook to use the ShopContext
export const useShop = (): {
  shopState: ShopState;
  setShopId: (shopId: string, shopName: string) => void;
  clearShopId: () => void } => useContext(ShopContext);
