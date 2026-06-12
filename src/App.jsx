import {
  siApachekafka,
  siArgo,
  siDocker,
  siFastapi,
  siGithubactions,
  siGooglecloud,
  siKubernetes,
  siMlflow,
  siNodedotjs,
  siPostgresql,
  siPrometheus,
  siPython,
  siRedis,
  siServerless,
  siSnowflake,
  siTerraform
} from "simple-icons";

const projects = [
  {
    icon: "branch",
    title: "MergeRadar",
    subtitle: "PR Impact Analysis",
    description:
      "Analyzes pull request changes to surface blast-radius risks, affected systems, and verification guidance.",
    tags: ["Python", "Git", "Static Analysis", "LLM-ready"],
    tone: "cyan"
  },
  {
    icon: "pulse",
    title: "Combat Log Analyzer",
    subtitle: "Analytics Platform",
    description:
      "Parses and analyzes WoW combat logs with interactive reports and AI-assisted coaching.",
    tags: ["Python", "FastAPI", "React", "LLM"],
    tone: "green"
  },
  {
    icon: "spark",
    title: "Darkstar",
    subtitle: "Autonomous Second Brain",
    description:
      "Captures thoughts through Discord, organizes them by intent and priority, and surfaces the few items that matter.",
    tags: ["Python", "OpenAI", "Discord", "Obsidian"],
    tone: "purple"
  }
];

const stack = [
  {
    title: "Cloud",
    icon: "cloud",
    items: [
      { label: "AWS", brand: "aws" },
      { label: "GCP", brand: siGooglecloud },
      { label: "Azure", brand: "azure" },
      { label: "Kubernetes", brand: siKubernetes },
      { label: "Serverless", brand: siServerless }
    ]
  },
  {
    title: "Backend",
    icon: "code",
    items: [
      { label: "Python", brand: siPython },
      { label: "REST APIs", icon: "gateway" },
      { label: "Microservices", icon: "nodes" },
      { label: "FastAPI", brand: siFastapi },
      { label: "Node.js", brand: siNodedotjs }
    ]
  },
  {
    title: "Data & ML",
    icon: "database",
    items: [
      { label: "PostgreSQL", brand: siPostgresql },
      { label: "Snowflake", brand: siSnowflake },
      { label: "MLflow", brand: siMlflow },
      { label: "Kafka", brand: siApachekafka },
      { label: "Redis", brand: siRedis }
    ]
  },
  {
    title: "Platform",
    icon: "search",
    items: [
      { label: "Docker", brand: siDocker },
      { label: "Terraform", brand: siTerraform },
      { label: "Argo CD", brand: siArgo },
      { label: "Prometheus", brand: siPrometheus },
      { label: "GitHub Actions", brand: siGithubactions }
    ]
  }
];

const contacts = [
  { icon: "mail", label: "matthewrutkowski@rootkow.com", href: "mailto:matthewrutkowski@rootkow.com" },
  { icon: "github", label: "GitHub", href: "https://github.com/rootkow" }
];

function Icon({ name, size = 22 }) {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    branch: <><circle cx="6" cy="5" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="6" cy="19" r="2" /><path d="M6 7v10M8 9h4a6 6 0 0 0 6-1" /></>,
    braces: <><path d="M8 3H6a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2" /><path d="M16 3h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2" /></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    cloud: <path d="M6.5 19h11a4.5 4.5 0 0 0 .8-8.9A7 7 0 0 0 5 8.5v.2A5.2 5.2 0 0 0 6.5 19Z" />,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
    cube: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4.3 7.7 7.7 4.4 7.7-4.4M12 12v9" /></>,
    database: <><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7" /></>,
    download: <><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" /></>,
    gateway: <><path d="M4 8h16M7 4 3 8l4 4M17 20l4-4-4-4M4 16h16" /></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.2 3 5.4 5.4 0 0 0 19 0s-1.2-.4-4 1.6a13.4 13.4 0 0 0-7 0C5.2-.4 4 0 4 0a5.4 5.4 0 0 0-.2 3A5.8 5.8 0 0 0 2.2 7.1c0 5.8 3.5 7 6.8 7.4A4.8 4.8 0 0 0 8 18v4" /><path d="M8 19c-3 .9-3-1.5-4.2-2" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.01M12 17v-7m0 3a4 4 0 0 1 7 3v1" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    nodes: <><circle cx="12" cy="5" r="3" /><circle cx="5" cy="18" r="3" /><circle cx="19" cy="18" r="3" /><path d="m10 7-3.5 8M14 7l3.5 8M8 18h8" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z" />,
    pulse: <path d="M3 12h4l2.5-6 4 12 2.5-6h5" />,
    satellite: <><path d="m13 7 4 4-6 6-4-4 6-6Z" /><path d="m6 8-3-3 2-2 3 3M18 16l3 3-2 2-3-3M14 4l2-2M4 14l-2 2M12 12l9-9" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
    server: <><rect x="4" y="4" width="16" height="6" rx="1" /><rect x="4" y="14" width="16" height="6" rx="1" /><path d="M8 7h.01M8 17h.01" /></>,
    spark: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
    terminal: <><path d="m4 7 5 5-5 5M11 17h9" /></>
  };

  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  );
}

function BrandIcon({ icon, size = 17 }) {
  if (icon === "aws") {
    return (
      <svg aria-hidden="true" className="brand-icon brand-icon-aws" height={size} viewBox="0 0 24 24" width={size}>
        <text x="1.5" y="14.5">aws</text>
        <path d="M4 17.3c4.6 2.5 10.4 2.5 15 0M16.9 16.8l2.4.1-.7 2.3" />
      </svg>
    );
  }

  if (icon === "azure") {
    return (
      <svg aria-hidden="true" className="brand-icon" height={size} viewBox="0 0 24 24" width={size}>
        <path d="M13.1 2 5.4 8.7 1 16.4h4l8.1-14.4Zm1.2 3.2-4.2 12.1 7.8-.1 4.1 4.8H8.2l6.1-16.8Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="brand-icon"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d={icon.path} />
    </svg>
  );
}

function SectionLabel({ children, tone = "blue" }) {
  return (
    <div className={`section-label ${tone}`}>
      <span>{children}</span>
      <i />
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Portfolio home">
        <Icon name="cloud" size={48} />
        <span>MR</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#projects">Projects</a>
        <a href="#stack">Stack</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a
          className="nav-icon"
          href="https://github.com/rootkow"
          aria-label="GitHub profile"
          rel="noreferrer"
          target="_blank"
        >
          <Icon name="github" size={23} />
        </a>
      </nav>
    </header>
  );
}

function ArchitectureDiagram() {
  const nodes = [
    { icon: "cube", title: "Services", detail: "Modular · Maintainable · Scalable" },
    { icon: "spark", title: "Workers", detail: "Focused · Resilient · Consistent" },
    { icon: "nodes", title: "AI / LLM", detail: "Curious · Adaptive · Intentional" }
  ];

  return (
    <div className="architecture" aria-label="Cloud platform architecture diagram" role="img">
      <div className="arch-cloud">
        <Icon name="cloud" size={116} />
      </div>
      <div className="connector cloud-line" />
      <div className="arch-box gateway">
        <Icon name="gateway" />
        <div><strong>Gateway / API</strong><small>Clear · Reliable · Accessible</small></div>
      </div>
      <div className="connector gateway-line" />
      <div className="arch-branches" />
      <div className="arch-nodes">
        {nodes.map((node) => (
          <div className="arch-box" key={node.title}>
            <Icon name={node.icon} />
            <div><strong>{node.title}</strong><small>{node.detail}</small></div>
          </div>
        ))}
      </div>
      <div className="arch-data-branches" />
      <div className="connector data-line" />
      <div className="arch-box data-box">
        <Icon name="database" />
        <div><strong>Data Layer</strong><small>Structured · Accurate · Dependable</small></div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero content-section" id="about">
      <SectionLabel>INGRESS</SectionLabel>
      <div className="hero-copy">
        <p className="eyebrow">Backend · Cloud · AI/ML Infrastructure</p>
        <h1>Software Engineer</h1>
        <p className="hero-title">Backend · Cloud · AI/ML</p>
        <p className="hero-intro">
          A portfolio showcasing backend systems, cloud-native platforms, and AI/ML
          infrastructure. The work focuses on production-ready services, event-driven systems,
          and Kubernetes platforms across major cloud providers.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects"><Icon name="arrow" />View Projects</a>
        </div>
      </div>
      <ArchitectureDiagram />
    </section>
  );
}

function Projects() {
  return (
    <section className="content-section projects-section" id="projects">
      <SectionLabel>SERVICES</SectionLabel>
      <div className="section-content">
        <div className="section-heading">
          <div><p className="kicker">Selected work</p><h2>Featured Projects</h2></div>
          <a className="text-link" href="https://github.com/rootkow" target="_blank" rel="noreferrer">
            View all projects <Icon name="arrow" size={18} />
          </a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.title}>
              <div className="project-top">
                <div className="project-icon"><Icon name={project.icon} size={27} /></div>
                <div><h3>{project.title}</h3><p>{project.subtitle}</p></div>
              </div>
              <p className="project-description">{project.description}</p>
              <ul className="tag-list" aria-label={`${project.title} technologies`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformStack() {
  return (
    <section className="content-section stack-section" id="stack">
      <SectionLabel tone="green">DATA LAYER</SectionLabel>
      <div className="section-content">
        <div className="section-heading">
          <div><p className="kicker">Core capabilities</p><h2>Platform Stack</h2></div>
        </div>
        <div className="stack-card">
          {stack.map((group) => (
            <div className="stack-group" key={group.title}>
              <h3><Icon name={group.icon} />{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.label}>
                    {item.brand
                      ? <BrandIcon icon={item.brand} />
                      : <Icon name={item.icon} size={17} />}
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EndpointGraphic() {
  return (
    <div className="endpoint-graphic" aria-hidden="true">
      <div className="endpoint-panel">
        <div className="endpoint-header">
          <div className="endpoint-title">
            <Icon name="server" size={17} />
            <span>Public API</span>
          </div>
          <div className="endpoint-health">
            <i />
            Operational
          </div>
        </div>

        <div className="endpoint-route">
          <span>POST</span>
          <code>/api/connect</code>
          <Icon name="arrow" size={17} />
        </div>

        <div className="endpoint-response">
          <div className="response-icon">
            <Icon name="check" size={20} />
          </div>
          <div>
            <strong>200 OK</strong>
            <small>Connection established</small>
          </div>
          <time>42 ms</time>
        </div>

        <div className="endpoint-metrics">
          <div>
            <span>Availability</span>
            <strong>99.99%</strong>
          </div>
          <div>
            <span>Region</span>
            <strong>us-east-1</strong>
          </div>
        </div>
      </div>

    </div>
  );
}

function Contact() {
  return (
    <section className="content-section contact-section" id="contact">
      <SectionLabel>ENDPOINT</SectionLabel>
      <div className="contact-copy">
        <p className="kicker">Available for the right opportunity</p>
        <h2>Let's Build Something Great</h2>
        <p>
          This portfolio highlights production-oriented software engineering across backend,
          cloud, platform, and AI/ML systems.
        </p>
        <div className="contact-grid">
          {contacts.map((contact) => {
            const content = <><Icon name={contact.icon} size={19} /><span>{contact.label}</span></>;
            return contact.href ? (
              <a href={contact.href} key={contact.label} target={contact.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {content}
              </a>
            ) : <div key={contact.label}>{content}</div>;
          })}
        </div>
      </div>
      <EndpointGraphic />
    </section>
  );
}

export default function App() {
  return (
    <div className="site-shell" id="top">
      <Header />
      <main>
        <Hero />
        <Projects />
        <PlatformStack />
        <Contact />
      </main>
      <footer>© {new Date().getFullYear()} Developer Portfolio. Built with intent.</footer>
    </div>
  );
}
