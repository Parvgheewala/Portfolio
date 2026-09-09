// Phase 2 — full resume-driven experience history.
// Impact metrics are surfaced separately from narrative bullets so the UI
// can emphasize outcomes before generic responsibility descriptions.
export const experiences = [
  {
    company: "AI4Bharat",
    role: "Full-Stack Development Intern",
    duration: "Jan 2026 – Jun 2026",
    summary:
      "Built scalable multilingual production systems for low-resource language AI, extending platform support to new languages and modernizing the backend's serving architecture.",
    metrics: [],
    bullets: [
      "Implemented Thai and Indonesian multilingual support across chat, TTS, and ASR.",
      "Migrated the backend from WSGI to a hybrid ASGI–WSGI architecture.",
      "Built scalable multilingual production systems for low-resource language AI.",
    ],
    technologies: ["Python", "ASGI/WSGI", "Multilingual AI", "TTS", "ASR"],
  },
  {
    company: "BloomSocialAI",
    role: "Software Development Intern",
    duration: "Apr 2026 – May 2026",
    summary:
      "Built core product features and load-tested backend services to hold consistent low latency under real concurrent load.",
    metrics: [
      { value: "5K+", label: "Concurrency" },
      { value: "<20ms", label: "Avg latency" },
    ],
    bullets: [
      "Built core product features and a hashtag recommendation system for the BloomSocialAI UI, supporting 100+ paid users.",
      "Load-tested backend services, achieving 5K+ concurrency with sub-20ms average latency.",
      "Used caching and efficient API design to maintain consistent low-latency performance under scale.",
    ],
    technologies: ["FastAPI", "Caching", "API Design", "Load Testing"],
  },
  {
    company: "Code Space Techlabs",
    role: "Full-Stack Developer Intern",
    duration: "Aug 2025 – Dec 2025",
    summary:
      "Optimized backend services and API latency at scale, and shipped responsive dashboards with measurable load-time gains.",
    metrics: [
      { value: "60%", label: "API latency reduction" },
      { value: "40K+", label: "Daily requests" },
      { value: "45%", label: "Faster initial load" },
    ],
    bullets: [
      "Optimized Node.js/FastAPI services with Redis caching and PostgreSQL indexing, reducing API latency by 60% for 40K+ daily requests.",
      "Built responsive React dashboards with lazy loading, improving initial load time by 45% and Core Web Vitals scores.",
    ],
    technologies: ["Node.js", "FastAPI", "Redis", "PostgreSQL", "React"],
  },
  {
    company: "FameUX",
    role: "Frontend Developer Intern",
    duration: "Jun 2024 – Jul 2024",
    summary: "Reduced page load times through lazy loading and bundle optimization.",
    metrics: [{ value: "38%", label: "Bundle size reduction" }],
    bullets: ["Reduced page load times using lazy loading and bundle optimization, cutting bundle size by 38%."],
    technologies: ["React", "Bundle Optimization"],
  },
];
