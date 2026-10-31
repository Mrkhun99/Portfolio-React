import { experiences } from '../data'
import LinkButtons from './LinkButtons'
import SectionHead from './SectionHead'

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead kicker="03 — Experience" title="Where I've worked" />
        <ol className="timeline">
          {experiences.map((e) => (
            <li key={e.role} className="timeline-item reveal">
              <div className="card">
                <div className="item-head">
                  <div>
                    <h3>{e.role}</h3>
                    <p className="company">{e.company}</p>
                  </div>
                  <span className="pill">{e.period}</span>
                </div>
                <ul className="points">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <ul className="tags">
                  {e.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <LinkButtons links={e.links} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
