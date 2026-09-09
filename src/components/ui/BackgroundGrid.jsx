// Engineered background replacing the old GIF + heavy overlay.
// Subtle grid + radial glow + faint noise, fixed behind all content.
const BackgroundGrid = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />
    <div className="absolute left-1/2 top-[-10%] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
    <div className="absolute inset-0 bg-grid-fade" />
    <div className="noise-overlay absolute inset-0" />
  </div>
);

export default BackgroundGrid;
