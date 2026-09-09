import { cn } from "../../lib/utils";

const Badge = ({ className, children }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-md border border-border bg-bg-elevated px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-ink-secondary",
      className
    )}
  >
    {children}
  </span>
);

export default Badge;
