import { education, languages, profile, stats } from '../data'
import SectionHead from './SectionHead'

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead kicker="01 — About" title="A little about me" />
        <div className="about-grid">
          <div className="about-text reveal">
            {profile.about.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
            <div className="stats">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <aside className="card edu-card reveal">
            <span className="card-label">Education</span>
            <h3>{education.school}</h3>
            <p>{education.degree}</p>
            <p className="muted">{education.major}</p>
            <div className="edu-foot">
              <span className="pill">{education.period}</span>
              <span className="muted">{education.location}</span>
            </div>
            <span className="card-label lang-label">Languages</span>
            {languages.map((l) => (
              <div key={l.name} className="lang">
                <div className="lang-row">
                  <span>{l.name}</span>
                  <span className="muted">{l.level}</span>
                </div>
                <div className="bar">
                  <span style={{ width: `${l.percent}%` }} />
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}

export default About
