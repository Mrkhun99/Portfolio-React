import { useState } from "react";
import { profile } from "../data";

const icons = {
  linkedin:
    "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  telegram:
    "M21.94 3.2 18.7 19.1c-.24 1.1-.88 1.37-1.8.86l-4.96-3.66-2.4 2.31c-.26.27-.49.49-1 .49l.36-5.05 9.2-8.31c.4-.36-.09-.55-.62-.2L6.1 12.7l-4.9-1.53c-1.06-.33-1.08-1.06.23-1.58L20.54 2.3c.89-.33 1.66.2 1.4.9Z",
  facebook:
    "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z",
};

function Avatar() {
  const [failed, setFailed] = useState(false);
  const initials = profile.name
    .split(" ")
    .map((p) => p[0])
    .join("");

  return (
    <div className="avatar">
      {failed ? (
        <span className="avatar-initials">{initials}</span>
      ) : (
        <img
          src={profile.photoUrl}
          alt={profile.name}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function Home() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          {/* <p className="eyebrow">
            <span className="dot" /> Open to junior developer & QA roles
          </p> */}
          <h1>
            Hi, I'm <span className="accent">{profile.name}</span>
          </h1>
          <h2 className="hero-role">{profile.role}</h2>
          <p className="lead">{profile.tagline}</p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href={profile.cvUrl} className="btn btn-ghost" download>
              Download CV ↓
            </a>
          </div>
          <ul className="socials">
            {profile.socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={icons[s.icon]} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <ul className="hero-meta">
            <li>📍 {profile.locationShort}</li>
            <li>
              ✉ <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
          </ul>
        </div>
        <div className="hero-visual">
          <div className="avatar-ring">
            <Avatar />
          </div>
          {/* <div className="floating-card card-a">
            <strong>React · Laravel</strong>
            <span>Frontend & Backend</span>
          </div>
          <div className="floating-card card-b">
            <strong>QA Engineer</strong>
            <span>API & system testing</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
