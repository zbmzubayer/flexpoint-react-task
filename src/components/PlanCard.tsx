import { useState } from "react";

import { cn } from "@/lib/cn";
import { Feature, Plan } from "@/types/plans";
import { getPlanColors } from "@/utils/getPlanColors";

import { InfoIcon } from "@/components/icons/InfoIcon";
import { PlanDropdown } from "@/components/PlanDropdown";
import { Button } from "@/components/ui/Button";
import { Tooltip } from "@/components/ui/Tooltip";

import FeatureList from "./FeatureList";

interface PlanCardProps {
  type: "monthly" | "yearly";
  plans: Plan[];
  features: Feature[];
}

export default function PlanCard({ type, plans, features }: PlanCardProps) {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const selectedPlan = plans[selectedPlanIndex];
  const { name, text, details, title } = selectedPlan;
  const monthPrice = details["1_year"].price;
  const yearPrice = details["2_year"].price;
  const price = type === "monthly" ? monthPrice : yearPrice;

  const subtitle =
    name === "Free" ? "Free includes:" : "Everything in free plus:";
  const { planColorPrimary, planColorSecondary } = getPlanColors(name);

  const buttonHoverColor = `btn-${name.toLocaleLowerCase()}`;

  const handleDropdownChange = (value: string) => {
    setSelectedPlanIndex(Number(value));
  };

  return (
    <div
      style={{ borderTopColor: planColorPrimary }}
      className="relative flex flex-col justify-between gap-2 rounded-lg border border-t-8 border-[#eaeff2] px-5 py-6"
    >
      <div>
        {name === "Pro" && (
          <div className="absolute right-1.5 top-1.5 rounded-[3px] bg-pro-plan-primary px-2 py-[6.5px] text-xs font-medium text-white">
            Most Popular
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="text-lg text-muted-dark">{name}</div>
        </div>
        <div className="relative flex items-baseline gap-2">
          <div
            style={{ color: planColorPrimary }}
            className="mb-1 py-2.5 text-[32px] font-semibold leading-6"
          >
            {price}
          </div>
          <div>
            {price === "Free" || (
              <div>
                {type === "yearly" && (
                  <div className="absolute top-1.5 text-xs text-[#ff424d] line-through">
                    {monthPrice}/Month
                  </div>
                )}
                <div className="text-sm text-muted-light">/Month</div>
              </div>
            )}
          </div>
        </div>

        {plans.length > 1 ? (
          <div className="inline-flex items-center justify-center gap-2 text-[12.5px]">
            <PlanDropdown
              options={plans.map((plan, index) => ({
                value: String(index),
                label: plan.title,
              }))}
              selectedValue={String(selectedPlanIndex)}
              onChange={handleDropdownChange}
              color={{
                primary: planColorPrimary,
                secondary: planColorSecondary,
              }}
            />

            <Tooltip
              tooltipContent={text}
              contentClassName="-translate-x-[90%] w-[220px]"
              arrowPosition="end"
            >
              <InfoIcon
                className="cursor-pointer"
                style={{ color: planColorPrimary }}
              />
            </Tooltip>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: planColorSecondary,
              color: planColorPrimary,
            }}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-[15px] py-[5px] text-[12.5px] leading-6"
          >
            <div dangerouslySetInnerHTML={{ __html: title }} />
            <Tooltip
              tooltipContent={text}
              contentClassName="-translate-x-[90%] w-[220px]"
              arrowPosition="end"
            >
              <InfoIcon className="cursor-pointer" />
            </Tooltip>
          </div>
        )}
        <div className="pt-[18px] text-muted-dark">
          <div className="py-2 font-medium">{subtitle}</div>
          <ul className="text-sm leading-[14px]">
            {name !== "Free" && (
              <div
                className="cursor-pointer py-2.5 [&_strong]:font-normal"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {features.map((feature, index) => (
              <FeatureList key={index} feature={feature} planName={name} />
            ))}
          </ul>
        </div>
      </div>
      <Button
        style={{ backgroundColor: planColorPrimary }}
        className={cn(
          "w-full rounded-lg text-base transition-all duration-300",
          buttonHoverColor,
        )}
      >
        Select Plan
      </Button>
    </div>
  );
}
