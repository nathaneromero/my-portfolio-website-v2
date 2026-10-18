import Section from "./Section.jsx";
import { certifications } from "../data/content.js";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <ul className="plain">
        {certifications.map((c) => (
          <li key={c.name}>
            {c.link ? <a href={c.link} target="_blank" rel="noreferrer">{c.name}</a> : c.name}
            <span className="muted"> - {c.issuer}, {c.date}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
