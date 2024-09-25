import { createContext } from "react";

// Define the structure of the shop context state
export interface ShopState {
  shopId: string;
  shopName?: string;
}

export const initialState: ShopState = {
  shopId: '',
  shopName: ''
};

// Create a context with default undefined value
export const ShopContext = createContext<{
  shopState: ShopState,
  setShopId: (shopId: string, shopName: string) => void,
  clearShopId: () => void}>({
    shopState: initialState,
    setShopId: () => undefined,
    clearShopId: () => undefined
  } );
