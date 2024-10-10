import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, children, ...props }, ref) => {
    let style: React.CSSProperties = {};

    switch (variant) {
      case "icon-arrow-primary":
        style = { backgroundColor: "blue", color: "white" };
        break;
      case "icon-arrow-secondary":
        style = { backgroundColor: "gray", color: "black" };
        break;
      case "primary":
        style = { backgroundColor: "blue", color: "white" };
        break;
      case "secondary":
        style = { backgroundColor: "gray", color: "black" };
        break;
    }

    return (
      <button ref={ref} {...props} style={style}>
        {(variant === "icon-arrow-primary" ||
          variant === "icon-arrow-secondary") && <span>&rarr;</span>}
        {children}
      </button>
    );
  },
);

export default Button;
