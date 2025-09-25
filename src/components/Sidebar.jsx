const icons = [
  { href: "https://github.com/Parvgheewala", icon: "🐱" },
  { href: "https://www.linkedin.com/in/parv-gheewala-24b8b126b/", icon: "🔗" },
  { href: "mailto:gheewalaparv@gmail.com", icon: "✉️" },
  { href: "https://www.instagram.com/its.parvg/", icon: "📸" },
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
