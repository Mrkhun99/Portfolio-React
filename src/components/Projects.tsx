import { projects } from "../data";
import LinkButtons from "./LinkButtons";
import SectionHead from "./SectionHead";

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHead
          kicker="04 — Projects"
          title="Things I've built with my team"
        />
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.title} className="card project-card reveal">
              <div className="project-banner" aria-hidden="true">
                <div className="mock">
                  <div className="mock-bar">
                    <i /> <i /> <i />
                  </div>
                  <div className="mock-body">
                    {["To do", "Doing", "Done"].map((col, ci) => (
                      <div key={col} className="mock-col">
                        <span>{col}</span>
                        {Array.from({ length: 3 - ci }, (_, k) => (
                          <b key={k} />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="project-body">
                <div className="item-head">
                  <div>
                    <span className="card-label">{p.subtitle}</span>
                    <h3>{p.title}</h3>
                    <p className="company">{p.role}</p>
                  </div>
                  <span className="pill">{p.period}</span>
                </div>
                <p>{p.description}</p>
                <ul className="points">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <LinkButtons links={p.links} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
