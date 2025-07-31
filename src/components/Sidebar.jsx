const icons = [
  { href: "https://github.com", icon: "🐱" },
  { href: "https://linkedin.com", icon: "🔗" },
  { href: "mailto:test@example.com", icon: "✉️" },
  { href: "https://twitter.com", icon: "🐦" },
  { href: "https://instagram.com", icon: "📸" },
];

const Sidebar = () => (
  <div className="fixed top-1/2 left-4 -translate-y-1/2 flex flex-col gap-4 z-50">
    {icons.map((item, index) => (
      <a
        key={index}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black/60 p-3 rounded-full hover:bg-white/10"
      >
        <span className="text-xl">{item.icon}</span>
      </a>
    ))}
  </div>
);
export default Sidebar;
