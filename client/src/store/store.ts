import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import menuPopupReducer from "../feature/menu popups/menuPopupSlice";
import allDataSlice from "../feature/userData/allDataSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../api/apiSlice";

export interface RootState {
  menuPopup: ReturnType<typeof menuPopupReducer>;
}

const store: EnhancedStore<RootState> = configureStore({
  reducer: {
    menuPopup: menuPopupReducer,
    allData: allDataSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware:(getDefault) => getDefault().concat(api.middleware),
});
setupListeners(store.dispatch);

export default store;
