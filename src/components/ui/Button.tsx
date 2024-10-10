import * as React from "react";

import { cn } from "@/lib/cn";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => (
  <button
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm text-white transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
  </button>
));

Button.displayName = "Button";

export { Button };
