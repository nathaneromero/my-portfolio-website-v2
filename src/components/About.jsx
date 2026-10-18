import Section from "./Section.jsx";
import { about } from "../data/content.js";

export default function About() {
  return (
    <Section id="about" title="About me">
      {about.map((p, i) => <p key={i}>{p}</p>)}
    </Section>
  );
}
