import { cn } from "../../lib/utils";

const GlassCard = ({ className, children, hover = true, ...props }) => (
  <div
    className={cn(
      "rounded-xl border border-border bg-surface/60 backdrop-blur-sm",
      hover && "transition-colors duration-300 hover:border-border-strong hover:bg-surface-hover/80",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

export default GlassCard;
