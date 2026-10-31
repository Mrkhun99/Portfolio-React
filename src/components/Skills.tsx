import { skillGroups, softSkills } from "../data";
import SectionHead from "./SectionHead";

type CardProps = {
  title: string;
  icon: string;
  items: readonly string[];
  wide?: boolean;
};

function SkillCard({ title, icon, items, wide }: CardProps) {
  return (
    <div className={`card skill-card reveal ${wide ? "skill-card-wide" : ""}`}>
      <div className="skill-head">
        <div className="skill-icon" aria-hidden="true">
          {icon}
        </div>
        <h3>{title}</h3>
        <span className="skill-count">{items.length}</span>
      </div>
      <ul className={`tags ${wide ? "tags-soft" : ""}`}>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionHead kicker="02 — Skills" title="What I work with" />
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <SkillCard key={g.title} {...g} />
          ))}
          <SkillCard title="Soft Skills" icon="✦" items={softSkills} wide />
        </div>
      </div>
    </section>
  );
}

export default Skills;
