import { Playfair_Display, Space_Grotesk } from "next/font/google";

const headingFont = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });
const bodyFont = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function Home() {
  const profileLinks = {
    resume: "https://drive.google.com/file/d/101QFYf9FKA4IWve0JEbsN3En9lYyGiya/view?usp=sharing",
    github: "https://github.com/chinmayiii",
    linkedin: "https://www.linkedin.com/in/chinmayi-b",
    email: "chinmayibellippadi@gmail.com",
  };

  const projects = [
    {
      title: "Drifting Oracle",
      subtitle: "AI System for Detecting Data Drift in Machine Learning Models",
      badge: "ML Monitoring",
      metric: "40% lower hallucination rate using governance layer",
      problem:
        "Machine learning models degrade over time as data distribution changes, leading to inaccurate predictions and unreliable systems.",
      solution:
        "Built a system to detect data drift using statistical techniques and monitor model performance in real-time.",
      tech: ["Python", "Pandas", "Scikit-learn", "Model Monitoring"],
      impact: [
        "Enabled early detection of model performance degradation",
        "Improved reliability of deployed ML systems",
      ],
      links: [{ label: "GitHub", href: "https://github.com/chinmayiii?tab=repositories&q=drifting" }],
    },
    {
      title: "Deepfake Detection System",
      subtitle: "Computer Vision Model for Detecting Manipulated Media",
      badge: "Computer Vision",
      metric: "2-class CNN classifier (Real vs Fake) for manipulated media",
      problem:
        "Deepfake content poses serious risks by spreading misinformation and manipulated visuals.",
      solution:
        "Developed a deep learning model to classify real vs fake media using computer vision techniques.",
      tech: ["Python", "CNN", "OpenCV", "TensorFlow/PyTorch"],
      impact: [
        "Achieved high accuracy in detecting fake content",
        "Contributed to safer digital media consumption",
      ],
      links: [{ label: "GitHub", href: "https://github.com/chinmayiii/deepfake" }],
    },
    {
      title: "Carpool Optimization Platform",
      subtitle: "System to Optimize Ride Sharing and Allocation",
      badge: "Optimization",
      metric: "Optimization-driven matching for multi-user ride allocation",
      problem: "Inefficient ride allocation leads to increased costs and travel time.",
      solution:
        "Designed an optimization-based system to match users and minimize travel inefficiencies.",
      tech: ["Algorithms", "Python", "Web Stack"],
      impact: ["Improved ride allocation efficiency", "Reduced travel cost and time"],
      links: [{ label: "GitHub", href: "https://github.com/chinmayiii/carpoool" }],
    },
    {
      title: "Smart Healthcare Management System",
      subtitle: "System for Efficient Patient Flow and Scheduling",
      badge: "Full Stack",
      metric: "3 workflows covered: patient flow, scheduling, resource allocation",
      problem:
        "Hospitals face inefficiencies in managing patient flow and appointment scheduling.",
      solution:
        "Built a system to streamline patient management, scheduling, and resource allocation.",
      tech: ["DBMS", "Web Development", "Scheduling Systems"],
      impact: ["Improved operational efficiency", "Reduced manual workload"],
      links: [{ label: "GitHub", href: "https://github.com/chinmayiii?tab=repositories&q=healthcare" }],
    },
  ];

  const placementHighlights = [
    "Software Development + ML",
    "Core CS: DSA, OOP, DBMS, OS",
    "Expected Graduation: May 2027",
  ];

  const skills = [
    "Python",
    "C",
    "C++",
    "Java",
    "JavaScript",
    "SQL",
    "HTML/CSS",
    "React",
    "Node.js",
    "FastAPI",
    "Express",
    "MongoDB",
    "Git",
    "GitHub",
    "VS Code",
    "Vercel",
    "Render",
    "Postman",
    "DSA",
    "OOP",
    "DBMS",
    "Operating Systems",
    "Machine Learning",
  ];

  const hackathons = [
    {
      name: "Hackbricks",
      organizer: "Manipal Institute of Technology, Bengaluru",
      note: "Certificate of Participation for enthusiastic problem-solving and technical excellence.",
      link: "https://drive.google.com/file/d/1BFBuwT430Syr2jVdEZsaWD63-BtEi6iE/view?usp=sharing",
    },
    {
      name: "I-Solve 2024",
      organizer: "Nitte Meenakshi Institute of Technology",
      note: "Achieved Top 10 with Squad Busters at I-Solve 2024, Department of Information Science and Engineering.",
      link: "https://drive.google.com/file/d/1BMNo0vZAiSplr62SjCFkA5pLMiGOEwhm/view?usp=sharing",
    },
  ];

  const strengths = [
    "Production-aware backend thinking",
    "Strong CS fundamentals with practical execution",
    "Fast learner with consistent project shipping",
  ];

  return (
    <main className={`${bodyFont.className} portfolio`}>
      <div className="aura aura-one" />
      <div className="aura aura-two" />
      <div className="aura aura-three" />

      <header className="shell nav-wrap reveal">
        <a href="#top" className="brand">
          Chinmayi B
        </a>
        <nav className="nav-links" aria-label="Main">
          <a href="#projects">Projects</a>
          <a href="#hackathons">Hackathons</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href={profileLinks.resume} target="_blank" rel="noreferrer" className="btn btn-primary">
          Resume
        </a>
      </header>

      <section id="top" className="shell hero reveal">
        <div className="hero-grid">
          <div>
            <h1 className={`${headingFont.className} hero-title`}>Hi, I&apos;m Chinmayi</h1>
            <p className="hero-subtitle">
              Computer Science undergraduate building production-ready software and AI systems.
            </p>
            <p className="hero-copy">
              I focus on software development, machine learning, and backend engineering. I enjoy solving
              real-world problems and shipping scalable systems with measurable outcomes.
            </p>

            <div className="cta-row">
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>
              <a href={profileLinks.github} target="_blank" rel="noreferrer" className="btn btn-soft">
                GitHub
              </a>
              <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" className="btn btn-soft">
                LinkedIn
              </a>
            </div>

            <div className="pill-row">
              {placementHighlights.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="shell section reveal">
        <h2 className={`${headingFont.className} section-title`}>Projects</h2>
        <p className="section-subtitle">High-impact work aligned with placement roles.</p>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article key={project.title} className="project-card">
              <div className="project-head">
                <div className="project-title-wrap">
                  <span className="project-index">P{String(index + 1).padStart(2, "0")}</span>
                  <h3 className={`${headingFont.className} project-title`}>{project.title}</h3>
                </div>
                <span className="badge">{project.badge}</span>
              </div>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="metric">{project.metric}</p>

              <div className="project-body">
                <p>
                  <strong>Problem:</strong> {project.problem}
                </p>
                <p>
                  <strong>Solution:</strong> {project.solution}
                </p>

                <div>
                  <p className="project-label">Tech Stack</p>
                  <div className="tech-row">
                    {project.tech.map((item) => (
                      <span key={item} className="tech-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="project-label">Impact</p>
                  <ul>
                    {project.impact.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="project-links">
                {project.links.map((link) => (
                  <a key={`${project.title}-${link.label}`} href={link.href} target="_blank" rel="noreferrer" className="btn-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="hackathons" className="shell section reveal">
        <h2 className={`${headingFont.className} section-title`}>Hackathons</h2>
        <p className="section-subtitle">Participation highlights and certificates.</p>

        <div className="hackathon-grid">
          {hackathons.map((item) => (
            <article key={item.name} className="hackathon-card">
              <h3 className={`${headingFont.className} hackathon-title`}>{item.name}</h3>
              <p className="hackathon-org">{item.organizer}</p>
              <p className="hackathon-note">{item.note}</p>
              <a href={item.link} target="_blank" rel="noreferrer" className="btn-link">
                View Certificate
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="shell split section reveal">
        <article className="content-card">
          <h2 className={`${headingFont.className} section-title`}>About Me</h2>
          <p>
            I am a Computer Science undergraduate with strong interest in software development and its intersection
            with machine learning. I build end-to-end solutions using Python, FastAPI, React, and data-driven systems.
          </p>
          <p>
            I am actively looking for placement opportunities where I can contribute to backend, full-stack, or AI teams.
          </p>
          <ul className="strength-list">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article id="skills" className="content-card">
          <h2 className={`${headingFont.className} section-title`}>Technical Skills</h2>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section id="contact" className="shell contact section reveal">
        <h2 className={`${headingFont.className} section-title`}>Contact</h2>
        <p className="contact-line">
          Email: <a href={`mailto:${profileLinks.email}`}>{profileLinks.email}</a>
        </p>
        <div className="cta-row center">
          <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" className="btn btn-soft">
            LinkedIn
          </a>
          <a href={profileLinks.github} target="_blank" rel="noreferrer" className="btn btn-soft">
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
