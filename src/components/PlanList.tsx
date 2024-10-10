import { useAppSelector } from "@/redux/hook";

import { Plan } from "@/types/plans";

import PlanCard from "./PlanCard";

interface PlanListProps {
  type: "monthly" | "yearly";
}

export default function PlanList({ type }: PlanListProps) {
  const { plans, features } = useAppSelector((state) => state.pricing);

  const groupPlansByName = (plans: Plan[]): Record<string, Plan[]> => {
    return plans.reduce(
      (acc, plan) => {
        if (!acc[plan.name]) {
          acc[plan.name] = [];
        }
        acc[plan.name].push(plan);
        return acc;
      },
      {} as Record<string, Plan[]>,
    );
  };

  const groupedPlans = groupPlansByName(plans);

  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 2lg:grid-cols-4">
      {Object.entries(groupedPlans).map(([name, plans]) => (
        <PlanCard type={type} key={name} plans={plans} features={features} />
      ))}
    </div>
  );
}
