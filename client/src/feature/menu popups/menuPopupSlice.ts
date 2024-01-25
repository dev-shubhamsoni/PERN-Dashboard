import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuCategory {
  clientPopup?: boolean;
  products?: boolean;
  customers?: boolean;
  transactions?: boolean;
  geography?: boolean;
  salesPopup?: boolean;
  overview?: boolean;
  daily?: boolean;
  monthly?: boolean;
  breakdown?: boolean;
  managementPopup?: boolean;
  admin?: boolean;
  performance?: boolean;
  id?:string;
}

export interface MenuPopupState {
  client: MenuCategory;
  sales: MenuCategory;
  management: MenuCategory;
  userId: MenuCategory;

}

interface PopupPayload {
  client?: boolean;
  sales?: boolean;
  management?: boolean;
  
}

const initialState: MenuPopupState = {
  client: {
    clientPopup: false,
    products: false,
    customers: false,
    transactions: false,
    geography: false,
  },

  sales: {
    salesPopup: false,
    overview: false,
    daily: false,
    monthly: false,
    breakdown: false,
  },

  management: {
    managementPopup: false,
    admin: false,
    performance: false,
  },

  userId: {
    id: "63701cc1f03239b7f700000e"
  }
};

const menuPopupSlice = createSlice({
  name: "menuPopup",
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<PopupPayload>) => {
      const key: string = Object.keys(action.payload)[0];
      const value: boolean = action.payload[key] as boolean;

      for (const category in state) {
        if (Object.hasOwnProperty.call(state[category], key)) {
          (state[category] as Record<string, boolean>)[key] = value;
          return;
        }
      }
    },
    
    
  },
});

export const { openPopup } = menuPopupSlice.actions;
export default menuPopupSlice.reducer;
