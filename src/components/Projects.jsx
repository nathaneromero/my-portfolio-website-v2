import Section from "./Section.jsx";
import { projects } from "../data/content.js";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid">
        {projects.map((p) => (
          <article key={p.name} className="card">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p className="muted">{p.tech.join(", ")}</p>
            <p>
              {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Code</a>}
              {p.repo && p.demo && " | "}
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo</a>}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
