import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const IconButton = forwardRef(({ as: Tag = "button", className, children, label, ...props }, ref) => (
  <Tag
    ref={ref}
    aria-label={label}
    className={cn(
      "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-ink-secondary transition-all duration-200 hover:border-border-strong hover:text-ink hover:bg-surface-hover focus-visible:outline-none",
      className
    )}
    {...props}
  >
    {children}
  </Tag>
));

IconButton.displayName = "IconButton";
export default IconButton;
