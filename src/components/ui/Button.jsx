import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const variants = {
  primary:
    "bg-ink text-bg hover:bg-white/90 shadow-soft",
  secondary:
    "bg-surface text-ink border border-border hover:border-border-strong hover:bg-surface-hover",
  ghost: "text-ink-secondary hover:text-ink hover:bg-surface",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  sm: "h-9 px-4 text-sm",
};

const Button = forwardRef(
  ({ as: Tag = "button", variant = "primary", size = "md", className, children, ...props }, ref) => (
    <Tag
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 active:scale-[0.98] focus-visible:outline-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
);

Button.displayName = "Button";
export default Button;
