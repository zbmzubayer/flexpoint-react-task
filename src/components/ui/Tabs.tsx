import React, { useState, ReactNode } from "react";

import { cn } from "@/lib/cn";

interface TabItem {
  label: ReactNode;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, className }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={cn("flex w-full flex-col items-center", className)}>
      <div className="flex items-center gap-3">
        {tabs.map((tab, index) => (
          <>
            <button
              key={index}
              className={cn(
                "inline-flex items-center justify-center whitespace-nowrap border-b-2 border-transparent py-1 text-[#49687e]",
                index === activeTab &&
                  "border-b-primary font-semibold text-primary",
              )}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </button>
            {index !== tabs.length - 1 && (
              <div className="h-8 w-[0.2px] bg-neutral-300" />
            )}
          </>
        ))}
      </div>
      <div className="w-full p-4">{tabs[activeTab].content}</div>
    </div>
  );
};
