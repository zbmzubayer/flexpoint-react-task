import * as React from "react";

import { cn } from "@/lib/cn";

interface TooltipProps extends React.ComponentPropsWithoutRef<"div"> {
  tooltipContent: React.ReactNode;
  arrowPosition?: "start" | "center" | "end";
  contentClassName?: string;
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      tooltipContent,
      contentClassName,
      arrowPosition = "center",
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const [isVisible, setIsVisible] = React.useState(false);

    return (
      <div
        className={cn("relative inline-block", className)}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        ref={ref}
        {...props}
      >
        {children}
        {isVisible && (
          <div
            className={cn(
              "absolute bottom-full left-1/2 z-20 mb-2 w-full -translate-x-1/2 transform whitespace-normal break-words rounded bg-white p-2.5 text-sm text-muted-dark shadow-md",
              contentClassName,
            )}
          >
            {tooltipContent}
            <div
              className={cn(
                "absolute top-full h-0 w-0 -translate-x-1/2 border-4 border-transparent border-t-white",
                arrowPosition === "start" && "left-[10%]",
                arrowPosition === "center" && "left-1/2",
                arrowPosition === "end" && "right-[6%]",
              )}
            />
          </div>
        )}
      </div>
    );
  },
);

// interface TooltipContentProps extends React.ComponentPropsWithoutRef<"div"> {
//   children: React.ReactNode;
// }

// const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
//   ({ children, className, ...props }, ref) => {
//     return (
//       <div
//         className={cn("relative inline-block", className)}
//         ref={ref}
//         {...props}
//       >
//         {children}
//       </div>
//     );
//   },
// );

Tooltip.displayName = "Tooltip";

export { Tooltip };
