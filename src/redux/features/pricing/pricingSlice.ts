import { createSlice } from "@reduxjs/toolkit";

import { PricingData } from "@/types/plans";
import pricingData from "@/data/pricing.json";

const initialState: PricingData = {
  plans: pricingData.plans,
  plansInfo: pricingData.plansInfo,
  features: pricingData.features,
};

const pricingSlice = createSlice({
  name: "pricing",
  initialState,
  reducers: {},
});

export default pricingSlice.reducer;
