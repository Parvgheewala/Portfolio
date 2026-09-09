// Phase 2 — resume-driven "Selected Projects" content.
// Each project is treated as an engineering case study: problem, architecture,
// engineering decisions, and measured results — not just a description + stack.
export const projects = [
  {
    title: "InvestRight",
    category: "FinTech / Data Platform",
    duration: "Aug 2025 – Sept 2025",
    description:
      "A mutual fund analytics platform serving 14,000+ funds with 21M+ NAV records, updated daily through a distributed scheduler and served through an optimized FastAPI backend.",
    architecture: "Scheduler → PostgreSQL → ML Engine",
    flow: ["Market Data", "Distributed Scheduler", "PostgreSQL", "ML Engine", "Recommendations"],
    problem:
      "Mutual fund data changes daily at large volume, and personalized recommendations need to stay fast even as the dataset and user base grow.",
    challenges: [
      "Keeping 21M+ NAV records fresh via a distributed scheduler processing 14K+ daily updates.",
      "Serving ML-driven recommendations without regressing API latency as data volume grew.",
      "Indexing and caching strategy for a large, frequently-updated financial dataset.",
    ],
    implementation: [
      "Built a distributed scheduler to ingest and update 14,000+ mutual funds and 21M+ NAV records.",
      "Implemented a recommendation engine using Random Forest, Gradient Boosting, and K-Means, with periodic retraining.",
      "Optimized FastAPI with PostgreSQL indexing and Redis caching.",
    ],
    results: ["40% latency reduction (850ms → 510ms)", "21M+ NAV records maintained", "14K+ daily data updates"],
    metrics: [
      { value: "14K+", label: "Mutual funds" },
      { value: "21M+", label: "NAV records" },
      { value: "40%", label: "Latency reduction" },
    ],
    technologies: ["React", "Vite", "FastAPI", "PostgreSQL", "Redis", "scikit-learn", "Docker"],
    // Resume lists a "GitHub" link but no resolvable URL was provided in the
    // source material — omitted rather than guessed, per content policy.
    github: null,
    live: null,
  },
  {
    title: "Cronify",
    category: "Distributed Systems",
    duration: "Feb 2024 – May 2024",
    description:
      "A fault-tolerant distributed task scheduler built on Redis Streams, designed for reliable delivery at scale with observability built in from the start.",
    architecture: "Producer → Redis Streams → Workers → Retry/Backoff → DLQ → Observability",
    flow: ["Producer", "Redis Streams", "Workers", "Retry / Backoff", "DLQ", "Observability"],
    problem:
      "Background job systems need to survive worker failures and network hiccups without silently dropping jobs or duplicating side effects.",
    challenges: [
      "Guaranteeing delivery under failure without blocking throughput for 1,000+ concurrent jobs.",
      "Designing retry behavior that recovers from transient failures without amplifying load.",
      "Authenticating job callbacks safely across service boundaries.",
    ],
    implementation: [
      "Built a distributed scheduler on Redis Streams with exponential backoff for retries.",
      "Authenticated callbacks with HMAC-SHA256 signatures.",
      "Routed permanently failed jobs to a dead-letter queue and instrumented the pipeline with Prometheus/Grafana.",
    ],
    results: ["99.8% delivery success", "1,000+ concurrent jobs supported", "Sub-500ms scheduling latency"],
    metrics: [
      { value: "99.8%", label: "Delivery success" },
      { value: "1,000+", label: "Concurrent jobs" },
      { value: "<500ms", label: "Latency" },
    ],
    technologies: ["FastAPI", "Redis Streams", "PostgreSQL", "Docker", "Next.js", "Prometheus", "Grafana"],
    github: null,
    live: null,
  },
  {
    title: "AI Customer Support Chatbot",
    category: "AI Infrastructure / RAG",
    duration: "Oct 2025",
    description:
      "A retrieval-augmented support chatbot over a 500+ document knowledge base, built for fast, cost-efficient query resolution rather than as a generic chat demo.",
    architecture: "Query → Embedding → Vector Search → Retrieval → LLM → Response",
    flow: ["Query", "Embedding", "Vector Search", "Retrieval", "LLM", "Response"],
    problem:
      "Support queries over a large document base were slow to resolve, and raw LLM calls for every query were expensive to run continuously.",
    challenges: [
      "Cutting query resolution time from 30s to 3s without sacrificing answer quality.",
      "Reducing LLM API cost while maintaining uptime and response quality.",
      "Keeping semantic search accurate over 500+ documents.",
    ],
    implementation: [
      "Built a RAG pipeline using Sentence-BERT embeddings and Pinecone vector search over TinyLlama-1.1B.",
      "Added semantic caching with Pinecone to avoid redundant LLM calls.",
      "Served the pipeline through FastAPI with a React front end.",
    ],
    results: ["30s → 3s query resolution", "40% LLM API cost reduction", "99.5% uptime"],
    metrics: [
      { value: "30s→3s", label: "Query resolution" },
      { value: "40%", label: "LLM cost reduction" },
      { value: "99.5%", label: "Uptime" },
    ],
    technologies: ["TinyLlama-1.1B", "Sentence-BERT", "FastAPI", "Pinecone", "LangChain", "React", "Docker"],
    github: null,
    live: null,
  },
];
