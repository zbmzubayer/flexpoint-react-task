import { configureStore } from "@reduxjs/toolkit";

import PricingSlice from "@/redux/features/pricing/pricingSlice";

export const store = configureStore({
  reducer: {
    pricing: PricingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
