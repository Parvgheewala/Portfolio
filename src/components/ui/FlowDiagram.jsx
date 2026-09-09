import { ArrowRight } from "lucide-react";

// Clean, minimal visual explanation of a system's data flow.
// Wraps on small screens; no invented architectural detail beyond `steps`.
const FlowDiagram = ({ steps = [] }) => (
  <div className="flex flex-wrap items-center gap-2" role="img" aria-label={`Flow: ${steps.join(" to ")}`}>
    {steps.map((step, i) => (
      <div key={step} className="flex items-center gap-2">
        <span className="rounded-lg border border-border bg-bg-elevated px-3 py-1.5 font-mono text-xs text-ink-secondary">
          {step}
        </span>
        {i < steps.length - 1 && <ArrowRight size={14} className="shrink-0 text-ink-muted" aria-hidden="true" />}
      </div>
    ))}
  </div>
);

export default FlowDiagram;
