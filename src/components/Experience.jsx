import Section from "./Section.jsx";
import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      {experience.map((e) => (
        <article key={e.role + e.org} className="item">
          <h3>{e.role}, {e.org}</h3>
          <p className="muted">{e.period}</p>
          <ul>{e.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </article>
      ))}
    </Section>
  );
}
