import { useState, useEffect } from "react";
import { profile, socials, stats, experience, education, projects, skills, contactItems } from "./data";

// ─── SVG ICONS ────────────────────────────────────────────────────
const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const EmailIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

const TwitterIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ExternalIcon = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ─── THEME CSS VARS ───────────────────────────────────────────────
const lightVars = {
  "--bg": "#f7f5f0", "--surface": "#ffffff",
  "--text-primary": "#111", "--text-secondary": "#666", "--text-muted": "#999",
  "--border": "rgba(0,0,0,0.08)",
  "--purple-light": "#EEEDFE", "--purple-mid": "#AFA9EC", "--purple": "#7F77DD", "--purple-dark": "#3C3489",
  "--teal-light": "#E1F5EE", "--teal-mid": "#5DCAA5", "--teal": "#1D9E75", "--teal-dark": "#085041",
  "--amber-light": "#FAEEDA", "--amber-mid": "#EF9F27", "--amber": "#BA7517", "--amber-dark": "#412402",
  "--coral-light": "#FAECE7", "--coral": "#D85A30", "--coral-dark": "#4A1B0C",
  "--pill-bg": "rgba(0,0,0,0.05)", "--pill-text": "#444",
  "--tab-active-bg": "#111", "--tab-active-text": "#fff",
  "--icon-bg": "rgba(0,0,0,0.05)", "--icon-hover": "rgba(0,0,0,0.1)",
  "--toggle-bg": "#111", "--toggle-icon": "#fff",
  "--card-bg": "#fff", "--card-border": "rgba(0,0,0,0.07)",
  "--shadow": "0 2px 12px rgba(0,0,0,0.06)",
  "--timeline-dot": "#ccc", "--timeline-line": "#e5e5e5",
};

const darkVars = {
  "--bg": "#111", "--surface": "#1a1a1a",
  "--text-primary": "#f0f0f0", "--text-secondary": "#999", "--text-muted": "#555",
  "--border": "rgba(255,255,255,0.08)",
  "--purple-light": "#26215C", "--purple-mid": "#7F77DD", "--purple": "#AFA9EC", "--purple-dark": "#CECBF6",
  "--teal-light": "#04342C", "--teal-mid": "#1D9E75", "--teal": "#5DCAA5", "--teal-dark": "#9FE1CB",
  "--amber-light": "#412402", "--amber-mid": "#BA7517", "--amber": "#EF9F27", "--amber-dark": "#FAC775",
  "--coral-light": "#4A1B0C", "--coral": "#F0997B", "--coral-dark": "#FAECE7",
  "--pill-bg": "rgba(255,255,255,0.08)", "--pill-text": "#bbb",
  "--tab-active-bg": "#f0f0f0", "--tab-active-text": "#111",
  "--icon-bg": "rgba(255,255,255,0.07)", "--icon-hover": "rgba(255,255,255,0.12)",
  "--toggle-bg": "#f0f0f0", "--toggle-icon": "#111",
  "--card-bg": "#1a1a1a", "--card-border": "rgba(255,255,255,0.07)",
  "--shadow": "0 2px 12px rgba(0,0,0,0.3)",
  "--timeline-dot": "#333", "--timeline-line": "#2a2a2a",
};

// ─── SMALL REUSABLE COMPONENTS ────────────────────────────────────

const ColorBar = ({ colors }) => (
  <div style={{ display: "flex", gap: 4, marginBottom: 28 }}>
    {colors.map(({ width, color }, i) => (
      <div key={i} style={{ height: 3, width, borderRadius: 20, background: `var(--${color})` }} />
    ))}
  </div>
);

const RoleBlob = ({ label, color }) => {
  const map = {
    purple: { bg: "--purple-light", text: "--purple-dark", border: "--purple-mid" },
    teal:   { bg: "--teal-light",   text: "--teal-dark",   border: "--teal-mid"   },
    amber:  { bg: "--amber-light",  text: "--amber-dark",  border: "--amber-mid"  },
    coral:  { bg: "--coral-light",  text: "--coral",       border: "--coral"      },
  }[color];
  return (
    <span style={{
      fontSize: 11, fontWeight: 500, padding: "4px 12px", borderRadius: 20,
      border: "0.5px solid", display: "inline-block",
      background: `var(${map.bg})`, color: `var(${map.text})`, borderColor: `var(${map.border})`,
    }}>{label}</span>
  );
};

const SkillPill = ({ label, color }) => {
  const map = {
    purple: { bg: "--purple-light", text: "--purple-dark", border: "--purple-mid" },
    teal:   { bg: "--teal-light",   text: "--teal-dark",   border: "--teal-mid"   },
    amber:  { bg: "--amber-light",  text: "--amber-dark",  border: "--amber-mid"  },
    coral:  { bg: "--coral-light",  text: "--coral",       border: "--coral"      },
  }[color];
  return (
    <span style={{
      fontSize: 12, padding: "5px 13px", borderRadius: 20, border: "0.5px solid",
      background: `var(${map.bg})`, color: `var(${map.text})`, borderColor: `var(${map.border})`,
    }}>{label}</span>
  );
};

const SocialButton = ({ type, href }) => {
  const icon = {
    email:    <EmailIcon />,
    github:   <GithubIcon />,
    twitter:  <TwitterIcon />,
    linkedin: <LinkedInIcon />,
  }[type];

  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} target={type !== "email" ? "_blank" : undefined} rel="noreferrer"
      aria-label={type}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 36, height: 36, borderRadius: "50%", display: "flex",
        alignItems: "center", justifyContent: "center", textDecoration: "none",
        color: "var(--text-primary)", fontSize: 15,
        background: hovered ? "var(--icon-hover)" : "var(--icon-bg)",
        border: "0.5px solid var(--border)",
        transform: hovered ? "translateY(-2px)" : "none",
        transition: "all 0.18s",
      }}>{icon}</a>
  );
};

// ─── TAB COMPONENTS ───────────────────────────────────────────────

function AboutTab() {
  return (
    <div>
      <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 28 }}>
        {profile.bio}
      </p>

      {/* Stats */}
      <div style={{ display: "flex", gap: 12, marginBottom: 28 }}>
        {stats.map(({ num, label, color }) => {
          const map = {
            purple: { bg: "--purple-light", border: "--purple-mid", num: "--purple-dark", lbl: "--purple" },
            teal:   { bg: "--teal-light",   border: "--teal-mid",   num: "--teal-dark",   lbl: "--teal"   },
            amber:  { bg: "--amber-light",  border: "--amber-mid",  num: "--amber-dark",  lbl: "--amber"  },
          }[color];
          return (
            <div key={label} style={{
              flex: 1, borderRadius: 10, padding: "14px 16px", border: "0.5px solid",
              background: `var(${map.bg})`, borderColor: `var(${map.border})`,
            }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, fontWeight: 400, color: `var(${map.num})` }}>{num}</div>
              <div style={{ fontSize: 11, marginTop: 2, color: `var(${map.lbl})` }}>{label}</div>
            </div>
          );
        })}
      </div>

      <ColorBar colors={[
        { width: 52, color: "purple" },
        { width: 28, color: "teal" },
        { width: 18, color: "amber" },
      ]} />

      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, fontWeight: 400, color: "var(--text-primary)", marginBottom: 20 }}>
        Experience
      </h2>

      {/* Timeline */}
      <div style={{ position: "relative", paddingLeft: 24, marginBottom: 36 }}>
        <div style={{ position: "absolute", left: 10, top: 6, bottom: 6, width: 1, background: "var(--timeline-line)" }} />
        {experience.map((exp, i) => (
          <div key={i} style={{ position: "relative", marginBottom: i < experience.length - 1 ? 28 : 0 }}>
            <div style={{
              position: "absolute", left: -19, top: 5, width: 11, height: 11, borderRadius: "50%",
              background: i === 0 ? "var(--purple)" : "var(--timeline-dot)",
              border: "2px solid var(--bg)",
            }} />
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
              <span style={{ fontSize: 15, fontWeight: 500, color: "var(--text-primary)" }}>{exp.company}</span>
              {exp.badge && (
                <span style={{
                  fontSize: 10, fontWeight: 500, padding: "2px 8px", borderRadius: 20,
                  background: "var(--purple-light)", color: "var(--purple-dark)",
                  border: "0.5px solid var(--purple-mid)",
                }}>{exp.badge}</span>
              )}
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "var(--purple)", marginBottom: 2 }}>{exp.role}</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 5 }}>{exp.period}</div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65 }}>
              {Array.isArray(exp.desc) ? (
                <ul style={{ paddingLeft: 18, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                  {exp.desc.map((point, j) => <li key={j}>{point}</li>)}
                </ul>
              ) : (
                exp.desc
              )}
            </div>
          </div>
        ))}
      </div>


      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, fontWeight: 400, color: "var(--text-primary)", marginBottom: 20, marginTop: 40 }}>
        Education
      </h2>

      {/* Education Timeline */}
      <div style={{ position: "relative", paddingLeft: 24, marginBottom: 36 }}>
        <div style={{ position: "absolute", left: 10, top: 6, bottom: 6, width: 1, background: "var(--timeline-line)" }} />
        {education.map((edu, i) => (
          <div key={i} style={{ position: "relative", marginBottom: i < education.length - 1 ? 28 : 0 }}>
            <div style={{
              position: "absolute", left: -19, top: 5, width: 11, height: 11, borderRadius: "50%",
              background: i === 0 ? "var(--teal)" : "var(--timeline-dot)",
              border: "2px solid var(--bg)",
            }} />
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
              <span style={{ fontSize: 15, fontWeight: 500, color: "var(--text-primary)" }}>{edu.company}</span>
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "var(--purple)", marginBottom: 2 }}>{edu.role}</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 5 }}>{edu.period}</div>
            {edu.desc && (
              <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65 }}>
                {Array.isArray(edu.desc) ? (
                  <ul style={{ paddingLeft: 18, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                    {edu.desc.map((point, j) => <li key={j}>{point}</li>)}
                  </ul>
                ) : (
                  edu.desc
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsTab() {
  return (
    <div>
      <ColorBar colors={[
        { width: 52, color: "teal" },
        { width: 28, color: "purple" },
        { width: 18, color: "amber" },
      ]} />
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, fontWeight: 400, color: "var(--text-primary)", marginBottom: 20 }}>
        Projects
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
        {projects.map((proj) => <ProjectCard key={proj.name} {...proj} />)}
      </div>
    </div>
  );
}

function ProjectCard({ icon, color, name, desc, tags, github, live }) {
  const [hovered, setHovered] = useState(false);
  const iconMap = {
    purple: { bg: "--purple-light", text: "--purple-dark" },
    teal:   { bg: "--teal-light",   text: "--teal-dark"   },
    amber:  { bg: "--amber-light",  text: "--amber-dark"  },
    coral:  { bg: "--coral-light",  text: "--coral"       },
  }[color];

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--card-bg)", border: "0.5px solid var(--card-border)",
        borderRadius: 12, padding: 16,
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered ? "var(--shadow)" : "none",
        transition: "all 0.18s",
      }}
    >
      <div style={{
        width: 36, height: 36, borderRadius: 9, marginBottom: 10,
        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
        background: `var(${iconMap.bg})`, color: `var(${iconMap.text})`,
      }}>{icon}</div>

      <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)", marginBottom: 4 }}>{name}</div>
      <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5 }}>{desc}</div>

      {/* Tags */}
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 10 }}>
        {tags.map(t => (
          <span key={t} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 20, background: "var(--pill-bg)", color: "var(--pill-text)" }}>{t}</span>
        ))}
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: 7, marginTop: 12 }}>
        {github && (
          <a href={github} target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            fontSize: 11, fontWeight: 500, padding: "5px 11px", borderRadius: 20,
            border: "0.5px solid var(--border)", textDecoration: "none",
            background: "var(--pill-bg)", color: "var(--text-primary)",
            transition: "opacity 0.15s, transform 0.15s",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            <GithubIcon size={12} /> Code
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            fontSize: 11, fontWeight: 500, padding: "5px 11px", borderRadius: 20,
            border: "0.5px solid var(--teal-mid)", textDecoration: "none",
            background: "var(--teal-light)", color: "var(--teal-dark)",
            transition: "opacity 0.15s, transform 0.15s",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            <ExternalIcon size={11} /> Visit Site
          </a>
        )}
      </div>
    </div>
  );
}

function SkillsTab() {
  return (
    <div>
      <ColorBar colors={[
        { width: 52, color: "amber" },
        { width: 28, color: "teal" },
        { width: 18, color: "purple" },
      ]} />
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, fontWeight: 400, color: "var(--text-primary)", marginBottom: 20 }}>
        Tech Stack
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {skills.map(({ group, color, items }) => (
          <div key={group}>
            <div style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 }}>{group}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {items.map(item => <SkillPill key={item} label={item} color={color} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactTab() {
  const colorMap = {
    purple: { bg: "--purple-light", text: "--purple-dark" },
    teal:   { bg: "--teal-light",   text: "--teal-dark"   },
    amber:  { bg: "--amber-light",  text: "--amber-dark"  },
    coral:  { bg: "--coral-light",  text: "--coral"       },
  };

  const iconComponents = {
    email: <EmailIcon size={16} />,
    github: <GithubIcon size={16} />,
    linkedin: <LinkedInIcon size={16} />,
    twitter: <TwitterIcon size={16} />,
  };

  return (
    <div>
      <ColorBar colors={[
        { width: 52, color: "purple" },
        { width: 28, color: "amber" },
        { width: 18, color: "teal" },
      ]} />
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, fontWeight: 400, color: "var(--text-primary)", marginBottom: 8 }}>
        Get in touch
      </h2>
      <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 24 }}>
        Open to interesting opportunities, collaborations, and conversations. Feel free to reach out!
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {contactItems.map(({ href, iconName, color, label, value }) => {
          const [hovered, setHovered] = useState(false);
          const c = colorMap[color];
          const icon = iconComponents[iconName];
          return (
            <a key={label} href={href} target={label !== "Email" ? "_blank" : undefined} rel="noreferrer"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                display: "flex", alignItems: "center", gap: 14,
                background: "var(--card-bg)", border: "0.5px solid var(--card-border)",
                borderRadius: 10, padding: "14px 16px", textDecoration: "none",
                color: "var(--text-primary)", transform: hovered ? "translateX(4px)" : "none",
                transition: "transform 0.15s",
              }}>
              <div style={{
                width: 36, height: 36, borderRadius: 9, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: `var(${c.bg})`, color: `var(${c.text})`,
              }}>{icon}</div>
              <div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{label}</div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text-primary)", marginTop: 1 }}>{value}</div>
              </div>
              <div style={{ marginLeft: "auto", color: "var(--text-muted)" }}><ArrowIcon /></div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────
const TABS = ["about", "projects", "skills", "contact"];

export default function App() {
  const [dark, setDark] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  // Apply CSS variables to :root
  useEffect(() => {
    const vars = dark ? darkVars : lightVars;
    Object.entries(vars).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
    document.body.style.background = dark ? "#111" : "#f7f5f0";
    document.body.style.color = dark ? "#f0f0f0" : "#111";
    document.body.style.transition = "background 0.3s, color 0.3s";
    document.body.style.fontFamily = "'DM Sans', sans-serif";
    document.body.style.minHeight = "100vh";
  }, [dark]);

  const tabContent = {
    about:    <AboutTab />,
    projects: <ProjectsTab />,
    skills:   <SkillsTab />,
    contact:  <ContactTab />,
  };

  return (
    <>
      {/* Page */}
      <div style={{ position: "relative", maxWidth: 680, margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Theme Toggle */}
        <button
          onClick={() => setDark(d => !d)}
          aria-label="Toggle theme"
          style={{
            position: "absolute", top: 48, right: 24, width: 44, height: 44,
            borderRadius: "50%", background: "var(--toggle-bg)", border: "none",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--toggle-icon)", fontSize: 18, zIndex: 100,
            boxShadow: "var(--shadow)", transition: "background 0.3s, transform 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
          onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
          {dark ? "☀️" : "🌙"}
        </button>

        {/* Avatar */}
        {profile.photo ? (
          <img src={profile.photo} alt={profile.name} style={{
            width: 96, height: 96, borderRadius: "50%", objectFit: "cover",
            border: "3px solid var(--surface)", boxShadow: "var(--shadow)", marginBottom: 16, display: "block",
          }} />
        ) : (
          <div style={{
            width: 96, height: 96, borderRadius: "50%", background: "var(--purple-light)",
            border: "3px solid var(--surface)", boxShadow: "var(--shadow)", marginBottom: 16,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'DM Serif Display', serif", fontSize: 32, color: "var(--purple-dark)",
          }}>{profile.initials}</div>
        )}

        {/* Name + Tagline */}
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 30, fontWeight: 400, color: "var(--text-primary)", marginBottom: 6, lineHeight: 1.15 }}>
          {profile.name}
        </h1>
        <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 18, lineHeight: 1.5 }}>
          {profile.tagline}
        </p>

        {/* Role Blobs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
          {profile.roles.map(r => <RoleBlob key={r.label} {...r} />)}
        </div>

        {/* Socials */}
        <div style={{ display: "flex", gap: 10, marginBottom: 28 }}>
          {socials.map(s => <SocialButton key={s.type} {...s} />)}
        </div>

        {/* Divider */}
        <hr style={{ border: "none", borderTop: "0.5px solid var(--border)", marginBottom: 24 }} />

        {/* Tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
          {TABS.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              fontSize: 13, fontWeight: 500, padding: "7px 18px", borderRadius: 20,
              border: "0.5px solid var(--border)", cursor: "pointer",
              background: activeTab === tab ? "var(--tab-active-bg)" : "transparent",
              color: activeTab === tab ? "var(--tab-active-text)" : "var(--text-secondary)",
              transition: "all 0.2s", textTransform: "capitalize",
            }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {tabContent[activeTab]}

        {/* Footer */}
        <footer style={{
          marginTop: 64,
          paddingTop: 24,
          borderTop: "0.5px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
        }}>
          <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} <span style={{ color: "var(--text-secondary)", fontWeight: 500 }}>{profile.name}</span>. All rights reserved.
          </p>
          {/* <p style={{ fontSize: 12, color: "var(--text-muted)" }}>
            Built with{" "}
            <span style={{ color: "var(--purple)", fontWeight: 500 }}>React</span>
            {" "}·{" "}
            <span style={{ color: "var(--teal)", fontWeight: 500 }}>Vite</span>
          </p> */}
        </footer>

      </div>
    </>
  );
}
