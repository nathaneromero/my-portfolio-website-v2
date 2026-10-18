import Section from "./Section.jsx";
import { profile } from "../data/content.js";

export default function Contact() {
  return (
    <Section id="contact" title="Contact me">
      <p>The best way to reach me is by email.</p>
      <ul className="plain">
        <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
        <li><a href={`https://github.com/${profile.githubUsername}`} target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
      </ul>
    </Section>
  );
}
