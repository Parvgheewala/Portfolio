const Metric = ({ label, value }) => (
  <div className="flex flex-col gap-1">
    <span className="font-mono text-lg font-semibold text-ink">{value}</span>
    <span className="text-xs text-ink-muted">{label}</span>
  </div>
);

export default Metric;
