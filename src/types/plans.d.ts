export interface PlanDetails {
  price: string;
  price_postfix: string;
  plan_type: string;
  plan_info: string;
  dd_text: string;
  btn_text: string;
  price_id: string;
}

export interface Plan {
  name: string;
  price: string;
  title: string;
  text: string;
  details: {
    "1_year": PlanDetails;
    "2_year": PlanDetails;
  };
}

export interface PlansInfo {
  title: string;
  sub_title: string;
  discount: string;
}

export interface Feature {
  is_pro: string;
  feature_title: string;
  feature_desc: string;
}

export interface PricingData {
  plans: Plan[];
  plansInfo: {
    "1_year": PlansInfo;
    "2_year": PlansInfo;
  };
  features: Feature[];
}
