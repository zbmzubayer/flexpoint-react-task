import { Feature } from "@/types/plans";

import { Tooltip } from "@/components/ui/Tooltip";

interface FeatureListProps {
  feature: Feature;
  planName: string;
}

export default function FeatureList({ feature, planName }: FeatureListProps) {
  const isFreeFeature = feature.is_pro === "0" && planName === "Free";
  const isProFeature = feature.is_pro === "1" && planName !== "Free";
  if (!isFreeFeature && !isProFeature) return null;

  return (
    <li className="py-2.5">
      <Tooltip
        tooltipContent={
          <div dangerouslySetInnerHTML={{ __html: feature.feature_desc }} />
        }
        arrowPosition="start"
        className="w-full"
      >
        <span className="cursor-pointer">{feature.feature_title}</span>
      </Tooltip>
    </li>
  );
}
